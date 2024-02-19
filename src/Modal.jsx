import React, { useState } from "react";
import "./Modal.css";

export default function Modal({closeModal,onSubmit,defaultValue}) {
    const[formState, setFormState]=useState(
        defaultValue || {
          id: 0,
          Shipify:0,
          Date: '',
          Status: "",
          CUSTOMER: "",
          Email: "",
          Country: "",
          Shipping: "",
          Source: "",
          OrderType: "",
        }
    )
    function handleChange(e){
        setFormState({...formState,[e.target.name]:e.target.value});
    }
    
    
    const[errors,setErrors]=useState("")
    const ValidationForm=()=>{
        if(formState.id && formState.Shipify && formState.Date && formState.Status && formState.CUSTOMER && formState.Email && formState.Country && formState.Shipping && formState.Source && formState.OrderType){
            setErrors("");
            return true;
        }
        else{
            let errorFields=[];
            for(const [key,value] of Object.entries(formState)){
                if(!value){
                    errorFields.push(key);
                }
            }
            setErrors(errorFields.join(", "));
            return false;
        }

    }
    function handleSubmit(e){
        e.preventDefault();
        if(!ValidationForm()){return;}
        onSubmit(formState);
        closeModal();


    }
  return (
   
    <div className="modal-container">
      <div className="Modal-form">
        <form>
          <div className="form-group">
            <label htmlFor="id">ID</label>
            <input name="id" onChange={handleChange} value={formState.id}/>
          </div>
          <div className="form-group">
            <label htmlFor="Shipify">SHIPIFY</label>
            <input name="Shipify" onChange={handleChange} value={formState.Shipify}/>
          </div>
          <div className="form-group">
            <label htmlFor="Date">DATE</label>
            <input name="Date" type='date' onChange={handleChange} value={formState.Date}/>
          </div>
          <div className="form-group">
            <label htmlFor="Status">STATUS</label>
            <input name="Status" onChange={handleChange} value={formState.Status}/>
          </div>
          <div className="form-group">
            <label htmlFor="CUSTOMER">CUSTOMER</label>
            <input name="CUSTOMER" onChange={handleChange} value={formState.CUSTOMER}/>
          </div>
          <div className="form-group">
            <label htmlFor="Email">EMAIL</label>
            <input name="Email" onChange={handleChange} value={formState.Email}/>
          </div>
          <div className="form-group">
            <label htmlFor="Country">COUNTRY</label>
            <input name="Country" onChange={handleChange} value={formState.Country}/>
          </div>
          <div className="form-group">
            <label htmlFor="Shipping">SHIPPING</label>
            <input name="Shipping" onChange={handleChange} value={formState.Shipping}/>
          </div>
          <div className="form-group">
            <label htmlFor="Source">SOURCE</label>
            <input name="Source" onChange={handleChange} value={formState.Source}/>
          </div>
          <div className="form-group">
            <label htmlFor="OrderType">ORDER-TYPE</label>
            <input name="OrderType" onChange={handleChange} value={formState.OrderType}/>
          </div>
          {errors && <div className="error">{`Please include: ${errors}`}</div>}
          <div>
            <button type="submit" className="btn btn-primary" onClick={handleSubmit}>SUBMIT</button>
          </div>
        </form>
      </div>
    </div>
  );
}
