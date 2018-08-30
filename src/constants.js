export const initialState = {
    counter : 0 , 
    negativeAllowed : true
}
export const initialCounterState = id => {
    return {
        id : id , 
        data : {
            past : [] , 
            present : {
                count : 0 , 
                negativeAllowed : true
            } ,
            future : []
        }
    } ;
} ;

export const INCREMENT = 'INCREMENT' ;
export const DECREMENT = 'DECREMENT' ;
export const TOGGLE_NEGATIVE_ALLOWED = 'TOGGLE_NEGATIVE_ALLOWED' ;
export const RESET = 'RESET' ;
