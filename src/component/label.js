import { Button } from "react-bootstrap";
import { useState } from "react";

function Label(props) {
  const [check, setCheck] = useState("light");
  return (
    <>
      {/* label bootstrap */}
      {props.valueInput.map((valueInput) => (
        <div
          class="form style_of_parent_label mt-2 flex_style_of_label"
          key={valueInput.id}
        >
          <label for="floatingInput" class="form-control">
            {valueInput.do}
          </label>
          {/* btn check bootstrap */}
          <div>
            <div class="input-group-prepend">
              <Button
                class="input-group-text "
                id="inputGroup-sizing-sm btn_background_color_check"
                onClick={() => {
                  if (check == "green") {
                    setCheck("light");
                  } else {
                    setCheck("green");
                  }
                }}
                style={{
                  border: "none",
                  marginLeft: "5px",
                  backgroundColor: check == "green" ? "#449d44" : "#0d6efd",
                }}
              >
                {check == "green" ? "\u2713" : "\u270E"}
              </Button>
            </div>
          </div>
          {/* btn recycle bin bootstrap */}
          <div>
            <div class="input-group-prepend-">
              <Button
                value={valueInput.id}
                onClick={(x) => {
                  // get valueInput Array
                  let valueInput = props.valueInput;
                  // get targetId from value in tag
                  let targetId = x.target.value;
                  // use this function to finde index of target id from the array
                  let index = valueInput.findIndex((x) => x.id == targetId);
                  // then splice that index array from array
                  valueInput.splice(index, 1);
                  // then add new array to valueInput
                  props.setValueInput(valueInput);
                  // then set roald for refresh page again to show new result
                  props.setReload(props.reload + 1);
                }}
                class="input-group-text add_icon_recycle_bin"
                id="inputGroup-sizing-sm"
                style={{
                  backgroundImage: "url(./icons8-recycle-bin-24.png)",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  width: "47px",
                  height: "36px",
                  backgroundColor: "orange",
                  borderColor: "#d39a4a",
                  marginLeft: "5px",
                }}
              ></Button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Label;
