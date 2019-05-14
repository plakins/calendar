import React from 'react';

class CalendarHead extends React.Component {
	render() {
		return (
            <div className="celandar__head">
				<div className="calendar__row header__row">
					<div className="calendar__cell header__cell">Пн</div>
					<div className="calendar__cell header__cell">Вт</div>
					<div className="calendar__cell header__cell">Ср</div>
					<div className="calendar__cell header__cell">Чт</div>
					<div className="calendar__cell header__cell">Пт</div>
					<div className="calendar__cell header__cell">Сб</div>
					<div className="calendar__cell header__cell">Вс</div>
				</div>
			</div>
		);
	}
}

export default CalendarHead;