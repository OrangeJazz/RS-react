import React from "react";
import { FormCard } from "components";
import { User } from "../../data/types";
// import "./CardsContainer.css";

interface CardsProps {
  data: User[];
}

export default class FormCardContainer extends React.Component<CardsProps> {
  render(): React.ReactNode {
    return (
      <div className="cards-container">
        {this.props.data.map((el) => (
          <FormCard user={el} key={el.id} />
        ))}
      </div>
    );
  }
}
