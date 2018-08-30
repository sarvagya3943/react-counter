import React , { Component } from 'react'
import './constants'
import './Counter.css'
import { initialCounterState } from './constants';

const copy = (o) => {
    let result = Array.isArray(o) ? [] : {} ;
    for(let key in o) {
        let v = o[key] ;
        result[key] = (typeof v === "object") ? copy(v) : v ;
    }
    return result ;
}

class Counter extends Component {
    constructor(props) {
        super(props) ;
        this.state = {
            id : props.id , 
            data : {
                past : [] , 
                present : {
                    count : 0 , 
                    negativeAllowed : true
                } ,
                future : []
            }
        }
    }
    increaseCounter = () => {
        let newState = copy(this.state) ;
        newState.data.past.push(copy(newState.data.present)) ;
        newState.data.present.count += 1 ;
        newState.data.future = [] ;
        this.setState(newState) ;
    }
    decreaseCounter = () => {
        if(this.state.data.present.negativeAllowed === false && this.state.data.present.count === 0) return ;
        let newState = copy(this.state) ;
        newState.data.past.push(copy(newState.data.present)) ;
        newState.data.present.count -= 1 ;
        newState.data.future = [] ;
        this.setState(newState) ;
    }
    toggleNegativeBehaviour = () => {
        let newState = copy(this.state) ;
        newState.data.past.push(copy(newState.data.present)) ;
        newState.data.future = [] ;
        newState.data.present.negativeAllowed = !newState.data.present.negativeAllowed ;
        if(newState.data.present.negativeAllowed === false && newState.data.present.count < 0) {
            newState.data.present.count = 0 ;
        } 
        this.setState(newState) ;
    }
    reset = () => {
        let newState = copy(this.state) ;
        newState.data.past.push(copy(newState.data.present)) ;
        newState.data.future = [] ;
        newState.data.present = copy(initialCounterState(newState.id).data.present) ;
        this.setState(newState) ;
    }
    undo = () => {
        if(this.state.data.past.length === 0) return ;
        let newState = copy(this.state) ;

        let pastTop = newState.data.past.pop() ;
        newState.data.future.push(copy(newState.data.present)) ;
        newState.data.present = pastTop ;
        this.setState(newState) ;
    }
    redo = () => {
        if(this.state.data.future.length === 0) return ; 
        let newState = copy(this.state) ;
        let futureTop = newState.data.future.pop() ;
        newState.data.past.push(copy(newState.data.present)) ;
        newState.data.present = futureTop ;
        this.setState(newState) ;
    }
    render () {
        return (
            <div className="main-div">
                <h1> {this.state.data.present.count} </h1>
                <div className="btn-wrap">
                    <button className="btn" id="increment" onClick={() => this.increaseCounter()}>Increase</button>
                    <button className="btn" id="decrement" onClick={() => this.decreaseCounter()}>Decrease</button>
                    <button className="btn" id="toggle" onClick={() => this.toggleNegativeBehaviour()}>{this.state.data.present.negativeAllowed ? 'Disable' : 'Enable'}</button>
                    <button id="reset" onClick={() => this.reset()}>Reset</button>
                    <button id="undo" onClick={() => this.undo()}>Undo</button>
                    <button id="redo" onClick={() => this.redo()}>Redo</button>
                </div>
            </div>
        );
    }
}

export default Counter