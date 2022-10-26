import React from "react";
import { FormCard } from "components";
import { User } from "../../data/types";

interface CardsProps {
  data: User[];
}

const FormCardContainer = (props: CardsProps) => {
  return (
    <div className="cards-container">
      {props.data.map((el) => (
        <FormCard user={el} key={el.id} />
      ))}
    </div>
  );
};

export default FormCardContainer;
