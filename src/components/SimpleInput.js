import { useState } from "react";



const SimpleInput = (props) => {


const [enteUserName, setEnterValidUserName]=useState("")
const[enterEmail, setEnterEmail]=useState('')
const [isNameValid, setIsNameValid] =useState(false)
const [isEmailValid,setIsEmailValid]=useState(false)
const [FormIsValid, setIsFormValid]=useState(true)

const onChangeHandler= (event)=>{
  setEnterValidUserName(event.target.value)
 
  if(event.target.value.trim() !== "" && enterEmail.trim() !== "")
  setIsFormValid(false)
setIsNameValid(false)
}
const onChangeEmailHandler=(event)=>{
  setEnterEmail(event.target.value)
  if (event.target.value.trim() !== "" && enteUserName.trim() !=="")
  setIsFormValid(false)
  setIsEmailValid(false)
}

const onBlurHandler=()=>{
  if (enteUserName.trim()===""){  
    setIsNameValid(true)  
  }
 }
 const onBlurEmailHandler=()=>{
  if(enterEmail.trim() ===""){
    setIsEmailValid(true)
    
  }
 }

const onSubmitHandler=(event)=>{
  event.preventDefault();
  
  if (enteUserName.trim()==="" && enterEmail.trim() ===""){
   
    setIsNameValid(true)
    setIsEmailValid(true)
  }
  setIsFormValid(false)

  console.log(enteUserName)
  console.log(enterEmail)
 
  setEnterValidUserName('')
  setEnterEmail('')
  setIsFormValid(true)
 }

 

const conditionStyle= isNameValid ? 'form-control invalid ' : 'form-control';




  return (
    <form onSubmit={onSubmitHandler }>
      <div className={conditionStyle}>
        <label htmlFor='name'>Your Name</label>
        <input 
        type='text' 
        id='name'
       
        onChange={onChangeHandler}
        onBlur={onBlurHandler}
        value={enteUserName}
         />
        
         {isNameValid &&  <p className="form-control invalid">Please Enter A valid Name</p>}

        
      </div>


      <div className="form-control">
         <label htmlFor="email"> Enter Email</label>
         <input 
         type="text" 
         id="email"
         placeholder="@gmail.com"
         onChange={onChangeEmailHandler}
         onBlur={onBlurEmailHandler}
         value={enterEmail}
         />
         {isEmailValid && <p>Enter a valid Email</p>}
         </div>
      <div className="form-actions">
        <button disabled={FormIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
