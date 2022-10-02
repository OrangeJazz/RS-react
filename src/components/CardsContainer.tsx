import React from "react";
import { Card } from "./Card";
import { Doll } from "./types";

interface CardsProps {
  data: Doll[];
}
export class CardsContainer extends React.Component<CardsProps> {
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
