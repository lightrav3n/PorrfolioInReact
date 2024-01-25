import React from "react";

const Caption = ({ client, name }) => (
  <>
    <span>
      {" "}
      Client: <strong>{client}</strong>
    </span>
    <br />
    <span>
      Name and place: <strong>{name}</strong>
    </span>
  </>
);

export default Caption;