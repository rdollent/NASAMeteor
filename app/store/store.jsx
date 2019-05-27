const redux = require('redux');
const thunk = require('redux-thunk').default;
// redux-thunk teaches redux to read actions that aren't object literals (like functions)


// const {/* insert reducers here */} = require('./../reducers/index');


const {inputReducer, listReducer} = require('reducers');
// export a function that returns store variable
export const createStore = () => {
        
    // argument is a set of key-value pairs
    // represents item and state you want this reducer to manage
    // state: reducer function
    // e.g. the name state will be managed by nameReducer
    const reducer = redux.combineReducers({
        // name: nameReducer,
        // hobbies: hobbiesReducer,
        // movies: moviesReducer,
        // map: mapReducer
        input: inputReducer,
        list: listReducer
    });
    
    // 2nd argument lets you configure which store you wanna use
    // for middleware functions we wanna run through redux
    // used for/by redux dev tools Chrome Extension
    // if no extension, it takes the argument and passes it through
    // (f) => { return f }
    
    const store = redux.createStore(reducer, redux.compose(
        redux.applyMiddleware(thunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    ));
    return store;
};