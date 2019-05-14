import React from 'react';
import CalendarHead from './CalendarHead';
import CalendarBody from './CalendarBody';

class Calendar extends React.Component {
	render() {
		return (
            <div className="calendar">
                <CalendarHead />
                <div className="calendar__container" style={{opacity: this.props.tableOpacity}}>
                    <CalendarBody date={this.props.date} openModal={this.props.openModal}/>
                </div>
            </div>
		);
	}
}

export default Calendar;