import Dropdown from "react-bootstrap/Dropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShip } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "../Styles/Login.css";

function Load() {



  return (
    <>
      <Dropdown className="Load">
        <Dropdown.Toggle variant="light" id="dropdown-basic">
          <FontAwesomeIcon icon={faShip} /> Load
        </Dropdown.Toggle>
        <Dropdown.Menu id="drop-menu" className="w-auto">
          <div className="d-flex">
            <Dropdown.Item>
              <input
                type="radio"
                name="Radio"
                id="Radio"
                className="p-2 bg-light"
              />
              <label className="form-check-label p-2" htmlFor="flexRadio1">
                Calculate By unit Type
              </label>
            </Dropdown.Item>
            <Dropdown.Item>
              <input type="radio" name="Radio" id="Radio" />
              <label className="form-check-label p-2" htmlFor="flexRadio">
                Calculate By Total Shipment
              </label>
            </Dropdown.Item>
          </div>

          <Dropdown.Item>
            <div className="d-flex">
              <div>
                Package Type
                <div
                  className="btn-group m-2 w-auto"
                  role="group"
                  aria-label="Basic outlined example"
                >
                  <button type="button" className="btn btn-outline-primary p-2">
                    Pallets
                  </button>
                  <button type="button" className="btn btn-outline-primary p-2">
                    Boxes/Crates
                  </button>
                </div>
              </div>
              <div>
                #of Units
                <div>
                  <input type="Number" />
                </div>
              </div>
            </div>
          </Dropdown.Item>
          <Dropdown.Item>
            <p>Dimensions(LxWxH per unit)</p>
            <div>
              <input type="text" placeholder="L" />
              <input type="text" placeholder="W" />
              <input type="text" placeholder="H" />
              <select name="Height" id="Height" size="1">
                <option value="cm">CM</option>
                <option value="Inch">inch</option>
                <option value="Feets">feet</option>
              </select>
            </div>
          </Dropdown.Item>
          <Dropdown.Item>
            <p>Weight(per unit)</p>
            <div className="d-flex justify-content-between m-3">
              <div>
                <input type="text" placeholder="0" />
                <select name="weight" id="weight" size="1">
                  <option value="Pounds">Pounds</option>
                  <option value="Ounce">Ounces</option>
                  <option value="Kg">Kg</option>
                </select>
              </div>
              <div>
                <button type="submit"></button>
              </div>
            </div>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <div className="button-align">
        <Link to="/Booking" className="btn btn-primary">
          <FontAwesomeIcon className="arrow-right" icon={faArrowRight} />
        </Link>
      </div>
    </>
  );
}
export default Load;
