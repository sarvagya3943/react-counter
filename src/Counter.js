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
        console.log(this.props) ;
        this.props.dispatch({
            type : constants.INCREMENT , 
            id : this.props.id
        });
    }
    decreaseCounter = () => {
        this.props.dispatch({
            type : constants.DECREMENT ,
            id : this.props.id
        })
    }
    toggleNegativeBehaviour = () => {
        this.props.dispatch({
            type : constants.TOGGLE_NEGATIVE_ALLOWED ,
            id : this.props.id
        })
    }
    reset = () => {
        this.props.dispatch({
            type : constants.RESET ,
            id : this.props.id
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


// import React , { Component } from 'react'
// import './constants'
// import './Counter.css'
// import { initialCounterState } from './constants';

// class Counter extends Component {
//     constructor(props) {
//         super(props) ;
//         this.state = {
//             id : props.id , 
//             data : {
//                 past : [] , 
//                 present : {
//                     count : 0 , 
//                     negativeAllowed : true
//                 } ,
//                 future : []
//             }
//         }
//     }
//     increaseCounter = () => {
//         let newState = {...this.state} ;
//         newState.data.past.push(newState.data.present) ;
//         newState.data.present.count += 1 ;
//         newState.data.future = [] ;
//         this.setState(newState) ;
//     }
//     decreaseCounter = () => {
//         if(this.state.data.present.negativeAllowed === false && this.state.data.present.count === 0) return ;
//         let newState = {...this.state} ;
//         newState.data.present.count -= 1 ;
//         this.setState(newState) ;
//     }
//     toggleNegativeBehaviour = () => {
//         let newState = {...this.state} ;
//         newState.data.present.negativeAllowed = !newState.data.present.negativeAllowed ;
//         if(newState.data.present.negativeAllowed === false && newState.data.present.count < 0) {
//             newState.data.present.count = 0 ;
//         } 
//         this.setState(newState) ;
//     }
//     reset = () => {
//         this.setState(initialCounterState) ;
//     }
//     undo = () => {
        
//     }
//     redo = () => {}
//     render () {
//         return (
//             <div className="main-div">
//                 <h1> {this.state.data.present.count} </h1>
//                 <div className="btn-wrap">
//                     <button className="btn" id="increment" onClick={() => this.increaseCounter()}>Increase</button>
//                     <button className="btn" id="decrement" onClick={() => this.decreaseCounter()}>Decrease</button>
//                     <button className="btn" id="toggle" onClick={() => this.toggleNegativeBehaviour()}>{this.state.data.present.negativeAllowed ? 'Disable' : 'Enable'}</button>
//                     <button id="reset" onClick={() => this.reset()}>Reset</button>
//                     <button onClick={() => this.undo()}>Undo</button>
//                     <button onClick={() => this.redo()}>Redo</button>
//                 </div>
//             </div>
//         );
//     }
// }

// export default Counter