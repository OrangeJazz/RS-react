import React from "react";
import "./Card.css";
import { Doll } from "../../data/types";
interface CardProps {
  doll: Doll;
}
export class Card extends React.Component<CardProps> {
  render() {
    return (
      <div className="card">
        <div className="card__picture-container">
          <img className="card__picture" src={this.props.doll.img} />
        </div>
        <div className="card__details">
          <h4 className="card__heading">
            <span className="card__heading-span">
              {this.props.doll.name.toUpperCase()}
            </span>
          </h4>
          <ul className="card__list">
            <li>
              Type:{" "}
              {this.props.doll.type[0].toUpperCase() +
                this.props.doll.type.slice(1)}
            </li>
            <li>Brand: {this.props.doll.brand}</li>
            <li>Year: {this.props.doll.year}</li>
            <li>{this.props.doll.rare ? "Rare" : "Not rare"}</li>
          </ul>
        </div>
      </div>
    );
  }
}
