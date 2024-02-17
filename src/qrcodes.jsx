import React, { useEffect, useState } from "react";

const Qrs = () => {
  const [data, setData] = useState();
  const baseUrl = "http://localhost:3001/user/";
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
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {data?.map((user) => (
        <div
          style={{
            border: "1px solid black",
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
  );
};

export default Qrs;
