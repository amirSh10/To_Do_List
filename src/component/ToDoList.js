import Label from "./label.js";
import React from 'react';
import {ToDoInput} from "./toDoInput.js";


function ToDoList(props){
    return(<>
    {/* to do input component */}
    <ToDoInput
    setValueInput={props.setValueInput}
    />
  {/* design of to do list */}
  <div
          className=" mt-2 border p-2 add_margin_auto width_70" >
         <h1 className="display-6 style_of_text_to_do_input">To Do List</h1>
         <Label 
         valueInput={props.valueInput}
         setValueInput={props.setValueInput}
         />
          </div>
    </>);
} 


export default ToDoList;