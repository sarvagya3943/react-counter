import React , { Component } from 'react' ;
import { connect } from 'react-redux' ;
import './Counter.css'
import * as constants from './constants' ;

const mapStateToProps = (state) => {
    return {
        counter : state.counter ,
        negativeAllowed : state.negativeAllowed
    };
};

class Counter extends Component {
    increaseCounter = () => {
        this.props.dispatch({
            type : constants.INCREMENT
        });
    }
    decreaseCounter = () => {
        this.props.dispatch({
            type : constants.DECREMENT
        })
    }
    toggleNegativeBehaviour = () => {
        this.props.dispatch({
            type : constants.TOGGLE_NEGATIVE_ALLOWED
        })
    }
    render() {
        return (
            <div className="main-div">
                <h1> Counter : {this.props.counter} </h1>
                <button className="btn" id="increase-button" onClick={() => this.increaseCounter()}>Increase</button>
                <button className="btn" id="decrease-button" onClick={() => this.decreaseCounter()}>Decrease</button>
                <h3> {this.props.negativeAllowed ? 'Disable' : 'Enable'} negative numbers </h3>
                <button className="btn" id="toggle-button" onClick={() => this.toggleNegativeBehaviour()}>{this.props.negativeAllowed ? 'Disable' : 'Enable'}</button>
            </div>
        );
    }
}

export default connect(mapStateToProps)(Counter) ;
