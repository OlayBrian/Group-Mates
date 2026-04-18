import { useState } from "react";
import "./Card.css";
import more from "./more.png";
import { Link } from "react-router";
import { supabase } from "../client";

const Card = (props) => {
  return (
    <div className="Card">
      <Link to={`/edit/${props.id}`}>
        <button className = 'editButton'><img src={more} alt="Edit group" className="moreButton" /></button>
      </Link>
      <h2 className="name">{props.name}</h2>
      <h3 className="size">{"Size: " + props.size}</h3>
      <p className="description">{props.description}</p>
      <Link to={`/info/${props.id}`}>
        <button className ='infoButton'>Info</button>
      </Link>
    </div>
  );
};

export default Card;
