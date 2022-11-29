import React from "react";
import { Card } from "antd";
import { useNavigate } from "react-router-dom";
const gridStyle = {
  width: "20%",
  textAlign: "center",
};
const gridContainer = {
  margin: "1rem",
};

const CardDetails = ({ users }) => {
  const navigate = useNavigate();
  const userPostHandler = (id) => {
    navigate(`/${id}`);
  };

  return users?.data?.map((item) => {
    const { id, name, email, status, gender } = item;
    return (
      <Card
        key={id}
        style={gridContainer}
        onClick={() => {
          userPostHandler(id);
        }}
      >
        <Card.Grid style={gridStyle}>{id}</Card.Grid>
        <Card.Grid style={gridStyle}>{name}</Card.Grid>
        <Card.Grid style={gridStyle}>{email}</Card.Grid>
        <Card.Grid style={gridStyle}>{status}</Card.Grid>
        <Card.Grid style={gridStyle}>{gender}</Card.Grid>
      </Card>
    );
  });
};

export default CardDetails;
