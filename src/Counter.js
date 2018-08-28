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
    reset = () => {
        this.props.dispatch({
            type : constants.RESET
        }) ;
    }
    render() {
        return (
            <div className="main-div">
                <h1> {this.props.counter} </h1>
                <div className="btn-wrap">
                    <button className="btn" id="increment" onClick={() => this.increaseCounter()}>Increase</button>
                    <button className="btn" id="decrement" onClick={() => this.decreaseCounter()}>Decrease</button>
                    <button className="btn" id="toggle" onClick={() => this.toggleNegativeBehaviour()}>{this.props.negativeAllowed ? 'Disable' : 'Enable'}</button>
                    <button id="reset" onClick={() => this.reset()}>Reset</button>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps)(Counter) ;
