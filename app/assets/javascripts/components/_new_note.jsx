
const NewNote = (props) => {
    let formFields = {}
   
    return(
    <div>
        <input ref={input => formFields.title = input} placeholder='Enter the title'/>
        <input ref={input => formFields.description = input} placeholder='Enter a description' />
        <button className= "btn btn-primary m-2" 
            onClick={ () => props.handleFormSubmit(formFields.title.value, formFields.description.value)} 
        >Submit</button>
      </div>
    )
  }
