const AllNotes = (props) => {

    let notes = props.notes.map((note) => {
        return(
        <div key={note.id}>
            <h1>{note.title}</h1>
             <p>{note.body}</p>
         </div>
        )
    })
    return(
        <div>
            {notes} 
         </div>
    )
}

