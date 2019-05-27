// put actions here

//example
// const axios = require('axios');

// // action generator to change name
// export const changeName = (name) => {
//     return {
//         type: 'CHANGE_NAME',
//         name
//         //the same as name: name
        
//     };
// };

// reducer for fetching location
// export const fetchLocation = () => {

//     return (dispatch, getState) => {
//         // once separated from original file
//     // and contained into its own file
//     // and own folder
//     // and made modular
//     // i.e. app/actions/index.jsx
//     // need redux-thunk to be able to call
//     // store.dispatch()
//     // why do we need this?
//     // because we need to maintain one store
//     // throughout the whole app so we can not
//     // create another store here
// //   store.dispatch(startLocationFetch());

// dispatch(startLocationFetch());
  
//   // use axios for xmlhttprequests
//   axios.get('https://ipinfo.io').then((res) => {
//       // json response in data. we need loc property
//       let loc = res.data.loc;
//       let baseUrl = 'https://maps.google.com?q=';
      
//       dispatch(completeLocationFetch(baseUrl + loc));
      
//   });
//     } 
// };


const ADD = 'ADD';
const STORE = 'STORE';
const PAGE = 'PAGE';

export const addInput = (input) => {
  return {
    type: ADD,
    input: input
  };
};

export const storeList = (data) => {
  return {
    type: STORE,
    list: data
  };
};

export const setPage = (num) => {
  return {
    type: PAGE,
    num: num
  };
};