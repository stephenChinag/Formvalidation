import  { useRef, useState} from "react";


const SimpleInput = () => {
const nameEntered = useRef('')
const [enteredUsername , setEnteredUserName ]=useState()


const nameChangeHandler =(event)=>{
  setEnteredUserName(event.target.value)

}

const formSubmiteHandler =(event)=>{
  event.preventDefault();

  console.log(enteredUsername)

  const namePrinted = nameEntered.current.value;
  console.log (namePrinted)
}



  return (
    <form onSubmit={formSubmiteHandler}>
      <div className='form-control'>
        <label htmlFor='name'>Your Name</label>
        <input ref={nameEntered} onChange={nameChangeHandler} type='text' id='name' />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
