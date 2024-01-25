import React from "react";
import {
  CDBInput,
  CDBCard,
  CDBCardBody,
  CDBBtn,
  CDBSelect,
  CDBContainer,
} from "cdbreact";
import "../style/ContactStyle.css";

const Contact = () => {
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
            <p className="h4"> Contact us </p>
          </div>
          <CDBInput label="Name" type="text" />
          <CDBInput label="E-mail" type="email" />
          <p className="text-center m-4">Subject</p>

          <CDBInput label="Message" type="textarea" />
          <div className="d-flex justify-content-center align-items-center mt-4">
            <CDBInput
              style={{
                marginRight: "10px",
              }}
              material
              type="Checkbox"
            />
            <p className="m-0">Send me a copy of this message</p>
          </div>
          <CDBBtn
            style={{
              fontSize: "2em",
            }}
            color="dark"
            className="btn-block my-3 mx-0"
          >
            Send
          </CDBBtn>
        </CDBCardBody>
      </CDBCard>
    </CDBContainer>
  );
};
export default Contact;
