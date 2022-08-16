import './styles/SellerInfo.css'
import { useEffect, useState } from 'react';

export default function SellerInfo({validation, sellerInfo}) {
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
            // validation(false);
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
        const inputControl = element.parentElement;
        // const inputControl = h6element.parentElement;
        const errorDisplay = inputControl.querySelector('.error');
        const placeholderElement = inputControl.querySelector('.placeholder');

        errorDisplay.innerText = message;
        placeholderElement.classList.add('fail');
        placeholderElement.classList.remove('success')
    }

    function setSuccess(element){
        const inputControl = element.parentElement;
        // const inputControl = h6element.parentElement;
        const errorDisplay = inputControl.querySelector('.error');
        const placeholderElement = inputControl.querySelector('.placeholder');
    
        errorDisplay.innerText = '';
        placeholderElement.classList.add('success');
        placeholderElement.classList.remove('fail');
    }

    const isValidName = () => {
        const nameCell = document.getElementById("seller-fullname")
        // const re = new RegExp('^[a-zA-Z ]*$')
        const name =  nameCell.value.trim()

        if (name === "" || name.length < 3){
            setError(nameCell, 'يجب ادخال اسم المؤسسة كاملا'); 
            return setValidName(false);
        }
        
        setSuccess(nameCell);
        setValidName(true);
        return setSeller(name);
    }

    const isValidVAT = () => {
        const VATcell = document.getElementById("vatnumber")
        const re = new RegExp('^[0-9]+$')
        const Vat =  VATcell.value.trim()

        if(!re.test(Vat) || Vat.length !== 15){
            setError(VATcell, 'الرقم الضريبي يتكون من 15 رقم');
            return setValidVAT(false);
        }
        setSuccess(VATcell);
        setValidVAT(true);
        return setVatNumber(Vat);
    }

    return (
        <>
        <div className="title">المعلومات الضريبية</div>
        <div className="form">
            <div className="input-container ic1">
                <input id="seller-fullname" className="input" type="text" minLength="0" maxLength="50" placeholder=" " onKeyUp={isValidName} />   
                <div className="error"></div>  
                <div className="cut cut-short"></div>
                <label htmlFor="seller-fullname" className="placeholder">اسم البائع  <b style={{'color': 'red','fontSize':' 15px'}}>*</b></label>
            </div>
            <div className="input-container ic1">
                <input id="vatnumber" className="input" type="text" minLength="0" maxLength="15" placeholder=" " onKeyUp={isValidVAT}/>
                <div className="error"></div>
            <div className="cut"></div>
                <label htmlFor="vatnumber" className="placeholder">الرقم الضريبي <b style={{'color': 'red','fontSize':' 15px'}}>*</b></label>
                <div className="error"></div>
            </div>
        </div>
        <div className="subtitle">معلومات البائع</div>
        <div className="form">
            <div className="input-container ic1">
                <input id="store_name" className="input" type="text" placeholder=" " onKeyUp={updateStoreName} />   
                <div className="cut cut-short"></div>
                <label htmlFor="store_name" className="placeholder">اسم المحل</label>
            </div>
            <div className="input-container ic1">
                <input id="store_city" className="input" type="text" minLength="0" maxLength="15" placeholder=" " onKeyUp={updateStoreCity}/>
                <div className="error"></div>
            <div className="cut cut-very-short"></div>
                <label htmlFor="store_city" className="placeholder">المدينة</label>
                <div className="error"></div>
            </div>
            <div className="input-container ic1">
                <textarea id="store_address" className="input" type="text" placeholder=" " onKeyUp={updateStoreAddress} />   
                <div className="error"></div>  
                <div className="cut cut-short"></div>
                <label htmlFor="store_address" className="placeholder">عنوان المحل</label>
            </div>
            <div className="input-container ic1">
                <input id="store_phone" className="input" type="text" minLength="0" maxLength="10" placeholder=" " onKeyUp={updateStorePhone}/>
                <div className="error"></div>
            <div className="cut cut-short"></div>
                <label htmlFor="store_phone" className="placeholder">رقم الهاتف</label>
                <div className="error"></div>
            </div>
        </div>
        </>
    )
}
