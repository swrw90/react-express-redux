import React from 'react';
import { connect } from 'react-redux';
import { up, down } from '../counter../actions'

class CounterContainer extends React.Component {
    render() {
        return (
            <Counter counterIndex={this.props.counter} up={this.props.up} down={this.props.down} />
        )
    }
}

let mapStateToProps = () => {
    return state;
}

export default connect(mapStateToProps, { up, down }) (CounterContainer);