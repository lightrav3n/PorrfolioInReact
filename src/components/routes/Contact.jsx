import React, { useState } from "react";
import {
  CDBInput,
  CDBCard,
  CDBCardBody,
  CDBBtn,
  CDBContainer,
} from "cdbreact";
import "../style/ContactStyle.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch("https://contactbackend-0to9.onrender.com/portfolio/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        // Display alert message
        window.alert("Email sent successfully");
  
        // Reset form fields after a short delay
        setTimeout(() => {
          setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
          });
        }, 1000);
      } else {
        alert("Failed to send email");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Failed to send email");
    }
  };
  

  return (
    <CDBContainer
      className="d-flex justify-content-center align-items-center mt-4"
      style={{
        paddingBottom: "5em",
      }}
    >
      <CDBCard
        style={{
          width: "40rem",
          border: "0px",
        }}
      >
        <CDBCardBody className="mx-4">
          <div className="text-center mt-4 mb-2">
            <p className="h4"> Send me a Message </p>
          </div>
          <form onSubmit={handleSubmit}>
            <CDBInput
              label="Name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name Here"
            />
            <CDBInput
              label="E-mail"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email Here"
            />
            <CDBInput
              label="Subject"
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="What's this about?"
            />
            
            <CDBInput
              label="Message"
              type="textarea"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Please tell me more..."
            />
            {/* <div className="d-flex justify-content-center align-items-center mt-4">
              <CDBInput
                style={{
                  marginRight: "10px",
                }}
                material
                type="Checkbox"
              />
              <p className="m-0">Send me a copy of this message</p>
            </div> */}
            <CDBBtn
              type="submit"
              style={{
                fontSize: "2em",
              }}
              color="dark"
              className="btn-block my-3 mx-0"
            >
              Send
            </CDBBtn>
          </form>
        </CDBCardBody>
      </CDBCard>
    </CDBContainer>
  );
};

export default Contact;
