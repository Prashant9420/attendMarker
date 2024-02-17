import React, { useState } from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBInput,
} from "mdb-react-ui-kit";
import Card from "./card";
import { useNavigate } from "react-router-dom";
function App() {
  // Define state variables for form inputs
  const [name, setName] = useState("");
  const [enrollment, setEnrollment] = useState("");
  const [designation, setDesignation] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [authority, setAuthority] = useState("");
  const navigate=useNavigate();
  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Log form inputs to the console
    if (
      name === "" ||
      enrollment === "" ||
      designation === "" ||
      phoneNumber === "" ||
      authority === ""
    ) {
      alert("Please fill all the fields");
      return;
    }
    let enroll="CDRC-"+enrollment;
    const resp=await fetch("https://attendance-marker-backend.onrender.com/api/user/signup",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        name,
        enrollment:enroll,
        designation,
        phone:phoneNumber,
        authority
      })
    });
    const data=await resp.json();
    console.log(data);
    alert("User Added Successfully")
    
  };

  return (
    <MDBContainer fluid>
      <MDBRow className="d-flex justify-content-center align-items-center">
        <MDBCol lg="8">
          <MDBCard className="my-5 rounded-3" style={{ maxWidth: "600px" }}>
            <MDBCardImage
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img3.webp"
              className="w-100 rounded-top"
              alt="Sample photo"
            />
            <MDBCardBody className="px-5">
              <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2">
                Registration Info
              </h3>
              {/* Update state on input change */}
              <MDBInput
                wrapperClass="mb-4"
                label="Name"
                id="nameInput"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <MDBInput
                wrapperClass="mb-4"
                label="Enrollment"
                id="enrollmentInput"
                type="text"
                value={enrollment}
                onChange={(e) => setEnrollment(e.target.value)}
              />
              <MDBInput
                wrapperClass="mb-4"
                label="Designation"
                id="designationInput"
                type="text"
                value={designation}
                onChange={(e) => setDesignation(e.target.value)}
              />
              <MDBInput
                wrapperClass="mb-4"
                label="Phone Number"
                id="phoneNumberInput"
                type="number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
              <MDBInput
                wrapperClass="mb-4"
                label="Authority"
                id="authorityInput"
                type="text"
                value={authority}
                onChange={(e) => setAuthority(e.target.value)}
              />
              {/* Call handleSubmit function on button click */}
              <MDBBtn
                color="success"
                className="mb-4"
                size="lg"
                onClick={handleSubmit}
              >
                Submit
              </MDBBtn>
              <MDBBtn
                color="success"
                className="mb-4 m-3"
                size="lg"
                onClick={()=>navigate('/mark-attend')}
              >
                Mark Attendance
              </MDBBtn>
              <MDBBtn
                color="success"
                className="mb-4"
                size="lg"
                onClick={()=>navigate('/all-qrs')}
              >
                show all Qr-Codes
              </MDBBtn> 
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default App;
