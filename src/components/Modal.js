import React from 'react';

class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.el = React.createRef();
    }

    componentDidMount = () => {
        this.el.current.addEventListener('click', this.clickHandler)
    }

    clickHandler = (e) => {
        if (e.target === this.el.current) {
            this.props.closeModal();
        }
    }

    componentWillUnmount = () => {
        this.el.current.removeEventListener('click', this.clickHandler)
    }

	render() {
		return (
            <div ref={this.el} className="modal">
                <div className="modal__container">
                    {'' + this.props.modal.date}
                </div>
            </div>
        )
	}
}

export default Modal;