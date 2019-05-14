import React from 'react';
import SearchList from './SearchList';

export default class Search extends React.Component {
    state = {
        list : [
            'Adolf',
            'Peter',
            'Mark',
            'John',
            'Markus',
            'Alex',
        ],
        searchText : ''
    }

    handleInputChange = (val) => {
        this.setState({searchText : val});
    }


	render() {
		return (
			<div className="container">
                <input type="text" onChange={(e) => this.handleInputChange(e.target.value)}/>
                <SearchList list={this.state.list} searchText={this.state.searchText}/>
            </div>
		)
	}
}