import React from 'react';

class CalendarBody extends React.Component {
    geyMonthArray = () => {
        const month = this.props.date.getMonth();
        const year = this.props.date.getFullYear();

        const firstDay = new Date(year, month, 1);
        const firstDayOfWeek = firstDay.getDay();
        const daysInMonth = 32 - new Date(year, month, 32).getDate();
        const lastDayToShow = daysInMonth + firstDayOfWeek - 1;
        const totalDays = Math.ceil(lastDayToShow / 7) * 7;
        const extraDays = totalDays - lastDayToShow;

        let weeks = [];
        let nowWeek = 0;
        let nowDay = 0;
        
        for (let i = -firstDayOfWeek + 2; i <= daysInMonth + extraDays; i++) {
            if (nowDay === 0) {
                weeks.push([]);
            }
            if (i > 0 && i <= daysInMonth) {
                weeks[nowWeek][nowDay] = i;
            } else {
                weeks[nowWeek][nowDay] = null
            }
            
            nowDay++;
            if (nowDay === 7) {
                nowWeek++;
                nowDay = 0;
            }
        }
        return weeks;
    }

    renderRows = () => {
        const month = this.props.date.getMonth();
        const year = this.props.date.getFullYear();
        const today = new Date();
        const todayYear = today.getFullYear();
        const todayMonth = today.getMonth();
        const todayDay = today.getDate();
        const todayInMonth = (todayYear === year && todayMonth === month);

        const weeksArray = this.geyMonthArray();
        const rows = [];

        weeksArray.forEach((week, index) => {
            let days = [];
            week.forEach((day, index) => {
                const disabled = day !== null;

                if (todayInMonth && day === todayDay) {
                    const dayCell = (
                        <div key={'today'} className="calendar__cell">
                            <div onClick={(e) => {disabled && this.props.openModal(new Date(year, month, day))}} className="cell__inner cell__inner--today">{day}</div>
                        </div>
                    )
                    days.push(dayCell);
                } else {
                    const dayCell = (
                        <div key={index} className="calendar__cell">
                            <div onClick={(e) => {disabled && this.props.openModal(new Date(year, month, day))}} className={disabled ? 'cell__inner' : 'cell__inner cell__inner--disabled'}>{day}</div>
                        </div>
                    )
                    days.push(dayCell);
                }

            })
            const weekRow = <div key={index} className="calendar__row">{days}</div>
            rows.push(weekRow);
        })

        return rows;
    }

	render() {
		return (
            <div className="celandar__body">
				{this.renderRows()}
			</div>
		);
	}
}

export default CalendarBody;