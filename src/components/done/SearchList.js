import React from 'react';

export default class SearchList extends React.Component {
    renderList = () => {
        const lowerText = this.props.searchText.toLowerCase();
        const res = [];
        this.props.list.forEach((item) => {
            const lowerItem = item.toLowerCase();
            if (lowerItem.startsWith(lowerText)) {
                res.push(<li key={item}>{item}</li>);
            }
        })
        return res;
    }

	render() {
		return (
			<ul>
                {this.renderList()}
            </ul>
		)
	}
}