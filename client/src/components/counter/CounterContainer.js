import React from 'react';

class CounterContainer extends React.Component {
    render() {
        return (
            <Counter counterIndex={this.props.counter} up={this.props.up} down={this.props.down} />
        )
    }
}

export default CounterContainer;