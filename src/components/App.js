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

  return (
    <div>
      <button className="btn" onClick={btnClickHandler}>
        {loading ? "Loading..." : "Get User List"}
      </button>

      <table>
        <tbody>
          {data.length ? (
            data.map((item, index) => (
              <tr key={index}>
                <td>{item.first_name}</td>
                <td>{item.last_name}</td>
                <td>{item.email}</td>
                <td><img src={item.avatar} alt="User Avatar" /></td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">No data found to display</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default App;
