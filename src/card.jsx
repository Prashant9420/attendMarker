import React,{useEffect, useState} from 'react';
import { MDBCard, MDBListGroup, MDBListGroupItem } from 'mdb-react-ui-kit';
import { useParams } from 'react-router-dom';

export default function Card() {
  let {enroll}=useParams();
  const [data,setData] = useState();
  const getUser=async ()=>{
    // enroll=enroll.toUpperCase();
    const resp=await fetch(`https://attendance-marker-backend.onrender.com/api/user/getUser/${enroll.toUpperCase()}`,{
      method:"GET",
      headers:{
        "Content-Type":"application/json"
      }
    });
    const data=await resp.json();
    setData(data);
    console.log(data);
  }
  useEffect(()=>{
    getUser();
  },[])
  return (
    <MDBCard style={{padding:"10%"}}>
      <img src="../wall.png"  alt="..." />
      <MDBListGroup flush style={{display:"grid",placeContent:"center",gridTemplateColumns:"1fr 1fr",borderRadius:"0"}}>
        {(data)?<><MDBListGroupItem><strong>Name: </strong> {data.name}</MDBListGroupItem>
        <MDBListGroupItem><strong>Authority: </strong>{data.authority}</MDBListGroupItem>
        <MDBListGroupItem><strong>Designation: </strong>{data.designation}</MDBListGroupItem>
        <MDBListGroupItem><strong>Unique ID: </strong>{data.uniqueID}</MDBListGroupItem>
        </>
        :
        <h1>Loading...</h1>}
      </MDBListGroup>
      {(data)&&<MDBListGroupItem style={{display:"flex",alignContent:"center",justifyContent:"center",width:"90%",gap:"8px",margin:"1%",left:"4%"}}><strong>Attendance: </strong>{data.attendance}</MDBListGroupItem>}
    </MDBCard>
  );
}