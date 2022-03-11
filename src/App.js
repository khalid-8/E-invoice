import './styles/App.css'
import {useState } from 'react';
// import Invoice from './Incoive.js'
import SellerInfo from './SellerInfo';
import InvoiceInputForm from './InvoiceInputForm';
// import TestInputForm from './TestInputForm';
// import TestInvoiceInputForm from './TestInvoiceInputForm1';


function App() {
  const [validation, setValidation] = useState(false)
  const [sellerInfo, setSellerInfo] = useState()
  return (
    <div className="App">
      <SellerInfo validation={setValidation} sellerInfo={setSellerInfo}/>
      {validation ? <InvoiceInputForm sellerInfo={sellerInfo}/> : null}
    </div>
  );
}

export default App;
