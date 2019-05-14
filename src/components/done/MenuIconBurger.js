import React from 'react';
import '../styles/MenuIcon.css';
export default class MenuIconBurger extends React.Component {
	render() {
		return (
			<div className={this.props.isActive ? 'icon icon--active' : 'icon'} onClick={() => this.props.toggle()}>
                <div className='icon__line icon__line-first'></div>
                <div className='icon__line icon__line-second'></div>
                <div className='icon__line icon__line-third'></div>
            </div>
		)
	}
}