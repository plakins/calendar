import React from 'react';
import '../styles/Scroller.css';

export default class Scroller extends React.Component {
    constructor(props) {
        super(props);
        this.scroller = React.createRef();
        this.isMouseDown = false;
        this.startShift = 0;
        this.state = {
            show : false
        }
    }

    scrollByWheel = (delta) => {
        this.parent.scrollTo(0, this.parent.scrollTop + delta);
        const percent = this.parent.scrollTop / (this.parent.scrollHeight - this.parent.clientHeight);
        const innerScrollHeight = this.parent.clientHeight - this.scroller.current.getBoundingClientRect().height;
        this.scroller.current.style.top = innerScrollHeight * percent + this.parent.scrollTop + 'px';
    }

    scrollByLine = (coord) => {
        coord -= this.startShift;
        if (coord < 0) {
            coord = 0;
        } else if (coord > this.parent.clientHeight - this.scroller.current.getBoundingClientRect().height) {
            coord = this.parent.clientHeight - this.scroller.current.getBoundingClientRect().height;
        }
        const k = (this.parent.scrollHeight - this.parent.clientHeight) / (this.parent.clientHeight - this.scroller.current.getBoundingClientRect().height);
        this.parent.scrollTo(0, coord*k);
        this.scroller.current.style.top = coord + this.parent.scrollTop + 'px';
    }

    getScrollData = (e) => {
        let delta = 0;
        if (e.type === 'wheel') {
            let res = true;
            
            for (let i = 0; i < e.path.length; i++) {
                const el = e.path[i];
                if (el === this.parent) {
                    res = true;
                    break;
                }
                if (this.props.scrollers.includes(el)) {
                    res = false;
                    break;
                }
            }

            if (res) {
                delta = e.deltaY;
                this.scrollByWheel(delta);
            }
        } else {
            this.scrollByLine(e.clientY - this.parent.getBoundingClientRect().top);
        }
    }

    scrollerMouseDown = (e) => {
        this.startShift = e.offsetY;
        window.addEventListener('mousemove', this.getScrollData);
        window.addEventListener('selectstart', this.scrollerSelectStart);
        this.scroller.current.classList.add('scroller--focus');
    }

    scrollerMouseUp = (e) => {
        window.removeEventListener('mousemove', this.getScrollData);
        window.removeEventListener('selectstart', this.scrollerSelectStart);
        this.scroller.current.classList.remove('scroller--focus');
    }

    scrollerSelectStart = (e) => {
        e.preventDefault();
    }

    componentDidMount = () => {
        this.parent = this.scroller.current.parentElement;
        this.parent.setAttribute('style', "position: relative; overflow: hidden;")
        this.props.addScroller(this.parent);
        this.scroller.current.style.height = this.parent.clientHeight * (this.parent.clientHeight / this.parent.scrollHeight) + 'px';
        this.parent.addEventListener('wheel', this.getScrollData);
        this.scroller.current.addEventListener('mousedown', this.scrollerMouseDown);
        window.addEventListener('mouseup', this.scrollerMouseUp);
        console.log(this.parent.scrollHeight + '  ' + this.parent.clientHeight);
        if (this.parent.scrollHeight > this.parent.clientHeight) {
            this.setState({show : true})
        } else {
            this.setState({show : false})
        }
    }

    componentWillUnmount = () => {
        this.parent.removeEventListener('wheel', this.getScrollData);
        this.scroller.current.removeEventListener('mousedown', this.scrollerMouseDown);
        window.removeEventListener('mouseup', this.scrollerMouseUp);
    }

    render() {
        return (
            <div className={this.state.show ? 'scroller' : 'scroller scroller--disabled'} ref={this.scroller}></div>
        )
    }
}