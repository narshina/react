import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Nav } from './Nav';
import { State } from './State';
import { Useeffect } from './Useeffect';
import { Fetchdata } from './Fetchdata';
import { Detail } from './Detail';
import {BrowserRouter,Route,Routes} from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
  <Routes>
    <Route path='/fetchdata' element={<Fetchdata/>}/>
    <Route path='/detail/:id' element={<Detail/>}/>
  </Routes>
  </BrowserRouter>
  </React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
