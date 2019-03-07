
const AllNotes = (props) => {

    let notes = props.notes.map((note) => {
        
        return(
            <div key={note.id}>
            <Note note={note} handleDelete={props.handleDelete} handleUpdate={props.handleUpdate}/>
            </div>
        )
    })
    return(
        <div>
            {notes} 
         </div>
    )
}
