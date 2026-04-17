import { useState } from "react";
import "./Card.css";
import more from "./more.png";
import { Link } from "react-router";
import { supabase } from "../client";

const Card = (props) => {
  return (
    <div className="Card">
      <h2 className="name">{props.name}</h2>
      <h3 className="size">{"by " + props.size}</h3>
      <p className="description">{props.description}</p>
    </div>
  );
};

export default Card;
