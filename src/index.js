import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// import bootstrap
// import{Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// import component
import ToDoList from './component/ToDoList';

ReactDOM.render(
  <React.StrictMode>
    <ToDoList/>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
