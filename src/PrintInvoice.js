import './styles/Invoice.css'
import QRCode from "react-qr-code";
import { useState, useEffect } from 'react';
import html2pdf from 'html2pdf.js';
// import * as htmlToImage from 'html-to-image';
// import jsPDF from 'jspdf';
// import { Oval } from  'react-loader-spinner';
// import addFont from './Cairo-Regular-normal';
// import CairoRegularnormal from './CairoRegularnormal';
// import html2canvas from 'html2canvas';
// import ReactDOM from 'react-dom'
// import $ from 'jquery'; 


export default function PrintInvoice({data, total, sellerInfo}) {
    const [invoiceID, setInvoiceID] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [qrCodeSize, setQrCodeSize] = useState()

    let pageCount = 1;

    const SellerName = sellerInfo.sellerName
    const VatNum = sellerInfo.VATnumber

    //Generate Random Invoice Number
    const ID = function () {
        return '#B' + Math.floor(100000 + Math.random() * 900000);
    };

    //Determin the QR code size
    const QrSize = function (){
        // if screen width / 6 is larger than 100 return 100 otherwise return the screen width / 6
        return parseInt(document.documentElement.clientWidth/6) < 100? setQrCodeSize(parseInt(document.documentElement.clientWidth/6)) : setQrCodeSize(100)
    }

    useEffect(() => {
        setInvoiceID(ID().toString())
        QrSize()
    },[])


    function getTLVfromValue(tagNum, tagValue){
        //encode the tag number
        const tagBuf = Buffer.from([tagNum], 'utf8')
        //encode the tag value
        let tagValueBuf = Buffer.from(tagValue, 'utf8')
        //encode the tag value length
        const tagValueLenBuf = Buffer.from([tagValueBuf.length], 'utf8')
        
        const bufsArray = [tagBuf, tagValueLenBuf, tagValueBuf]
        //concat and return the 3 buffers array into 1 byte array contains the TLV message 
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
        //Invoice Amount
        const invoiceAmount = getTLVfromValue("4", order.amount)
        //VAT Amount
        const VatAmount = getTLVfromValue("5", order.vat)

        const tagsBufsArray = [Seller, VatReg, timeStamp, invoiceAmount, VatAmount]

        const qrCodeBuf = Buffer.concat(tagsBufsArray)
        const qrCodeB64 = qrCodeBuf.toString('base64')


        return qrCodeB64
    }

    async function updatingStyling(docStyle, sheet, invoice, hasPrinted){
        let total = document.getElementsByClassName('total_body')
        // if the printing has completed update the styles to the original values
        if (hasPrinted){
            invoice.style.removeProperty("height");
            QrSize()
            docStyle.setProperty('--s1vw_4em', 'min(1vw, 4em)');
            docStyle.setProperty('--s1_3vw_0_8em', 'min(1.3vw, .8em)');
            docStyle.setProperty('--s2_2vw_1em', 'min(2vw, 1em)');
            docStyle.setProperty('--s2vw_1_1em', 'min(2vw, 1.1em)');
            docStyle.setProperty('--s2_2vw_1_em', 'min(2.2vw, 1em)');
            docStyle.setProperty('--s2_2vw_1_1em', 'min(2.2vw, 1.1em)');
            docStyle.setProperty('--s2vw_1em', 'min(2vw, 1em)');
            docStyle.setProperty('--s2_5vw_1_1em', 'min(2.5vw, 1.1em)');
            docStyle.setProperty('--s2_4vw_1_2em', 'min(2.4vw, 1.2em)');
            
            sheet.style = `min(80vw, 55em);`
            invoice.style = `width: 90vw;`;
            total[0].style.position = 'relative'
            return;
        }

        //Make the QR code bigger
        setQrCodeSize(100)
        //make the text bigger by updating the CSS custom vars
        docStyle.setProperty('--s1vw_4em', '4em');
        docStyle.setProperty('--s1_3vw_0_8em', '0.8em');
        docStyle.setProperty('--s2_2vw_1em', '1em');
        docStyle.setProperty('--s2vw_1_1em', '1.1em');
        docStyle.setProperty('--s2_2vw_1_em', '1em');
        docStyle.setProperty('--s2_2vw_1_1em', '1.1em');
        docStyle.setProperty('--s2vw_1em', '1em');
        docStyle.setProperty('--s2_5vw_1_1em', '1.1em');
        docStyle.setProperty('--s2_4vw_1_2em', '1.2em');

        // make the invoice sheet larger and the invoice fet the new width and height
        sheet.style = `width: 55em;`
        console.log(`Page Count is: ${pageCount}`)
        invoice.style = `width: 100%; height: ${pageCount*1004}px;`;

        //position the total table at the end of the invoice
        total[0].style.position = 'absolute'

        // total[0].style = 'overflow: hidden;'
    }
    // Download a PDF of the invoice
    async function downloadPDF(){

        let row = document.getElementsByClassName("row")[0]
        let invoice = document.getElementById("invoice")
        let docStyle = document.documentElement.style;
        console.log("waiting...")
        //Get the number of pages
        await getInvoicePages(invoice);
        console.log("Done")
        
        //Updating the Invoice styles in order to make the pdf consistent across diffrent screen sizes
        updatingStyling(docStyle, row, invoice, false);
        var opt =
            {
                margin: [0, 0, 15, 0],
            }
        //Create and Save the PDF file using html2pdf.js
        await html2pdf().set(opt).from(invoice).toPdf().get('pdf')
        // You have access to the jsPDF object and can use it as desired.
        .then(function (pdfObj) {
            let pdfPages = pdfObj.internal.getNumberOfPages()
            //delete the first blank page
            if (pdfPages !== pageCount)
            {
                pdfObj.deletePage(1);
            }
            
            //Save the file
            pdfObj.save(invoiceID+ '.pdf')
        }).then(() => {
            // restor the oringal styling
            updatingStyling(docStyle, row, invoice, true);
        }).catch((err) =>{
            // restor the oringal styling
            updatingStyling(docStyle, row, invoice, true);
            console.error(err)
            return err;
        });
        
    }

    async function getInvoicePages(invoice){
        new Promise(() => {
            pageCount = 1
            let invoiceHeight = invoice.clientHeight - 1004;
            while (invoiceHeight >= 0){
                pageCount += 1;
                invoiceHeight -= 1004;
            }
        })
    }
    // Adding all the rows from the input form to the invoice table
    function TableRow(data, i){
        return(
            <tr key={i}>
                <td className='itemNum'>{i+1}</td>
                <td>
                    <h6 className='desc_section'>{data.describtion}</h6>
                </td>
                <td className={i===19? "firstPage" : ""} style={{'textAlign' : 'center'}}>{data.qt}</td>
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
                        <div className="loader"></div>
                        <b className='loader_text'>... جاري التحميل</b>
                        {/** <Audio className="Loader" height="100" width="100" color='white' ariaLabel='loading'/>*/}  
                    </div>  : ""}
                
                <div className="row">
                    <div className="col-md-12 text-right mb-3"> 
                    {/**Download & print the Invoice Buttons */}
                        <button className="btn btn-primary" id="download" onClick={() =>{
                            setIsLoading(true);
                            setTimeout(() => {
                                downloadPDF().then(() => {
                                    setIsLoading(false);
                                }).catch((err) =>{
                                    setIsLoading(false);
                                })
                            }, 500);
                            
                            }}>pdf تحميل</button>
                            {/**Print the Invoice */}
                        <button className='btn btn-primary' id="print" onClick={async () =>{
                                await setQrCodeSize(100);
                                window.print();
                                QrSize() 
                                
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
                            <div className="invoice_date_number invoice_info">
                            <b className='invoice-color'>Invoice {invoiceID}</b>
                            <p className='invoice-rs-info'>الرقم الضريبي: {VatNum}</p>
                            <p className='invoice-rs-info'>التاريخ: <span className="font-weight-semibold invoice_text">{new Date().toISOString().slice(0, 10)}</span></p>
                        </div>
                            {/*console.log(parseInt(document.documentElement.clientWidth/6))**/}
                            <div id= "qr_code" className="barcode-tag invoice_info"> <QRCode value={createQrCode({'amount': (total+(total*0.15)).toString(), 'vat': (total*0.15).toString()})} size={qrCodeSize}/></div>
                            <div className="store_info_invoice invoice_info">
                                <ul className="list-unstyled">
                                    <b className="text-primary">{sellerInfo.storeName ? sellerInfo.storeName : SellerName}</b>
                                    <li key={"1"}>{sellerInfo.storeAddress ? sellerInfo.storeAddress : ""}</li>
                                    <li key={"2"}>{sellerInfo.storeCity? sellerInfo.storeCity : ""}</li>
                                    <li key={"3"}>{sellerInfo.storePhone ? sellerInfo.storePhone : ""}</li>
                                </ul>
                            </div>
                        </div>
                        <div className="table-responsive">
                            <table className="table print_table">
                                <thead className='print_table_head'>
                                    <tr>
                                        <th className='itemNum'>#</th>
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

    //Create and Save the PDF file using html2canvas & jsPDF
    // await html2canvas(invoice, {
    //     dpi: 300, // Set to 300 DPI
    //     scale: 3, // Adjusts your resolution
    // }).then((canvas) => {  
    //     let imgWidth = 210; 
    //     let pageHeight = 295;  
    //     /*
    //         Here are the numbers (paper width and height) that I found to work. 
    //         It still creates a little overlap part between the pages.
    //     */
    //     let doc = new jsPDF('p', 'mm', 'a4');
    //     const imgProps= doc.getImageProperties(canvas);
    //     let imgHeight = imgProps.height * imgWidth / imgProps.width;
    //     let heightLeft = imgHeight;
    //     let position = 0;

    //     doc.addImage(canvas, 'PNG', 0, position, imgWidth, imgHeight, "", "MEDIUM");
    //     heightLeft -= pageHeight;
    //     //15
    //     while (heightLeft >= 0) {
    //         position = heightLeft - imgHeight;
    //         doc.addPage();
    //         doc.addImage(canvas, 'PNG', 0, position, imgWidth, imgHeight, "", "MEDIUM");
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
    // });