
const NewNote = (props) => {
    let formFields = {}
    
    return(
        <Form>
            <Form.Group controlId="formTitle">
                <Form.Label>Note title</Form.Label>
                <Form.Control type="title" placeholder="Enter a title" />
                <Form.Text className="text-muted">
                    Enter a title that best describes the session.
                </Form.Text>
            </Form.Group>

            <Form.Group controlID="formBody">
                <Form.Label>Note body</Form.Label>
                <Form.Control type="body" placeholder="Enter a description" />
                <Form.Text className="text-muted">
                    How did the session go today?
                </Form.Text>
            </Form.Group>
            <button onClick={ () => props.handleFormSubmit(formFields.title.value, formFields.description.value)}>Submit</button>
        </Form>
    )
}
// const NewNote = (props) => {
//     let formFields = {}
   
//     return(
//     <div>
//         <input ref={input => formFields.title = input} placeholder='Enter the title'/>
//         <input ref={input => formFields.description = input} placeholder='Enter a description' />
//         <button onClick={ () => props.handleFormSubmit(formFields.title.value, formFields.description.value)}>Submit</button>
//       </div>
//     )
//   }
