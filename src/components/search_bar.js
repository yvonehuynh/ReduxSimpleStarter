import React, {Component} from "react";

// this is called a funcitonal component because it is literally, a function
/* const SearchBar =() => {
    return <input />
}; */

// this is a class-based componenet that is like a record keeper
class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            term: ""
        };
    }
    render(){
        return (
            <div>
                <input onChange={event => this.setState({term: event.target.value})} />
            </div>
        )
    }
}

export default SearchBar;