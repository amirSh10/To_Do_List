import React from "react";
import { useState,useEffect  } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

// import bootstrap
// import{Button} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";

// import component
import ToDoList from "./component/toDoList.js";

// import css file
import "./component/style/toDoInput.css";
import "./component/style/label.css";

function App() {
  const [valueInput, setValueInput] = useState([]);
  const [reload, setReload] = useState(0);
  console.log(reload)
  // useEffect(() => {
    return (
      <>
        <ToDoList
          valueInput={valueInput}
          setValueInput={setValueInput}
          setReload={setReload}
          reload={reload}
        />
      </>
    );
  // }, []);
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
