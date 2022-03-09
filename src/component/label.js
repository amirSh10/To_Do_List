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
            <span
              class="input-group-text "
              id="inputGroup-sizing-sm btn_background_color_check"
              style={{ backgroundColor: "#449d44" }}
            >
              &#128209;
            </span>
          </div>
        </div>
        {/* btn recycle bin bootstrap */}
        <div>
          <div class="input-group-prepend-">
            <span
              class="input-group-text add_icon_recycle_bin"
              id="inputGroup-sizing-sm"
            ></span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Label;
