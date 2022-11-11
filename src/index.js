import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


import { createStore } from 'redux';
import {Provider} from 'react-redux';

let initialState = {location: 0}
function reducer(state = initialState, action){
  if(action.type === 'INTRODUCTION'){
    return {...state, location: state.location = 0 }
  }else if(action.type === 'PORTFOLIO'){
    return {...state, location: -100 }
  }else if(action.type === 'SKILLS'){
    return {...state, location: -200 }
  }else if(action.type === 'CONTACT'){
    return {...state, location: -300 }
  }else if(action.type === 'PAGEUP'){
    return {...state, location: state.location - 100}
  }else if(action.type === 'PAGEDOWN'){
    return {...state, location: state.location + 100}
  }
  return state;
}
const store = createStore(reducer, initialState);
// console.log(initialState)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
