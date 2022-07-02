import './style.css'
import { useState, useEffect } from "react"

const Header = () => {
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjkzNjMwMDlmMTI3ODUwZDllYjE2ZWMiLCJuYW1lIjoiaGFtemEgaGFvdWkiLCJyb2xlIjoic2VsbGVyIiwicGVybWlzc2lvbnMiOltdLCJleHAiOjE2NTkzNDY1MzkuMjQxLCJpYXQiOjE2NTQxNjI1Mzl9.b9TkN02qafmGtYmwEcpfxJrQJVvBRZuPRKe-FQCchL8";
  const [orderState, setOrderState] = useState([]);

  const fetchData = () => {
    fetch('https://call-center-yalitech.herokuapp.com/orders/stats', {
      method: "GET",
      headers: {"Authorization": `Bearer ${token}`}
    })
    .then(res => res.json())
    .then(data => setOrderState(data))
  };

    useEffect(() => {
      fetchData();
    }, []);

  return ( 
    <header>
      <h2 className='header-title'>Call center</h2>
      <div className="header-bottom">
        <div className="pending">
          <small>pending</small>
          <p>{orderState[0]?.pending}</p>
        </div>
        <div className="confirmed">
          <small>confirmed</small>
          <p>5</p>
        </div>
      </div>
    </header>
   );
}
 
export default Header;