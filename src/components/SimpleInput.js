import { useEffect } from "react";
import  {  useState} from "react";


const SimpleInput = () => {


  const [enteredUsername , setEnteredUserName ]=useState('')
  const [errorIsValid , setErrorIsValid] =useState(false)
  const [enterNameTouch,setEnterMameTouch]=useState(false)


  useEffect(()=>{
    if (errorIsValid){
      console.log('my name is known ')
    }
  },[errorIsValid])

const nameChangeHandler =(event)=>{
  setEnteredUserName(event.target.value)

}

const formSubmiteHandler =(event)=>{
  event.preventDefault();
  setEnterMameTouch(true)

  

  if(enteredUsername.trim() === ""){
    setErrorIsValid(false)
    return;
    
  }
  setErrorIsValid(true)

  console.log(enteredUsername)

setEnteredUserName('')

}

const nameInvalidInput= !enteredUsername && enterNameTouch;

const nameClasses= nameInvalidInput? 
"form-control " : 
"form-control invalid";


  return (
    <form onSubmit={formSubmiteHandler}>
      <div className= {nameClasses}>
        <label htmlFor='name'>Your Name</label>
        <input 
         
        onChange={nameChangeHandler} 
        type='text' 
        id='name'
        value={enteredUsername}
         />
        {nameInvalidInput && <p className="error-text">Please Enter a Valid Name</p>}

      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
