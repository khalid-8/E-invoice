import './styles/InvoiceInputForm.css';
import $ from 'jquery'; 
import {useState} from 'react'
import ReactDOMServer from 'react-dom/server';
import PrintInvoice from './PrintInvoice.js';
import { BsFillPlusSquareFill } from 'react-icons/bs';
import { AiFillMinusSquare } from 'react-icons/ai';
// import { createElement } from 'react/cjs/react.production.min';
// import TestPrintedInvoice from './TestPrintedInvoice';

export default function InvoiceInputForm({sellerInfo}) {
    const [placedOrders, setPlacedOrders] = useState()
    const [showInvoice, setShowInvoice] = useState(false)

    function iterateTable(){
        const table = document.getElementById("invoice-input-form");
        const children = table.children;
        const orders = [];
        let total = 0
        const descs = "#item-description"
        const quantity = "#item-quantity"
        const pricess = "#item-price"
        
        for (let i = 0; i < children.length; i++) {
            orders[i] =  {
                'describtion' : children[i].querySelector(descs).value,
                // 'type' : types[i].value,
                // 'weight': weights[i].value,
                'qt' : children[i].querySelector(quantity).value,
                'price': parseFloat(children[i].querySelector(pricess).value)
            }
            total += children[i].querySelector(pricess).value * children[i].querySelector(quantity).value
        }
        orders['total'] = total;
        setPlacedOrders(orders);
        setShowInvoice(true);
        window.scrollTo(0, document.body.scrollHeight || document.documentElement.scrollHeight);
    }

    //delete row from the form on delete button click
    $(document).ready(function () {
        $("#invoice-input-form").on('click', '.delete-btn', function () {
            const form = document.getElementById('invoice-input-form');
            // console.log(form)
            const count = form.childElementCount
            if (count > 1) $(this).closest('#row').remove();
            // form.removeChild(form.lastChild);
        });
    })

    //Convert Arabic numbers to English
    function arToEng_nubers(el){

        if(!el.target.value) el.target.value = ""; //setter()
        let nubStr = el.target.value.toString()
        const a2e = nubStr.replace(/[٠-٩]/g, d => '٠١٢٣٤٥٦٧٨٩'.indexOf(d))

        el.target.value = a2e;
    }

    // insert new row to the form when add button is clicked
    function insertNewItem(){
        const form = document.getElementById("invoice-input-form");
        var row = document.createElement('div') 
        var descDiv = document.createElement('div')
        var qtDiv = document.createElement('div')
        var priceDiv = document.createElement('div')
        var button = document.createElement('div')

        row.className = 'form-nowrap';
        row.id = 'row'

        //Add classes
        descDiv.className = "input-nowrap flx-3 ic1";
        qtDiv.className = "input-nowrap flx-1 ic1";
        priceDiv.className = "input-nowrap ic1";
        button.className = "buttons-control"

        // Add elements to the divs
        descDiv.innerHTML = ReactDOMServer.renderToString(
            <>
                <textarea id="item-description" className="input" type="text" placeholder=" "/>   
                <div className="cut cut-very-short"></div>
                <label htmlFor="item-description" className="placeholder">الوصف</label>
            </>)
        
        qtDiv.innerHTML = ReactDOMServer.renderToString(
            <>
                <input id="item-quantity" className="input" type="text" onChange={e => arToEng_nubers(e)} placeholder=" "/>
                <div className="cut cut-very-short"></div>
                <label htmlFor="item-quantity" className="placeholder">الكمية</label>
            </>)

        priceDiv.innerHTML = ReactDOMServer.renderToString(
            <>
                <input id="item-price" className="input" type="text" onChange={e => arToEng_nubers(e)} placeholder=" "/>
                <div className="cut cut-very-short"></div>
                <label htmlFor="tem-price" className="placeholder">السعر</label>
            </>)

        button.innerHTML =  ReactDOMServer.renderToString(<AiFillMinusSquare size={23} className="delete-btn"/>); 
        
        // insert divs to the row then to the form
        row.appendChild(descDiv)
        row.appendChild(qtDiv)
        row.appendChild(priceDiv)
        row.appendChild(button)
        form.appendChild(row)

        //Add onKeyUp functions
        $(priceDiv).on('keyup', (e) => {arToEng_nubers(e)})
        $(qtDiv).on('keyup', (e) => {arToEng_nubers(e)})
    }

    return (
        <>
            <div className="title">تفاصيل الفاتورة</div>
            <div id="invoice-input-form">
                <div id='row' className="form-nowrap">
                    <div className="input-nowrap flx-3 ic1">
                        <textarea id="item-description" className="input" type="text" placeholder=" "/>   
                        <div className="cut cut-very-short"></div>
                        <label htmlFor="item-description" className="placeholder">الوصف</label>
                    </div>
                    <div className="input-nowrap flx-1 ic1">
                        <input id="item-quantity" className="input" type="text" onChange={e => arToEng_nubers(e)}  placeholder=" "/>
                        <div className="cut cut-very-short"></div>
                        <label htmlFor="item-quantity" className="placeholder">الكمية</label>
                    </div>
                    <div className="input-nowrap ic1">
                        <input id="item-price" className="input" type="text" onChange={e => arToEng_nubers(e)} placeholder=" "/>
                        <div className="cut cut-very-short"></div>
                        <label htmlFor="tem-price" className="placeholder">السعر</label>
                    </div>
                    <div className='buttons-control'>
                        <BsFillPlusSquareFill className="insert-btn" size={19} onClick={insertNewItem}/>
                    </div>
                </div>
            </div>
            <div className="form-submit"> <input className="btn btn-primary form-submitBtb" type="submit" value="إصدار" onClick={iterateTable}/> </div>

            {showInvoice ? <PrintInvoice data={placedOrders} total={placedOrders.total} sellerInfo={sellerInfo}/>: ""}
        </>
    )
}
