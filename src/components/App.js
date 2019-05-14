import React from 'react';
import { connect } from 'react-redux';

import { toggleModal, nextMonth, prevMonth, openModal, closeModal } from '../store/actions';
import Calendar from './Calendar';
import Info from './Info';
import Modal from './Modal';


class App extends React.Component {
	state = {
		tableOpacity : 1
	}

	prevMonth = () => {
		this.setState((state) => {
			return {...state, tableOpacity: 0}
		}, () => {
			setTimeout(() => {
				this.props.prevMonth();
				this.setState((state) => {
					return {...state, tableOpacity: 1}
				})
			}, 200)
			
		})
	}

	nextMonth = () => {
		this.setState((state) => {
			return {...state, tableOpacity: 0}
		}, () => {
			setTimeout(() => {
				this.props.nextMonth();
				this.setState((state) => {
					return {...state, tableOpacity: 1}
				})
			}, 200)
			
		})
	}

	render() {
		return (
			<>
			<div className="main-container">
				<Info date={this.props.date} nextMonth={this.nextMonth} prevMonth={this.prevMonth}/>
				<Calendar {...this.props} tableOpacity=	{this.state.tableOpacity}/>
			</div>
			{this.props.modal.display && <Modal modal={this.props.modal} openModal={this.props.openModal} closeModal={this.props.closeModal}/>}
			</>
		);
	}
}

const mapStateToProps = (store) => {
	return {...store}
}

const mapDispatchToProps = {
	toggleModal,
	nextMonth,
	prevMonth,
	openModal, 
	closeModal
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
