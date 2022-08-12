import React from 'react'
import {useEffect, useState} from 'react'
import "./App.css"

function App() {
  const [backendData,setbackendData]= useState([])
  useEffect(()=>{
    fetch("http://localhost:5000/users").then(
      res=>res.json()
    ).then(
      (data)=>{
        console.log(data)
        setbackendData(data);
      }
    )
  },[])
  return (
    <div>
      {
        (typeof backendData === 'undefined')?(
          <p>Loading...</p>
        ):(
          backendData.map((user,i)=>(
            <div key={i} id="x">
              <p>{user.id}</p>
              <p>Name: {user.name}</p>
              <p>Username: {user.username}</p>
              <p>Email: {user.email}</p>
              <p>Phone: {user.phone}</p>
              <p>Website: {user.website}</p>
              <p>Company: {user.company.name}({user.company.catchPhrase})</p>
              <p>Address: {user.address.suite},{user.address.street},{user.address.city},
              {user.address.zipcode}</p>
              <p>Geo Loaction: lat({user.address.geo.lat}),lng({user.address.geo.lng})</p>
            </div>
          ))
          
        )
      }
    </div>
  )
}

export default App