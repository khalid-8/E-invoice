import './styles/Invoice.css'
import * as htmlToImage from 'html-to-image';
import jsPDF from 'jspdf';
import QRCode from "react-qr-code";
import { useState, useEffect } from 'react';
import { Oval } from  'react-loader-spinner';
// import addFont from './Cairo-Regular-normal';
// import CairoRegularnormal from './CairoRegularnormal';
// import html2canvas from 'html2canvas';
// import html2pdf from 'html2pdf.js';
// import ReactDOM from 'react-dom'
// import $ from 'jquery'; 
// import jsPDF from 'jspdf';


export default function PrintInvoice({data, total, sellerInfo}) {
    const [invoiceID, setInvoiceID] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    const SellerName = sellerInfo.sellerName
    const VatNum = sellerInfo.VATnumber

    //Generate Random Invoice Number
    const ID = function () {
        return '#B' + Math.floor(100000 + Math.random() * 900000);
    };

    //Determin the QR code size
    const QrSize = function (){
        // if screen width / 6 is larger than 100 return 100 otherwise return the screen width / 6
        return parseInt(document.documentElement.clientWidth/6) < 100? parseInt(document.documentElement.clientWidth/6) : 100 
    }

    useEffect(() => {
        setInvoiceID(ID().toString())
        //Adding my custom font "Cairo-Regular" to jsPDF
        // addFont();

    },[])


    function getTLVfromValue(tagNum, tagValue){
        const tagBuf = Buffer.from([tagNum], 'utf8')
        const tagValueLenBuf = Buffer.from([tagValue.length], 'utf8')
        let tagValueBuf = Buffer.from(tagValue, 'utf8')
        
        const bufsArray = [tagBuf, tagValueLenBuf, tagValueBuf]
        // console.log(bufsArray)
        return Buffer.concat(bufsArray)
    }
    //Generate the QrCode using the Seller Name, VAT number, Time Stamp, Total amount & VAT amount buffer values
    function createQrCode(order){
        //seller Name
        const Seller = getTLVfromValue("1", SellerName)
        //VAT Number
        const VatReg = getTLVfromValue("2", VatNum)
        //Time Stamp
        const timeStamp = getTLVfromValue("3", new Date().toLocaleString("en-US", {timeZone: "Asia/Riyadh"}))//new Date().toISOString())
        console.log()
        //Invoice Amount
        const invoiceAmount = getTLVfromValue("4", order.amount)
        //VAT Amount
        const VatAmount = getTLVfromValue("5", order.vat)

        const tagsBufsArray = [Seller, VatReg, timeStamp, invoiceAmount, VatAmount]

        const qrCodeBuf = Buffer.concat(tagsBufsArray)
        const qrCodeB64 = qrCodeBuf.toString('base64')
        return qrCodeB64
    }

    function updatingStyling(docStyle, sheet, invoice, hasPrinted){
        // if the prenting has been done update the styles to the original values
        if (hasPrinted){
            docStyle.setProperty('--s1vw_4em', 'min(1vw, 4em)');
            docStyle.setProperty('--s1_3vw_0_8em', 'min(1.3vw, .8em)');
            docStyle.setProperty('--s2_2vw_1em', 'min(2vw, 1em)');
            docStyle.setProperty('--s2vw_1_1em', 'min(2vw, 1.1em)');
            docStyle.setProperty('--s2_2vw_1_em', 'min(2.2vw, 1em)');
            docStyle.setProperty('--s2_2vw_1_1em', 'min(2.2vw, 1.1em)');
            docStyle.setProperty('--s2vw_0_9em', 'min(2vw, .9em)');
            docStyle.setProperty('--s2_5vw_1_1em', 'min(2.5vw, 1.1em)');
            docStyle.setProperty('--s2_4vw_1_2em', 'min(2.4vw, 1.2em)');
            
            sheet.style = `min(80vw, 55em);`
            invoice.style = `width: 90vw;`;
            return;
        }
        
        //make the text bigger by updating the CSS custom vars
        docStyle.setProperty('--s1vw_4em', '4em');
        docStyle.setProperty('--s1_3vw_0_8em', '0.8em');
        docStyle.setProperty('--s2_2vw_1em', '1em');
        docStyle.setProperty('--s2vw_1_1em', '1.1em');
        docStyle.setProperty('--s2_2vw_1_em', '1em');
        docStyle.setProperty('--s2_2vw_1_1em', '1.1em');
        docStyle.setProperty('--s2vw_0_9em', '0.9em');
        docStyle.setProperty('--s2_5vw_1_1em', '1.1em');
        docStyle.setProperty('--s2_4vw_1_2em', '1.2em');
        // make the invoice sheet larger and the invoice fet the new width
        sheet.style = `width: 55em;`
        invoice.style = `width: 100%;`;
    }
    // Download a PDF of the invoice
    async function downloadPDF(){
        //Change Styling before printing
        // let row = document.getElementsByClassName("row")[0]
        let row = document.getElementsByClassName("row")[0]
        let invoice = document.getElementById("invoice")
        let docStyle = document.documentElement.style;

        //Updating the #Invoice styles in order to make the pdf consistent across diffrent screen sizes
        updatingStyling(docStyle, row, invoice, false);
        
        //Print the Invoice
        await htmlToImage.toPng(invoice, { quality: 0.95 })
        .then(function (dataUrl) {
            let imgWidth = 210; 
            let pageHeight = 295;  
            /*
                Here are the numbers (paper width and height) that I found to work. 
                It still creates a little overlap part between the pages.
            */
            // let doc = new jsPDF('p', 'mm');
            let doc = new jsPDF('p', 'mm', 'a4');
            const imgProps= doc.getImageProperties(dataUrl);
            let imgHeight = imgProps.height * imgWidth / imgProps.width;
            let heightLeft = imgHeight;
            //setting the font
            // doc.setFont("Cairo-Regular", "normal");
            let position = 0;

            doc.addImage(dataUrl, 'PNG', 0, position, imgWidth, imgHeight, "", "MEDIUM");
            heightLeft -= pageHeight;

            while (heightLeft >= 0) {
                position = heightLeft - imgHeight;
                doc.addPage();
                doc.addImage(dataUrl, 'PNG', 0, position, imgWidth, imgHeight, "", "MEDIUM");
                heightLeft -= pageHeight;
            }
            doc.save(invoiceID+ '.pdf'); 
            //display the pdf in the iframe
            // $("#order_print").attr("src", doc.output('bloburl'))
        }).then(() => {
            // restor the oringal styling
            updatingStyling(docStyle, row, invoice, true);
        }).catch((err) =>{
            // restor the oringal styling
            updatingStyling(docStyle, row, invoice, true);
            console.error(err)
            return err;
        })

    }

    // Adding all the rows from the input form to the invoice table
    function TableRow(data, i){
        return(
            <tr key={i}>
                <td>
                    <h6 className='desc_section'>{data.describtion}</h6>
                </td>
                <td style={{'textAlign' : 'center'}}>{data.qt}</td>
                <td style={{'textAlign' : 'center'}}><span className="font-weight-semibold">{data.price} ر.س</span></td>
            </tr>
        )
    }
    return (
        <>
            <div className="container d-flex justify-content-center mt-50 mb-50">
                {/* Loader */}
                {isLoading ? 
                    <div className='blurBG'> 
                        <div className="loader"><Oval color="#00BFFF" height={80} width={80}/></div>
                        <b className='loader_text'>... جاري التحميل</b>
                        {/** <Audio className="Loader" height="100" width="100" color='white' ariaLabel='loading'/>*/}  
                    </div> : ""}
                
                <div className="row">
                    <div className="col-md-12 text-right mb-3"> 
                    {/**Download & print the Invoice Buttons */}
                        <button className="btn btn-primary" id="download" onClick={() =>{
                            setIsLoading(true);
                            setTimeout(() => {
                                downloadPDF().then(() => {
                                    setIsLoading(false);
                                })
                            }, 500);
                            
                            }}>pdf تحميل</button>
                            {/**Print the Invoice */}
                        <button className='btn btn-primary' id="print" onClick={() =>{
                                window.print();
                        }}>طباعة</button>
                    </div>
                    {/**the start of the invoice card */}
                    <div className="card" id="invoice">
                        {/** Header */}
                        <div className="card-header"> 
                            <p>فاتورة ضريبية مبسطة</p>
                            <p>Simplified Tax Invoice</p>
                        </div>
                        {/** Store&Invoice Information */}
                        <div className="info-row">
                            <div className="store_info_invoice invoice_info">
                                <ul className="list-unstyled">
                                    <b className="text-primary">{sellerInfo.storeName ? sellerInfo.storeName : "اسم المحل"}</b>
                                    <li key={"1"}>{sellerInfo.storeAddress ? sellerInfo.storeAddress : "عنوان المحل"}</li>
                                    <li key={"2"}>{sellerInfo.storeCity? sellerInfo.storeCity : "المدينة"}</li>
                                    <li key={"3"}>{sellerInfo.storePhone ? sellerInfo.storePhone : "هاتف المحل"}</li>
                                </ul>
                            </div>
                            {/*console.log(parseInt(document.documentElement.clientWidth/6))**/}
                            <div id= "qr_code" className="barcode-tag invoice_info"> <QRCode value={createQrCode({'amount': (total).toString(), 'vat': (total*0.15).toString()})} size={QrSize()}/></div>
                            <div className="invoice_date_number invoice_info">
                                <h6 className='invoice-color'>Invoice {invoiceID}</h6>
                                <p>التاريخ: <span className="font-weight-semibold invoice_text">{new Date().toISOString().slice(0, 10)}</span></p>
                            </div>
                        </div>
                        <div className="table-responsive">
                            <table className="table print_table">
                                <thead className='print_table_head'>
                                    <tr>
                                        <th className='desc_section'>الوصف</th>
                                        <th style={{'textAlign' : 'center'}}>الكمية</th>
                                        <th style={{'textAlign' : 'center'}}>السعر</th>
                                    </tr>
                                </thead>
                                <tbody className='print_table_body'>
                                    {data.map((row, i) => TableRow(row, i))}
                                </tbody>
                            </table>
                        </div>
                        {/** Total Information */}
                        <div className="total_body">
                            <div className="total-title">
                                <h6 className="total-tableTitle">الإجمالي</h6>
                            </div>
                            <div className='checkout-table table'>
                                <table className="total_table">
                                    <tbody >
                                        <tr>
                                            <th className="text-right total">المجموع <span className="text-muted">(غير شامل القيمة المضافة):</span></th>
                                            <td className="text-left">{(total).toLocaleString()} ر.س</td>
                                        </tr>
                                        <tr>
                                            <th className="text-right">ضريبة القيمة المضافة <span className="text-muted">(15%):</span></th>
                                            <td className="text-left">{(total * 0.15).toLocaleString()} ر.س</td>
                                        </tr>
                                        <tr>
                                            <th className="text-right">المجموع:</th>
                                            <td className="text-primary text-left">
                                               {(total + (total * 0.15)).toLocaleString()} ر.س
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    {/*<iframe id="order_print" type="application/pdf" width="100%" height="100%"></iframe>*/}
                </div>
            </div>
        </>
    )
}


