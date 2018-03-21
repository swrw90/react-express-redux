import React from 'react';
import { connect } from 'react-redux';
import { up, down } from '../../actions'
import Counter from '../counter/Counter';

class CounterContainer extends React.Component {
    render() {
        return (
            <Counter counterIndex={this.props.counter} up={this.props.up} down={this.props.down} />
        )
    }
}

let mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps, { up, down }) (CounterContainer);