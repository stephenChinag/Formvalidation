import { useState } from "react";



const SimpleInput = (props) => {


const [enteUserName, setEnterValidUserName]=useState("")
const [isNameValid, setIsNameValid] =useState(false)


const onChangeHandler= (event)=>{
  setEnterValidUserName(event.target.value)
  if(event.target.value !== "")
  setIsNameValid(false)
 
}
const onSubmitHandler=(event)=>{
  event.preventDefault();
  if (enteUserName.trim()===""){
    setIsNameValid(true)
  }
  console.log(enteUserName)
  setEnterValidUserName('')
 }

 const onBlurHandler=()=>{
  if (enteUserName.trim()===""){
    setIsNameValid(true)
  }
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
         {isNameValid && <p className="form-control invalid">Please Enter A valid Name</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
