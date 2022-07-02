import "./style.css"
import Table from "./table";
import { useState, useEffect } from "react"

const Tables = () => {

  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjkzNjMwMDlmMTI3ODUwZDllYjE2ZWMiLCJuYW1lIjoiaGFtemEgaGFvdWkiLCJyb2xlIjoic2VsbGVyIiwicGVybWlzc2lvbnMiOltdLCJleHAiOjE2NTkzNDY1MzkuMjQxLCJpYXQiOjE2NTQxNjI1Mzl9.b9TkN02qafmGtYmwEcpfxJrQJVvBRZuPRKe-FQCchL8";
  const [orders, setOrders] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  const [isActive, setIsActive] = useState(false);



    const fetchData = () => {
      fetch('https://call-center-yalitech.herokuapp.com/orders?count=3&page=1&status=confirmed', {
        method: "GET",
        headers: {"Authorization": `Bearer ${token}`}
      })
      .then(res => res.json())
      .then(data => setOrders(data))
    };

    useEffect(() => {
      fetchData();
    }, []);

    let searchFilter = "tracking_id"

    const searchByTracking_id = () => {
      let searchFilter = "tracking_id"
    }
    const searchByFullName = () => {
      let searchFilter = "full_name"
    }
    const searchByPhone = () => {
      let searchFilter = "phone"
    }
  return ( 
    <div className="tables">
      <div className="search">
        <div className="search-options">
          <div className="by-id" onClick={searchByTracking_id()}>
            <p>tracking-id</p>
          </div>
          <div className="by-phone" onClick={() => searchByPhone()}>
            <p>phone</p>
          </div>
          <div className="by-name" onClick={() => searchByFullName()}>
            <p>full_name</p>
          </div>
          <div className="clear" onClick={() => searchByTracking_id()}>
            <p>clear</p>
          </div>
        </div>
        <div className="search-bar">
          <input type="text" 
          placeholder="Search" 
          onChange={(e) => {
            setWordEntered(e.target.value)
          }}
          />
          <div className="search-bar-icon">
            <svg fill="grey" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30" width="30px" height="30px"><path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z"/></svg>            
          </div>
        </div>
        <div className="tables-count">
          <p>25</p>
        </div>
      </div>
      <div className="orders">
        <div className="order-header">
          <div className="left-side">
            <p>Tracking</p>
            <p>Status</p>
            <p>Customer</p>
          </div>
          <div className="right-side">
            <p>Products</p>
            <p>Address</p>
            <p>Actions</p>
          </div>
        </div> 
          {orders?.items?.filter((item) => {
            if (wordEntered == "") {
              return item
            }
            else if (searchFilter = "tracking_id" && item.tracking_id.toUpperCase().includes(wordEntered.toUpperCase())) {
              return item
            }
            else if (searchFilter = "full_name" && item.client.full_name.toUpperCase().includes(wordEntered.toUpperCase())) {
              return item
            }
            else if (searchFilter = "phone" && item.client.phones[0].toUpperCase().includes(wordEntered.toUpperCase())) {
              return item
            }
          }).map((item) => (
            <Table 
            key={item._id} 
            tracking_id={item.tracking_id} 
            status_={item.last_status} 
            customer={item.client.full_name} 
            products={item['products'][0].name}
            state_address={item['destination'].state_name}
            city_address={item['destination'].city_name}
            /> 
          ))}
      </div>
    </div>
   );
}
 
export default Tables;