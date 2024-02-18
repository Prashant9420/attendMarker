import React,{useEffect, useState} from 'react'
import './markattend.css'
import { useNavigate } from 'react-router-dom';
const MarkAttend = () => {
    const navigate=useNavigate();
    const [enroll,setEnroll] =useState();
    const markPresent= async (e)=>{
        e.preventDefault();
        if(enroll==""){alert("enter enrollID");return;}
        const resp=await fetch("https://attendance-marker-backend.onrender.com/api/user/markAttendance",{
        method:"PATCH",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            enrollment:"CDRC-"+enroll
        })
        });
        if(resp.status==200){
            alert("Attendance Marked!!")
        }
        else if(resp.status==404){
            alert("User Not Found!")
        }
        else{
           alert("something went wrong") 
        }
        
    }
  return (
    <div id="container">
        <h1>Attendance Marker</h1>
        <form id="attendanceForm" onSubmit={(e)=>markPresent(e)}>
            <input type="text" name="name" id="nameInput" placeholder="Enter Enrollment-Id" onChange={(e)=>setEnroll(e.target.value)}></input>
            <button type="submit">Mark</button>
        </form>
        <button type="submit" className='addUserButton' onClick={()=>navigate('/')}>Home</button>
    </div>
  )
}

export default MarkAttend