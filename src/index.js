import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// import bootstrap
// import{Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// import component
import ToDoList from './component/toDoList.js';
import ToDoInput from "./component/toDoInput.js";

// import css file
import "./component/style/toDoInput.css"
import "./component/style/label.css"

ReactDOM.render(
  <React.StrictMode>
    <ToDoInput/>
    <ToDoList/>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
