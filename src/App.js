import React from 'react' ;
import Counter from './Counter' ;
import { Provider } from 'react-redux' ;
import { createStore } from 'redux' ;
import * as constants from './constants' ;

const reducer = (state = constants.initialState , action) => {
    console.log(action) ;
    let newState ;
    switch (action.type) {
        case constants.INCREMENT:
            return {
                counter : state.counter + 1
            };
        case constants.DECREMENT:
            newState = Object.assign({} , state) ;
            if(!newState.negativeAllowed && newState.counter <= 0) {
                newState.counter = 0 ;
                return newState ;
            }
            newState.counter -= 1 ;
            return newState ;
        case constants.TOGGLE_NEGATIVE_ALLOWED :
            newState = Object.assign({} , state) ;
            newState.negativeAllowed = !newState.negativeAllowed ;
            if(newState.negativeAllowed === false && newState.counter < 0) {
                newState.counter = 0 ;
            }
            return newState ;
        case constants.RESET :
            return constants.initialState ;
        default:
            return state ;
    }
} ;

const store = createStore(reducer) ;

const App = () => (
    <Provider store={store}>
        <Counter />
    </Provider>
);


export default App ;