//prenting PDF
// await html2canvas(invoice).then((canvas) => {
    //     var imgData = canvas.toDataURL('image/png');
    //     /*
    //     Here are the numbers (paper width and height) that I found to work. 
    //     It still creates a little overlap part between the pages, but good enough for me.
    //     if you can find an official number from jsPDF, use them.
    //     */
    //     let imgWidth = 210; 
    //     let pageHeight = 295;  
    //     let imgHeight = canvas.height * imgWidth / canvas.width;
    //     let heightLeft = imgHeight;

    //     // let doc = new jsPDF('p', 'mm');
    //     let doc = new jsPDF('p', 'mm', 'a4');
    //     doc.setFont("Cairo-Regular", "normal");
    //     console.log(doc.getFontList())
    //     // doc.setFont('Cairo-Regular', 'normal');
    //     let position = 0;

    //     doc.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight, "", "MEDIUM");
    //     heightLeft -= pageHeight;

    //     while (heightLeft >= 0) {
    //         position = heightLeft - imgHeight;
    //         doc.addPage();
    //         doc.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight, "", "MEDIUM");
    //         heightLeft -= pageHeight;
    //     }
    //     doc.save(invoiceID+ '.pdf'); 
    // }).then(() => {
    //     // restor the oringal styling
    //     updatingStyling(docStyle, row, invoice, true);
    // }).catch((err) =>{
    //     // restor the oringal styling
    //     updatingStyling(docStyle, row, invoice, true);
    //     console.error(err)
    //     return err;
    // })
    
    // const imgProps= pdf.getImageProperties(dataUrl);
    // const pdfWidth = pdf.internal.pageSize.getWidth();
    // const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
    // pdf.addImage(dataUrl, 'PNG', 0, 0, pdfWidth, pdfHeight);
    // pdf.save("download.pdf"); 

    // htmlToImage.toPng(document.getElementById('invoice'), { quality: 0.95 })
    // .then(function (dataUrl) {
    //     let link = document.createElement('a');
    //     link.download = 'my-image-name.jpeg';
    //     const pdf = new jsPDF() //('l', 'in', [842.4, 1188]);
    //     const imgProps= pdf.getImageProperties(dataUrl);
    //     const pdfWidth = pdf.internal.pageSize.getWidth();
    //     const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
    //     let y = 500 // Height position of new content
        
    //     pdf.addImage(dataUrl, 'PNG', 0, 0, pdfWidth, pdfHeight);
    //     // pdf.addImage(dataUrl,0,0,canvas.width,canvas.height);
    //     if(pdfHeight > 365){ // I noticed 365 was the height of my page but for your landscape page it must be lower depending on your unit (pt, or mm or cm etc)
    //         pdf.addPage();
    //         pdf.addImage(dataUrl,0,-365,pdfWidth,pdfHeight);
    //     }
    //     pdf.save("download.pdf"); 
    // });

    // htmlToImage.toPng(document.getElementById('qr_code'), { quality: 0.95 })
    // .then(function (dataUrl) {
    //     var link = document.createElement('a');
    //     link.download = 'QrCode.jpeg';
    //     link.href = dataUrl;
    //     link.click();
    // });

//html2pdf method to print PDF
// function downloadPDF(){
//     const invoice = document.getElementById("invoice");
//     let height = Math.max(invoice.scrollHeight, invoice.offsetHeight,
//         window.clientHeight, window.scrollHeight, window.offsetHeight)
//     let heightCM = height / 35.35
//     console.log(invoice);
//     // console.log(window);
//     var opt = {
//         margin: 1,
//         filename: 'myfile.pdf',
//         image: { type: 'jpeg', quality: 0.99 },
//         html2canvas: { dpi: 192, letterRendering: true },
//         jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
//     };
//     html2pdf().from(invoice).set(opt).save();
// }
