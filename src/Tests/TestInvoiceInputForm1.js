import './styles/TestInvoiceInputForm.css'
import {useState} from 'react'
import $ from 'jquery'; 
import ReactDOMServer from 'react-dom/server';
import PrintInvoice from './PrintInvoice.js';
import { BsFillPlusSquareFill } from 'react-icons/bs';
import { AiFillMinusSquare } from 'react-icons/ai';


export default function TestInvoiceInputForm({sellerInfo}) {
    const [placedOrders, setPlacedOrders] = useState()
    const [showInvoice, setShowInvoice] = useState(false)
    // let totalPrice = 0
    // const [totalPrice, setTotalPrice] = useState(0)

    function iterateTable(){
        const table = document.getElementById("myTable");
        const orders = [];
        let total = 0
        const descs = document.getElementsByClassName("desc-input")
        // const types = document.getElementsByClassName("select-input")
        // const weights = document.getElementsByClassName("wight-input")
        const quantity = document.getElementsByClassName("qt-input")
        const pricess = document.getElementsByClassName("price-input")
        
        for (let i = 0; i < (table.rows.length - 1); i++) {
            orders[i] =  {
                'describtion' : descs[i].value,
                // 'type' : types[i].value,
                // 'weight': weights[i].value,
                'qt' : quantity[i].value,
                'price': parseFloat(pricess[i].value )
            }
            total += orders[i].price * orders[i].qt
        }
        orders['total'] = total
        setPlacedOrders(orders)
        setShowInvoice(true)
    }

    /*const typeOptions = 
        `
            <select className="form-control form-control-sm select-input" id="selectType">
                <option className="option-type">18 قيراط</option>
                <option> 21 قيراط</option>
                <option>12 قيراط</option>
            </select>
        ` 
    **/


    //delete row from the form on delete button click
    $(document).ready(function () {
        $("#myTable").on('click', '.delete-rowBtn', function () {
            // alert("are YOU Sure!")
            $(this).closest('tr').remove();
        });
    })

    function insertNewItem(){
        const table = document.getElementById("myTable");
        console.log(table)
        // Create an empty <tr> element and add it to the 1st position of the table:
        const row = table.insertRow(table.rows.length);
        // Insert new cells (<td> elements) inside our table:
        const descr = row.insertCell(0);
        //const type = row.insertCell(1);
        //const weight = row.insertCell(2);
        const quantity = row.insertCell(1)
        const price = row.insertCell(2);
        const deleteOpt = row.insertCell(3);

        // Add some text to the new cells:
        descr.innerHTML = '<textarea className="input-desc desc-input" type="text" id="orderDesc" dir="rtl" placeholder="ادخل معلومات المنتج"/>'
        //Add class name to the description div
        descr.className = "tableBody-cells" 
        //type field
        //type.innerHTML = typeOptions;
        //weight field
        //weight.innerHTML = '<input className="imput-num wight-input"/>'
        //quantity field
        quantity.innerHTML = '<td className="tableBody-cells qt-cell"><input className="imput-num qt-input" type="number" /></td>'
        //price field
        price.innerHTML = '<span className="font-weight-semibold"><input className="imput-num price-input"/></span>'
        // delete row icon
        deleteOpt.innerHTML = ReactDOMServer.renderToString(<AiFillMinusSquare size={23} className="delete-rowBtn"/>);
        //<AiFillMinusSquare size={23} className="delete-rowBtn"/>
    }
    return (
        <>
            <div className='table_title'>
                <h4>تفاصيل الفاتورة</h4>
            </div>
            <div className="input-form">
                <table className="table table-sm" id="myTable">
                <thead>
                    <tr className='info_table_head'>
                        <th className="teable-cols desc-col">الوصف</th>
                        {/** 
                        <th className="teable-cols">العيار</th>
                        <th className="teable-cols">الوزن</th>
                        */}
                        <th className="teable-cols">الكمية</th>
                        <th className="teable-cols">السعر</th>
                        
                    </tr>
                </thead>
                <tbody className="tableBody">
                    <tr className='input-form_inputCells'>
                        <td className="tableBody-cells input-desc_cell">
                            <textarea className="input-desc desc-input" type='text' id="orderDesc" dir="rtl" placeholder='ادخل معلومات المنتج'/>
                        </td>
                        {/*<td className="tableBody-cells"> 
                            <select className="form-control form-control-sm select-input" id="selectType">
                                <option>18 قيراط</option>
                                <option>21 قيراط</option>
                                <option>12 قيراط</option>
                            </select>
                        </td>
                            <td className="tableBody-cells wight-cell"><input className="imput-num wight-input"/></td>*/}
                        <td className="tableBody-cells qt-cell"><input className="imput-num qt-input" type="number" pattern="[0-9]"/></td>
                        <td className="tableBody-cells price-cell"> <input className="imput-num price-input" type="number" pattern="[0-9]"/></td>
                        <td> <AiFillMinusSquare size={23} className="delete-rowBtn"/> </td>
                    </tr>
                    </tbody>
                </table> 
                <BsFillPlusSquareFill className="insert-new-itemBtn" size={19} onClick={insertNewItem}/>
            
            </div>
            <div className="form-submit"> <input className="btn btn-primary form-submitBtb" type="submit" value="إصدار" onClick={iterateTable}/> </div>

            {showInvoice ? <PrintInvoice data={placedOrders} total={placedOrders.total} sellerInfo={sellerInfo}/> : ""}
        </>
    )
}


//<span className="text-muted"><input className="input-desc" type='text'/></span>