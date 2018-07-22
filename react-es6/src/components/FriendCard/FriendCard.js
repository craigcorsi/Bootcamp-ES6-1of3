import React from "react";
import "./FriendCard.css";

const FriendCard = props => (
  <div className="card">
    <div className="img-container">
      <img
        alt="Friend"
        src={props.image}
      />
    </div>
    <div className="content">
      <ul>
        <li>
          <strong>Name:</strong> {props.name}
        </li>
        <li>
          <strong>Occupation:</strong> {props.occupation}
        </li>
        <li>
          <strong>Location:</strong> {props.location}
        </li>
        <li>
          <strong>Name starts with s?:</strong> {props.startsWithS}
        </li>
        <button onClick={ () => { props.remove(props.id) } }> Remove Friend </button>
      </ul>
    </div>
  </div>
);

export default FriendCard;
