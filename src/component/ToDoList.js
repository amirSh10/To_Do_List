import Label from "./label.js";
import React from "react";
import { ToDoInput } from "./toDoInput.js";

function ToDoList(props) {
  const [number, setNumber] = React.useState(0);
  const [index, setIndex] = React.useState(0);
  // const myArray = [props.valueInput];
  return (
    <>
      {/* to do input component */}
      <ToDoInput
        valueInput={props.valueInput}
        setValueInput={props.setValueInput}
        setNumber={setNumber}
        number={number}
        setIndex={setIndex}
        index={index}
      />

      {/* design of to do list */}
      <div className=" mt-2 border p-2 add_margin_auto width_70">
        <h1 className="display-6 style_of_text_to_do_input">To Do List</h1>
        
        {number>0? <Label valueInput={props.valueInput} setValueInput={props.setValueInput} setReload={props.setReload} reload={props.reload} index={index} setIndex={setIndex}/>
          : <h1 style={{textAlign:"center",fontSize:"60px",color:"rgb(68, 157, 68)"}}>"just do It:)"</h1>
        }
      </div>
    </>
  );
}

export default ToDoList;
