import React from 'react';
import ReactDOM from 'react-dom';
import Typography from '@material-ui/core/Typography';
import './Searchbar.css';

class SearchInput extends React.Component {
    constructor(props) {
        super(props)
        this.state = {value: ''}
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

    }

    onChange(event) {
        this.setState({value: event.target.value})
    }

    onSubmit(event) {
        const value = this.state.value
        event.preventDefault()
        console.log(value)
    }

    render() {
        return (
        <div id="searchBarWrapper">
            <form onSubmit={this.onSubmit}>
                <input type="text" value={this.state.value} onChange={this.onChange}  name="searchBar" id="searchBar" placeholder="Seach For A Stock"></input>
            </form> 
        </div>
        )
    }
}

export default SearchInput
