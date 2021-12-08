import './styles/Invoice.css'
// import jsPDF from 'jspdf';
// import html2canvas from 'html2canvas';
// import html2pdf from 'html2pdf.js';
// import ReactDOM from 'react-dom'
import jsPDF from 'jspdf';
import * as htmlToImage from 'html-to-image';
import QRCode from "react-qr-code";

export default function TestInvoice(props) {
    // let totalPrice = 0

    const SellerName = "khalid Salem Alnahdi"
    const VatNum = "100025906700003"

    function getTLVfromValue(tagNum, tagValue){
        const tagBuf = Buffer.from([tagNum], 'utf8')
        const tagValueLenBuf = Buffer.from([tagValue.length], 'utf8')
        let tagValueBuf = Buffer.from(tagValue, 'utf8')
        
        const bufsArray = [tagBuf, tagValueLenBuf, tagValueBuf]
        // console.log(bufsArray)
        return Buffer.concat(bufsArray)
    }

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


    function downloadPDF(){
        htmlToImage.toPng(document.getElementById('invoice'), { quality: 0.95 })
        .then(function (dataUrl) {
            let link = document.createElement('a');
            link.download = 'my-image-name.jpeg';
            const pdf = new jsPDF() //('l', 'in', [842.4, 1188]);
            const imgProps= pdf.getImageProperties(dataUrl);
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
            pdf.addImage(dataUrl, 'PNG', 0, 0, pdfWidth, pdfHeight);
            pdf.save("download.pdf"); 
        });
    }

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

    function TableRow(data){
        return(
            <tr>
                <td>
                    <h6 class="mb-0">{data.describtion}</h6>
                </td>
                    <td>{data.type}</td>
                <td>{data.weight}g</td>
                <td>{data.qt}</td>
                <td><span class="font-weight-semibold">{data.price*data.qt} ر.س</span></td>
            </tr>
        )
    }
    return (
        <>
            <div class="container d-flex justify-content-center mt-50 mb-50">
                <div class="row">
                    <div class="col-md-12 text-right mb-3"> 
                        <button class="btn btn-primary" id="download" onClick={downloadPDF}> download pdf</button>
                    </div>
                    <div class="col-md-12">
                        <div class="card" id="invoice">
                            <div class="card-header bg-transparent header-elements-inline">
                                <div class="invoie-type"> 
                                    <p>فاتورة ضريبية مبسطة</p>
                                    <p>Simplified Tax Invoice</p>
                                </div>
                            </div>
                            <div class="card-body">
                                <div class="row info-row">
                                    <div class="">
                                            <ul class="list list-unstyled mb-0">
                                                <b class="text-primary">اسم المحل</b>
                                                <li >عنوان المحل</li>
                                                <li>جدة</li>
                                                <li>0546491279 </li>
                                            </ul>
                                    </div>
                                    <div className=" barcode-tag"> <QRCode value={createQrCode({'amount': props.total.toString(), 'vat': (props.total*0.15).toString()})} size={110}/></div>
                                    <div class="">
                                        <h6 class="invoice-color mb-2 ">Invoice #BBB1243</h6>
                                        <p>التاريخ: <span class="font-weight-semibold">{new Date().toISOString().slice(0, 10)}</span></p>
                                    </div>
                                </div>
                            </div>
                            <div class="table-responsive">
                                <table class="table table-lg main-table">
                                    <thead>
                                        <tr>
                                            <th>الوصف</th>
                                            <th>العيار</th>
                                            <th>الوزن</th>
                                            <th>الكمية</th>
                                            <th>السعر</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {props.data.map((row) => TableRow(row))}
                                    </tbody>
                                </table>
                            </div>
                            <div class="card-body">
                                    <div class="total-barcode">
                                        <div class="total-tableTitle pt-2 mb-3 wmin-md-400 ml-auto"> 
                                            <h6 class="mb-3 text-right" style={{'margin-right': '2em'}} >الإجمالي</h6>
                                            <div class="table-responsive">
                                                <table class="table checkout-table">
                                                    <tbody className="total_table">
                                                        <tr>
                                                            <td class="text-left">{props.total.toLocaleString()} ر.س</td>
                                                            <th class="text-right total" style={{'direction': 'rtl'}}>المجموع <span class="text-muted without-tax">(غير شامل ضريبة القيمة المضافة):</span></th>
                                                        </tr>
                                                        <tr>
                                                            <td class="text-left">{(props.total * 0.15).toLocaleString()} ر.س</td>
                                                            <th class="text-right" style={{'direction': 'rtl'}}>ضريبة القيمة المضافة <span class="font-weight-normal">(15%):</span></th>
                                                        </tr>
                                                        <tr>
                                                            <td class="text-left text-primary">
                                                                <h6  class="font-weight-semibold total-include-tax">{(props.total + (props.total * 0.15)).toLocaleString()} ر.س</h6>
                                                            </td>
                                                            <th class="text-right">:المجموع</th>
                                                            
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
    </>
    )
}

//<img src="barcode.png" alt="Barcode"/> 

// <page backtop="10mm" backbottom="20mm" backleft="20mm" backright="20mm" style={{"font-family": "dejavusans"}}>
