class Body extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        notes: []
      };
      this.handleFormSubmit = this.handleFormSubmit.bind(this)
      this.addNewNote = this.addNewNote.bind(this)
      this.handleDelete = this.handleDelete.bind(this)
      this.deleteNote = this.deleteNote.bind(this)
      this.handleUpdate = this.handleUpdate.bind(this);
      this.updateNote = this.updateNote.bind(this)
    }

    handleFormSubmit(title, description){
        let body = JSON.stringify({note: {title: title, description: description} })
    
        fetch('http://localhost:3000/api/v1/notes', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: body,
        }).then((response) => {return response.json()})
        .then((note)=>{
          this.addNewNote(note)
        })
      }
    
      addNewNote(note){
        this.setState({
          fruits: this.state.notes.concat(note)
        })
      }

      handleDelete(id){
        fetch(`http://localhost:3000/api/v1/notes/${id}`, 
        {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json'
          }
        }).then((response) => { 
            this.deleteNote(id)
          })
      }
    
    deleteNote(id) {
        newNotes = this.state.notes.filter((note) => note.id !== id)
        this.setState({
            notes: newNotes
        })
    }

    handleUpdate(note){
        fetch(`http://localhost:3000/api/v1/notes/${note.id}`, 
        {
          method: 'PUT',
          body: JSON.stringify({note: note}),
          headers: {
            'Content-Type': 'application/json'
          }
        }).then((response) => { 
            this.updateNote(note)
          })
      }
      updateNote(note){
        let newNotes = this.state.notes.filter((n) => n.id !== note.id)
        newNotes.push(note)
        this.setState({
          notes: newNotes
        })
      }

  componentDidMount(){
      fetch('/api/v1/notes.json')
        .then((response) => {return response.json()})
        .then((data) => {this.setState({ notes: data }) });
    }

  render(){
      return(
        <div>
          <NewNote handleFormSubmit={this.handleFormSubmit}/>
          <AllNotes notes={this.state.notes} handleDelete= {this.handleDelete} handleUpdate = {this.handleUpdate}/>
        </div>
      )
    }
}