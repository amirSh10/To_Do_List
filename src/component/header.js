import { Button } from "react-bootstrap";

function Header() {
  return (
    <>
      <div className="d-flex justify-content-center ">
        <div
          className="d-flex justify-content-center mt-2 border p-2"
          style={{ width: "70%" }}
        >
          <div
            class="input-group input-group-sm mb-3 "
            style={{ width: "50%" }}
          >
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

export default Header;
