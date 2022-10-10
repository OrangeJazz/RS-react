import React from "react";
import "./FormCard.css";
import { User } from "../../data/types";

interface CardProps {
  user: User;
}

const FormCard = (props: CardProps) => {
  const {
    firstName,
    lastName,
    date,
    image,
    rare,
    dollTypes,
    dollBrand,
    promo,
  } = props.user;
  return (
    <div className="form-card">
      {/* <div className="form-card__picture-container">
        <img className="form-card__picture" src={image} alt="user image" />
      </div> */}
      <div className="form-card__details">
        <h4 className="form-card__heading">{firstName + " " + lastName}</h4>
        <ul className="form-card__list">
          <li>Date of Birth: {date}</li>
          <li>Favorite Brand: {dollBrand}</li>
          <li>Preferred types: {[...dollTypes].join(" ")}</li>
          <li>{rare ? "I prefer Rare Dolls" : "I don't prefer Rare Dolls"}</li>
          <li>{promo ? "I'm ready for promo" : "I'm not ready for promo"}</li>
        </ul>
      </div>
    </div>
  );
};

export default FormCard;
