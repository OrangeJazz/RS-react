import React from "react";
import { Doll } from "./types";
interface CardProps {
  doll: Doll;
}
export class Card extends React.Component<CardProps> {
  render() {
    return (
      <div className="card">
        <div className="card__picture">
          <img src={this.props.doll.img} />
        </div>
        <h4 className="card__heading">{this.props.doll.name}</h4>
        <div className="card__details">
          <ul>
            <li>{this.props.doll.type}</li>
            <li>{this.props.doll.brand}</li>
            <li>{this.props.doll.year}</li>
            <li>{this.props.doll.rare ? "Rare" : "Not rare"}</li>
          </ul>
        </div>
      </div>
    );
  }
}
