import './styles/InvoiceInputForm.css'
import {useState} from 'react'
import $ from 'jquery'; 
import ReactDOMServer from 'react-dom/server';
import TestInvoice from './TestInvoice.js';
import { BsFillPlusSquareFill } from 'react-icons/bs';
import { AiFillMinusSquare } from 'react-icons/ai';


export default function InvoiceInputForm() {
    const [placedOrders, setPlacedOrders] = useState()
    const [showInvoice, setShowInvoice] = useState(false)
    // let totalPrice = 0
    // const [totalPrice, setTotalPrice] = useState(0)

    function iterateTable(){
        const table = document.getElementById("myTable");
        const orders = [];
        let total = 0
        const descs = document.getElementsByClassName("desc-input")
        const types = document.getElementsByClassName("select-input")
        const weights = document.getElementsByClassName("wight-input")
        const quantity = document.getElementsByClassName("qt-input")
        const pricess = document.getElementsByClassName("price-input")
        
        for (let i = 0; i < (table.rows.length - 1); i++) {
            orders[i] =  {
                'describtion' : descs[i].value,
                'type' : types[i].value,
                'weight': weights[i].value,
                'qt' : quantity[i].value,
                'price': parseFloat(pricess[i].value )
            }
            total += orders[i].price 
        }
        orders['total'] = total
        setPlacedOrders(orders)
        setShowInvoice(true)
    }

    const typeOptions = 
        `
            <select class="form-control form-control-sm select-input" id="selectType">
                <option class="option-type">18 قيراط</option>
                <option> 21 قيراط</option>
                <option>12 قيراط</option>
            </select>
        `


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
        const type = row.insertCell(1);
        const weight = row.insertCell(2);
        const quantity = row.insertCell(3)
        const price = row.insertCell(4);
        const deleteOpt = row.insertCell(5);

        // Add some text to the new cells:
        descr.innerHTML = '<h6 class="font-weight-semibold"> <input class="input-desc desc-input" type="text" id="orderDesc" dir="rtl" placeholder="ادخل معلومات المنتج"/> </h6> '
        //Add class name to the description div
        descr.className = "tableBody-cells" 
        //type field
        type.innerHTML = typeOptions;
        //weight field
        weight.innerHTML = '<input class="imput-num wight-input"/>'
        //quantity field
        quantity.innerHTML = '<td class="tableBody-cells qt-cell"><input class="imput-num qt-input" type="number" /></td>'
        //price field
        price.innerHTML = '<span class="font-weight-semibold"><input class="imput-num price-input"/></span>'
        // delete row icon
        deleteOpt.innerHTML = ReactDOMServer.renderToString(<AiFillMinusSquare size={23} class="delete-rowBtn"/>);
        //<AiFillMinusSquare size={23} class="delete-rowBtn"/>
    }
    return (
        <>
            <div className="input-form">
                <table class="table table-sm" id="myTable">
                <thead>
                    <tr>
                        <th class="teable-cols desc-col">الوصف</th>
                        <th class="teable-cols">العيار</th>
                        <th class="teable-cols">الوزن</th>
                        <th class="teable-cols">الكمية</th>
                        <th class="teable-cols">السعر</th>
                        
                    </tr>
                </thead>
                <tbody class="tableBody">
                    <tr>
                        <td class="tableBody-cells">
                            <h6 class="font-weight-semibold"> <input class="input-desc desc-input" type='text' id="orderDesc" dir="rtl" placeholder='ادخل معلومات المنتج'/> </h6> 
                        </td>
                        <td class="tableBody-cells"> 
                            <select class="form-control form-control-sm select-input" id="selectType">
                                <option>18 قيراط</option>
                                <option>21 قيراط</option>
                                <option>12 قيراط</option>
                            </select>
                        </td>
                        <td class="tableBody-cells wight-cell"><input class="imput-num wight-input"/></td>
                        <td class="tableBody-cells qt-cell"><input class="imput-num qt-input" type="number" /></td>
                        <td class="tableBody-cells"> <input class="imput-num price-input"/></td>
                        <td> <AiFillMinusSquare size={23} class="delete-rowBtn"/> </td>
                    </tr>
                    </tbody>
                </table> 
                <BsFillPlusSquareFill className="insert-new-itemBtn" size={19} onClick={insertNewItem}/>
            
            </div>
            <div className="form-submit"> <input class="btn btn-primary form-submitBtb" type="submit" value="إصدار" onClick={iterateTable}/> </div>

            {showInvoice ? <TestInvoice data={placedOrders} total={placedOrders.total}/> : ""}
        </>
    )
}


//<span class="text-muted"><input class="input-desc" type='text'/></span>