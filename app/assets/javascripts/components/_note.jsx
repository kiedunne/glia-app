
class Note extends React.Component {

    constructor(props) {
        super(props);
            this.state = {
                editable: false
            }
            this.handleEdit = this.handleEdit.bind(this)
    }

    handleEdit(){
        if(this.state.editable){
           let title = this.title.value
           let description = this.description.value
           let id = this.props.note.id
           let note = {id: id, title: title, description: description}
           this.props.handleUpdate(note)
         }
         this.setState({
           editable: !this.state.editable
         })
       }

    render() {
        let title = this.state.editable ? 
        <input type='text' ref={input => this.title = input} defaultValue={this.props.note.title}/> :
        <h3>{this.props.note.title}</h3>

        let description = this.state.editable ? 
        <input type='text' ref={input => this.description = input} defaultValue={this.props.note.description}/> :
        <p>{this.props.note.description}</p>
      
        return(
            <div className="all-notes">
                {title}
                {description}
                <button className= "btn btn-info m-2" onClick={() => this.handleEdit()}>{this.state.editable? 'Submit' : 'Edit'}</button>
                <button className= "btn btn-danger m-2" onClick={() => this.props.handleDelete(this.props.note.id)}>Delete</button>
            </div>
        )
    }
 }