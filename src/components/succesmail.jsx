import React from "react";
import "./style/succesmail.css";

const SuccessModal = ({ onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
       
        <h2>Email Sent Successfully!</h2>
        <span className="close" onClick={onClose}>CLOSE</span>
        
      </div>
    </div>
  );
};

export default SuccessModal;