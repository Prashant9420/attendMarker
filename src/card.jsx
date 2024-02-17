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
    <MDBCard>
      <MDBListGroup flush>
        {(data)?<><MDBListGroupItem><strong>Name: </strong> {data.name}</MDBListGroupItem>
        <MDBListGroupItem><strong>Enrollment: </strong>{data.enrollment}</MDBListGroupItem>
        <MDBListGroupItem><strong>Phone: </strong>{data.phone}</MDBListGroupItem>
        <MDBListGroupItem><strong>Attendance: </strong>{data.attendance}</MDBListGroupItem>
        <MDBListGroupItem><strong>Authority: </strong>{data.authority}</MDBListGroupItem>
        <MDBListGroupItem><strong>Designation: </strong>{data.designation}</MDBListGroupItem>
        </>
        :
        <h1>User Not found!!</h1>}
      </MDBListGroup>
    </MDBCard>
  );
}