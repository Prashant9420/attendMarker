import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Qrs = () => {
  const [data, setData] = useState();
  let navigate = useNavigate();
  const baseUrl = "https://attend-marker.vercel.app/user/";
  const getAllUsers = async () => {
    const resp = await fetch("https://attendance-marker-backend.onrender.com/api/user/getAllUsers", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const info = await resp.json();
    console.log(info);
    setData(info);
  };
  useEffect(() => {
    getAllUsers();
  }, []);
  return (
    <>
    <div style={{ display: "flex", flexWrap: "wrap",padding:"3%",margin:"5%",gap:"2%"}}>
      {data?.map((user) => (
        <div
          style={{marginTop:"1%"
 ,           border: "1px solid black",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            
          }}
        >
          <img
            src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${baseUrl}${user.enrollment}`}
            style={{ padding: "50px", height: "300px", width: "300px" }}
          ></img>
          <h2>{user.enrollment}</h2>
          <h2>{user.name}</h2>
        </div>
      ))}
   
    </div>
     <button type="submit" style={{width:"100px",display:"flex",alignItems:"center",justifyContent:"center",marginLeft:"40%",marginBottom:"10px"}} className='addUserButton' onClick={()=>navigate('/')}>Home</button></>
    
    
  );
};

export default Qrs;
