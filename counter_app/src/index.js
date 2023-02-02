// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

import { increment,decrement } from "./redux/action.js";
import {store} from "./redux/store.js";

console.log(store.getState());
store.dispatch(increment())
console.log(store.getState());
store.dispatch(increment())
store.dispatch(increment())
store.dispatch(increment())
store.dispatch(increment())
store.dispatch(increment())
store.dispatch(increment())
store.dispatch(increment())
store.dispatch(increment())
store.dispatch(increment())
store.dispatch(increment())
console.log(store.getState());
store.dispatch(decrement())
store.dispatch(decrement())
console.log(store.getState());

//in terminal run npm start to get output
