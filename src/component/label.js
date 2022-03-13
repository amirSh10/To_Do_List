import { Button } from "react-bootstrap";

function Label(props) {
  return (
    <>
      {/* label bootstrap */}
      <div class="form style_of_parent_label mt-2 flex_style_of_label">
        <label for="floatingInput" class="form-control">
          {props.value}
        </label>
        {/* btn check bootstrap */}
        <div>
          <div class="input-group-prepend">
            <Button
              class="input-group-text "
              id="inputGroup-sizing-sm btn_background_color_check"
              style={{ backgroundColor: "#449d44",border:"none",marginLeft:"5px" }}>
              &#128209;
            </Button>
          </div>
        </div>
        {/* btn recycle bin bootstrap */}
        <div>
          <div class="input-group-prepend-">
            <Button
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
