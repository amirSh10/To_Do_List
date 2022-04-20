import { Button } from "react-bootstrap";
import { useState } from "react";


function Label(props) {
  const[check,setCheck]=useState("light")
 
  return (
    <>
      {/* label bootstrap */}
      <div class="form style_of_parent_label mt-2 flex_style_of_label">
        <label for="floatingInput" class="form-control">
          {props.valueInput}
        </label>
        {/* btn check bootstrap */}
        <div>
          <div class="input-group-prepend">
            <Button
              class="input-group-text "
              id="inputGroup-sizing-sm btn_background_color_check" 
              onClick={()=>{
                if (check=="green") {
                  setCheck("light")
                }else{
                  setCheck("green")
                }
              }}
              style={check=="green"?{backgroundColor:"#449d44"}:{backgroundColor:"#0d6efd"}}>
              {check=="green"?"\u2713":"\u270E"}
            </Button>
            {/* {border:"none",marginLeft:"5px"} */}
          </div>
        </div>
        {/* btn recycle bin bootstrap */}
        <div>
          <div class="input-group-prepend-">
            <Button
              onClick={()=>props.setValueInput("")}
              class="input-group-text add_icon_recycle_bin"
              id="inputGroup-sizing-sm"
              style={{backgroundImage: "url(./icons8-recycle-bin-24.png)", backgroundRepeat: "no-repeat",backgroundPosition:"center",width: "47px",height: "36px",backgroundColor: "orange",borderColor: "#d39a4a",marginLeft:"5px"}}
            ></Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Label;
