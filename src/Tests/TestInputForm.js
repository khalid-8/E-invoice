import './styles/TestInputForm.css'
import { useEffect, useState } from 'react';

export default function TestInputForm({validation, sellerInfo}) {
    const [validName, setValidName] = useState(false);
    const [validVAT, setValidVAT] = useState(false);
    const [seller, setSeller] = useState("");
    const [vatNumber, setVatNumber] = useState("");
    const [storeName, setStoreName] = useState("");
    const [storeCity, setStoreCity] = useState("");
    const [storeAddress, setStoreAddress] = useState("");
    const [storePhone, setStorePhone] = useState();

    const updateStoreName = () => {
        const nameCell = document.getElementById("store_name")
        const name =  nameCell.value.trim()
        return setStoreName(name);
    }
    const updateStoreCity = () => {
        const cityCell = document.getElementById("store_city")
        const city =  cityCell.value.trim()
        if (city < 2 ){
            return;
        } 
        return setStoreCity(city);
    }
    const updateStoreAddress = () => {
        const addCell = document.getElementById("store_address")
        const address =  addCell.value.trim()
        if(address < 3){
            return;
        }
        return setStoreAddress(address);
    }
    const updateStorePhone = () => {
        const phoneCell = document.getElementById("store_phone")
        const phone =  phoneCell.value.trim()
        if(phone < 6){
            return;
        }
        return setStorePhone(phone);
    }

    useEffect(() => {
        if (!validName || !validVAT){
            validation(false);
            return;
        } 
        const sellerinfo = {
            sellerName: seller,
            VATnumber : vatNumber,
            storeName: storeName,
            storeCity: storeCity,
            storeAddress: storeAddress,
            storePhone: storePhone
        }
        sellerInfo(sellerinfo)
        validation(true)
    }, [storeName, storeCity, storeAddress, storePhone, seller, vatNumber, validName, validVAT])

    function setError(element, message){
        const h6element = element.parentElement;
        const inputControl = h6element.parentElement;
        const errorDisplay = inputControl.querySelector('.error');

        errorDisplay.innerText = message;
        inputControl.classList.add('error');
        inputControl.classList.remove('success')
    }

    function setSuccess(element){
        const h6element = element.parentElement;
        const inputControl = h6element.parentElement;
        const errorDisplay = inputControl.querySelector('.error');
    
        errorDisplay.innerText = '';
        inputControl.classList.add('success');
        inputControl.classList.remove('error');
    }

    const isValidName = () => {
        const nameCell = document.getElementById("seller_name")
        const re = new RegExp('^[a-zA-Z ]*$')
        const name =  nameCell.value.trim()

        if (!re.test(name) || name === "" || name.length < 6){
            setError(nameCell, '?????????? ?????? ???? ???????? ???????????????????? ?????????? ?????????? ???? ????????');
            setValidName(false);
            return;
        }
        
        setSuccess(nameCell);
        setValidName(true);
        return setSeller(name);
    }

    const isValidVAT = () => {
        const VATcell = document.getElementById("vat_num")
        const re = new RegExp('^[0-9]+$')
        const Vat =  VATcell.value.trim()

        if(!re.test(Vat) || Vat.length !== 15){
            setError(VATcell, '?????????? ?????????????? ?????????? ???? 15 ??????');
            setValidVAT(false);
            return;
        }
        setSuccess(VATcell);
        setValidVAT(true);
        return setVatNumber(Vat);
    }

    return (
        <div>
            <div className='table_title'>
                <h4>?????????????????? ????????????????</h4>
            </div>
            <div className="input-form">
                <table className="table table-sm"> 
                    <thead className='info_table_head'> 
                        <tr>
                            <th className="teable-cols">?????? ????????????</th>
                            <th className="teable-cols">?????????? ??????????????</th>
                        </tr>
                    </thead>
                    <tbody className="tableBody">
                        <td className="tableBody-cells input-control">
                            <h6 className="font-weight-semibold"> <input className="seller_input" type='text' minLength="0" maxLength="20" id="seller_name" placeholder='???????? ?????? ???????????? ????????????' onKeyUp={isValidName}/> </h6> 
                            <div className="error"></div>
                        </td>
                        <td className="tableBody-cells input-control">
                            <h6> <input className="seller_input" type='text' minLength="15" maxLength="15" id="vat_num" placeholder='???????? ?????????? ??????????????' onKeyUp={isValidVAT}/> </h6> 
                            <div className="error"></div>
                        </td>
                    </tbody>
                </table>
            </div>
            <div className='table_title'>
                <p>?????????????? ????????????</p>
            </div>
            <div className="input-form">
                <table className="table"> 
                    <thead className='info_table_head'> 
                        <tr>
                            <th className="teable-cols">?????? ??????????</th>
                            <th className="teable-cols">??????????????</th>
                            <th className="teable-cols">?????????? ??????????</th>
                            <th className="teable-cols">?????? ????????????</th>
                        </tr>
                    </thead>
                    <tbody className="tableBody">
                        <td className="tableBody-cells input-control store_name">
                            <h6 className="font-weight-semibold"> <input className="seller_input" type='text' id="store_name" placeholder='???????? ?????? ??????????????' onKeyUp={updateStoreName}/> </h6> 
                            <div className="error"></div>
                        </td>
                        <td className="tableBody-cells input-control store_city">
                            <h6 className="font-weight-semibold"> <input className="seller_input" type='text' id="store_city" placeholder='?????? ??????????????' onKeyUp={updateStoreCity}/> </h6> 
                            <div className="error"></div>
                        </td>
                        <td className="tableBody-cells input-control">
                            <h6><textarea className="seller_input" type='text' id="store_address" placeholder='?????????? ??????????' onKeyUp={updateStoreAddress}/> </h6> 
                            <div className="error"></div>
                        </td>
                        <td className="tableBody-cells input-control store_phone">
                            <h6> <input className="seller_input" type='text' minLength="0" maxLength="10" id="store_phone" placeholder='?????? ??????????????' onKeyUp={updateStorePhone}/> </h6> 
                            <div className="error"></div>
                        </td>
                    </tbody>
                </table>
            </div>
        </div>
        
    )
}
