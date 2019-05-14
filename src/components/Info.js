import React from 'react';

class Info extends React.Component {
    getMonthText = () => {
        const date = this.props.date;
        const months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
        return months[date.getMonth()];
    }


	render() {
		return (
            <div className="info">
                <h1 className="info__year">{this.props.date.getFullYear()}</h1>
                <h1 className="info__month">{this.getMonthText()}</h1>
                <div className="info__buttons">
                    <button className="btn info__btn info__btn--prev" onClick={() => {this.props.prevMonth()}}></button>
                    <button className="btn info__btn info__btn--next" onClick={() => {this.props.nextMonth()}}></button>
                </div>
            </div>
        )
	}
}

export default Info;