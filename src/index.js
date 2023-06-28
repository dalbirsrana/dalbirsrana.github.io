import React from 'react';
// import ReactDOM from 'react-dom';
import ReactDOM from "react-dom/client";

import { BrowserRouter } from 'react-router-dom'

import App from './App';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);