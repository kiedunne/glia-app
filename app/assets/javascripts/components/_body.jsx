class Body extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: []
        };
    }

    componentDidMount(){
        fetch('/api/v1/notes.json')
        .then((response) => {return response.json()})
        .then((data) => {this.setState( {notes: data } )});
    }

    render() {
        return(
            <div>
                <AllNotes notes = {this.state.notes}/>
            </div>
        )
    }

}
