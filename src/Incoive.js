import React from 'react'
import './styles/Invoice.css'
// import jsPDF from 'jspdf';
// import html2canvas from 'html2canvas';
import html2pdf from 'html2pdf.js';

export default function Incoive() {
    function downloadPDF(){
        const invoice = document.getElementById("invoice");
        let height = Math.max(invoice.scrollHeight, invoice.offsetHeight,
            window.clientHeight, window.scrollHeight, window.offsetHeight)
        let heightCM = height / 35.35
        console.log(invoice);
        // console.log(window);
        var opt = {
            margin: 1,
            filename: 'myfile.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { dpi: 192, letterRendering: true },
            jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
        };
        html2pdf().from(invoice).set(opt).save();
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
                            <b class="card-title text-primary">اسم المحل</b>
                        </div>
                        <div class="card-body">
                            <div class="row">
                                <div class="col-sm-6">
                                    <div class="mb-4 pull-left">
                                        <ul class="list list-unstyled mb-0 text-left">
                                            <li >عنوان المحل</li>
                                            <li>جدة</li>
                                            <li>0546491279 </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="mb-4 ">
                                        <div class="text-sm-right">
                                            <h4 class="invoice-color mb-2 mt-md-2">Invoice #BBB1243</h4>
                                            <ul class="list list-unstyled mb-0">
                                                <li>التاريخ: <span class="font-weight-semibold">15/12/2021</span></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="d-md-flex flex-md-wrap">
                            </div>
                        </div>
                        <div class="table-responsive">
                            <table class="table table-lg">
                                <thead>
                                    <tr>
                                        <th>الوصف</th>
                                        <th>العيار</th>
                                        <th>الوزن</th>
                                        <th>السعر</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <h6 class="mb-0">خاتم عيار 21 قيراط</h6> 
                                            <span class="text-muted">خاتم الفراشة الرقيق من الذهب الأصفر عيار 21 قيراط</span>
                                        </td>
                                        <td> قيراط 21</td>
                                        <td>20g</td>
                                        <td><span class="font-weight-semibold">ر.س 300</span></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <h6 class="mb-0">خاتم عيار 21 قيراط</h6> 
                                            <span class="text-muted">خاتم الحرفي من الذهب الأصفر عيار 21 قيراط</span>
                                        </td>
                                        <td>18 قيراط </td>
                                        <td>40g</td>
                                        <td><span class="font-weight-semibold">240 ر.س</span></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <h6 class="mb-0"> سلسال عيار 21 قيراط</h6> 
                                            <span class="text-muted"> سلسال السماء المضيئة من الذهب الأصفر عيار 21 قيراط</span>
                                        </td>
                                        <td> قيراط 21</td>
                                        <td>50g</td>
                                        <td><span class="font-weight-semibold">500 ر.س</span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="card-body">
                            <div class="d-md-flex flex-md-wrap">
                                
                                <div class="total-barcode">
                                    <div className="barcode-tag"> <img src="barcode.png" alt="Barcode"/> </div>
                                    <div class="total-tableTitle pt-2 mb-3 wmin-md-400 ml-auto"> 
                                        <h6 class="mb-3 text-right">الإجمالي</h6>
                                        <div class="table-responsive">
                                            <table class="table">
                                                <tbody className="total_table">
                                                    <tr>
                                                        <td class="text-left">1,090 ر.س</td>
                                                        <th class="text-right">:المجموع  <span class="text-muted" style={{fontSize: '9px'}}>(غير شامل ضريبة القيمة المضافة)</span></th>
                                                    </tr>
                                                    <tr>
                                                        <td class="text-left">27 ر.س</td>
                                                        <th class="text-right"> ضريبة القيمة المضافة: <span class="font-weight-normal">(15%)</span></th>
                                                    </tr>
                                                    <tr>
                                                        <td class="text-left text-primary">
                                                            <h5 class="font-weight-semibold">1,160 ر.س</h5>
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
        </div>
    </>
    )
}