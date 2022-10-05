import React from "react";
import { Card } from "components";
import { Doll } from "../../data/types";
import "./CardsContainer.css";

interface CardsProps {
  data: Doll[];
}

export default class CardsContainer extends React.Component<CardsProps> {
  render(): React.ReactNode {
    return (
      <div className="cards-container">
        {this.props.data.map((el) => (
          <Card doll={el} key={el.id} />
        ))}
      </div>
    );
  }
}
