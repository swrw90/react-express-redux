import React from 'react';

class Counter extends React.Component {
    componentDidMount() {
        const elem = document.getElementById("counter");
        elem.addEventListener("mouseover", () => {
            elem.style.color = "red"
        });
        elem.addEventListener("mouseleave", () => {
            elem.style.color = "black"
        });
    };

    componentWillUnmount() {
        let elem = getElementById("counter");
        elem.addEventListener("mouseover");
        elem.addEventListener("mouseleave");
    }

    render() {
        return (
            <div>
                <h1 id="counter"> Counter Component {this.props.counterIndex} </h1>
                <button onClick={this.props.up}>Up</button>
                <button onClick={this.props.down}>Down</button>
            </div>
        )
    }
}

export default Counter;