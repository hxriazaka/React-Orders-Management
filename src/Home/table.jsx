import "./style.css"
import eye from "../icons/eye.png"
import deleteIcon from "../icons/delete.png"
import pen from "../icons/pen.png"

const Table = (props) => {

  return ( 
    <div className="table">
      <div className="left-side">
        <div className="tracking">
          <p>{props.tracking_id}</p>
        </div>
        <div className="status">
          <p>{props.status_}</p>
        </div>
        <div className="customer">
          <p>{props.customer}</p>
        </div>
      </div>
      <div className="right-side">
        <div className="products">
          <small>{props.products}</small>
        </div>
        <div className="address">
          <p>{props.state_address}</p>
          <p>{props.city_address}</p>
        </div>
        <div className="actions">
          <div className="eye">
            <img src={eye} alt="" />
          </div>
          <div className="pen">
            <img src={pen} alt="" />
          </div>
          <div className="delete">
            <img src={deleteIcon} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default Table;