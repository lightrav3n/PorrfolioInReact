import React, { useState } from "react";
import {
  CDBInput,
  CDBCard,
  CDBCardBody,
  CDBBtn,
  CDBContainer,
} from "cdbreact";

import SuccessModal from "../SuccesModal";
import "../style/ContactStyle.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [showModal, setShowModal] = useState(false); // State to control modal visibility

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();


    // Display success modal
    setShowModal(true);

    try {
      const response = await fetch("https://contactbackend-0to9.onrender.com/portfolio/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send email");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Failed to send email");
    }
  };

  const closeModal = () => {
    setShowModal(false);
    resetFormFields(); // Call the function to reset form fields
    window.location.reload(); // Reload the page
  };

  const resetFormFields = () => {
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <>
      <div className="contact-form">
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
                <label htmlFor="name"></label>
                <CDBInput
                  label="Name"
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name Here"
                  autoComplete="name"
                />
                <label htmlFor="email"></label>
                <CDBInput
                  label="E-mail"
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email Here"
                  autoComplete="email"
                />
                <label htmlFor="subject"></label>
                <CDBInput
                  label="Subject"
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What's this about?"
                  autoComplete="off"
                />
                <label htmlFor="message"></label>
                <CDBInput
                  label="Message"
                  type="textarea"
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Please tell me more..."
                  autoComplete="off"
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
      </div>
      {showModal && <SuccessModal onClose={closeModal} />}
    </>
  );
};

export default Contact;
