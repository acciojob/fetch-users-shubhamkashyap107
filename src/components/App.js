import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  function btnClickHandler() {
    setLoading(true); // Start loading
    fetch("https://reqres.in/api/users")
      .then(rawData => rawData.json())
      .then(json => {
        setData(json.data);
        setLoading(false); // Stop loading
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false); // Stop loading in case of error
      });
  }

  if(!data.length)
  {
    return (
      <div>

      <button className="btn" onClick={btnClickHandler}>
        {loading ? "Loading..." : "Get User List"}
      </button>

      <p>No data found to display.</p>

      <table style={{height:"100px", width:"300px"}}>

      </table>

      </div>

    )
  }

  return (
    <div>
      <button className="btn" onClick={btnClickHandler}>
        {loading ? "Loading..." : "Get User List"}
      </button>

      <table>
        <tbody>
       
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.first_name}</td>
                <td>{item.last_name}</td>
                <td>{item.email}</td>
                <td><img src={item.avatar} alt="User Avatar" /></td>
              </tr>
            ))}
          
        </tbody>
      </table>
    </div>
  );
}

export default App;
