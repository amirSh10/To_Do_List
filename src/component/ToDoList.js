import Label from "./label.js";
import {ToDoInput,xx} from "./toDoInput.js";


function ToDoList(){
    return(<>
    {/* to do input component */}
    <ToDoInput/>

  {/* design of to do list */}
  <div
          className=" mt-2 border p-2 add_margin_auto width_70" >
         <h1 className="display-6 style_of_text_to_do_input">To Do List</h1>
         <Label value={xx}/>
         
          </div>
    </>);
} 


export default ToDoList;