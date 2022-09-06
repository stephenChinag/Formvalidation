import  { useRef, useState} from "react";


const SimpleInput = () => {

const [enteredUsername , setEnteredUserName ]=useState()


const nameChangeHandler =(event)=>{
  setEnteredUserName(event.target.value)

}

const formSubmiteHandler =(event)=>{
  event.preventDefault();

  console.log(enteredUsername)

}



  return (
    <form onSubmit={formSubmiteHandler}>
      <div className='form-control'>
        <label htmlFor='name'>Your Name</label>
        <input onChange={nameChangeHandler} type='text' id='name' />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
