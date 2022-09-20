import  {  useState} from "react";


const SimpleInput = () => {

  const [enteredUsername , setEnteredUserName ]=useState('')


const nameChangeHandler =(event)=>{
  setEnteredUserName(event.target.value)

}

const formSubmiteHandler =(event)=>{
  event.preventDefault();

  if (enteredUsername.trim()=== ""){
  console.log('please enter a Value')
  }
  else{
  console.log(enteredUsername)

setEnteredUserName('')
  }
}


  return (
    <form onSubmit={formSubmiteHandler}>
      <div className='form-control'>
        <label htmlFor='name'>Your Name</label>
        <input 
         
        onChange={nameChangeHandler} 
        type='text' 
        id='name'
        value={enteredUsername}
         />

      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
