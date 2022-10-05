import React from "react";
import "./Card.css";
import { Doll } from "../../data/types";

interface CardProps {
  doll: Doll;
}

export default class Card extends React.Component<CardProps> {
  doll = this.props.doll;
  render() {
    return (
      <div className="card">
        <div className="card__picture-container">
          <img className="card__picture" src={this.doll.img} alt="doll image" />
        </div>
        <div className="card__details">
          <h4 className="card__heading">
            <span className="card__heading-span">
              {this.doll.name.toUpperCase()}
            </span>
          </h4>
          <ul className="card__list">
            <li>
              Type: {this.doll.type[0].toUpperCase() + this.doll.type.slice(1)}
            </li>
            <li>Brand: {this.doll.brand}</li>
            <li>Year: {this.doll.year}</li>
            <li>{this.doll.rare ? "Rare" : "Not rare"}</li>
          </ul>
        </div>
      </div>
    );
  }
}
