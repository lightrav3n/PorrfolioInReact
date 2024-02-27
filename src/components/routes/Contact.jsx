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
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
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
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        throw new Error("Failed to send email");
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
            <label htmlFor="name">Name:</label>
            <CDBInput
              label="Name"
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name Here"
              autocomplete="name"
            />
            <label htmlFor="email">E-mail:</label>
            <CDBInput
              label="E-mail"
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email Here"
              autocomplete="email"
            />
            <label htmlFor="subject">Subject:</label>
            <CDBInput
              label="Subject"
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="What's this about?"
              autocomplete="off"
            />
            <label htmlFor="message">Message:</label>
            <CDBInput
              label="Message"
              type="textarea"
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Please tell me more..."
              autocomplete="off"
            />
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
