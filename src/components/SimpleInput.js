
import  {  useState} from "react";


const SimpleInput = () => {


  const [enteredUsername , setEnteredUserName ]=useState('')
  const [enteredValidName ,setEnterValidName ]=useState(false)
 


const  onBlurHandler = ()=>{
  if(enteredUsername.trim() === ""){
    setEnterValidName(true)
  }
}

const nameChangeHandler =(event)=>{
  setEnteredUserName(event.target.value)
  if(event.target.value  !== ""){
    setEnterValidName(false)
  }
}

const formSubmiteHandler =(event)=>{
  event.preventDefault();

  if(enteredUsername.trim() === ""){
    setEnterValidName(true)
    return;
    
  }
  setEnterValidName(false)


  console.log(enteredUsername)

setEnteredUserName('')

}
const inputClassName = enteredValidName ?  
'form-control invalid' :
 'form-control';



  return (
    <form onSubmit={formSubmiteHandler}>
      <div className= {inputClassName}>
        <label htmlFor='name'>Your Name</label>
        <input    
        onChange={nameChangeHandler} 
        onBlur={onBlurHandler}
        type='text' 
        id='name'
        value={enteredUsername}
         />
      {enteredValidName && <p className="error-text"> please enter a valid Name </p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
