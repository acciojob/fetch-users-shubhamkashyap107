
import React, { useEffect, useState } from "react";
import './../styles/App.css';

const App = () => {

  const[data,setData] = useState([])
  const[loading,setLoading] = useState(false)


  // function btnClickHandler(){
  //   const getData = async() => {
  //     const rawData = await fetch("https://reqres.in/api/users")
  //     const json = await rawData.json()
  //     setData(json.data)
  //   }
  // }

  function btnClickHandler() {
    setLoading(!loading)
    const getData = () => {
      fetch("https://reqres.in/api/users")
        .then(rawData => rawData.json())
        .then(json => {
          setData(json.data);
          console.log(json.data)
          setLoading(false)
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    };
    getData()
  }
  

  return (
    <div>
        
        <button className="btn" onClick={btnClickHandler}>{loading ? "Loading..." : "Get User List"}</button>


      <table>

        {data.length ? data.map((item) => {
          return <tr>
            <td>{item.first_name}</td>
            <td>{item.last_name}</td>
            <td>{item.email}</td>
            <td><img src={item.avatar} /></td>
            </tr>
        }): <h1>No data found to display</h1>}

    
        </table>

    </div>
  )
}

export default App
