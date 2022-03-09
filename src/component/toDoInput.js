import { Button } from "react-bootstrap";

function ToDoInput() {
  return (
    <>
      <div className="">
        {/* design of to do input*/}
        <div className=" mt-2 border p-2 add_margin_auto width_70">
          <h1 className="display-6 style_of_text_to_do_input">To Do Input</h1>

          {/*css bootstrap input group */}
          <div class="input-group input-group-sm mb-3 add_margin_auto width_50">
            <div class="input-group-prepend">
              <span class="input-group-text" id="inputGroup-sizing-sm ">
                &#128209;
              </span>
            </div>
            <input
              type="text"
              class="form-control "
              aria-label="Small"
              aria-describedby="inputGroup-sizing-sm"
            ></input>
            <Button>Add</Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ToDoInput;