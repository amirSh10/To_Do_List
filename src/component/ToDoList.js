import Label from "./label.js";

function ToDoList(){
    return(<>
  {/* design of to do list */}
  <div
          className=" mt-2 border p-2 add_margin_auto width_70" >
         <h1 className="display-6 style_of_text_to_do_input">To Do List</h1>
         <Label value={"amir"}/>
         <Label value={"amir"}/>
          </div>
    </>);
} 


export default ToDoList;