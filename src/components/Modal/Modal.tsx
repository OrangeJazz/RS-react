import React, { FC, useContext } from "react";
import classes from "./Modal.module.css";
import { PeopleItem, PlanetsItem, StarshipsItem } from "../../data/types";
import { Backdrop } from "components";
import { Context } from "App";

interface ModalProps {
  onCancel: () => void;
  item: PeopleItem | StarshipsItem | PlanetsItem;
}

const Modal: FC<ModalProps> = (props) => {
  const { state } = useContext(Context);
  const item = props.item;

  const cancelHandler = () => {
    props.onCancel();
  };

  return (
    <div>
      <Backdrop onClick={cancelHandler} />
      <div className={classes.modal} data-testid="modal">
        <button
          className={classes.modal__close}
          onClick={cancelHandler}
          data-testid="modal-button"
        >
          X
        </button>
        <h2 className={classes.modal__heading} data-testid="modal-name">
          {props.item.name}
        </h2>
        {state.filter === "people" && (
          <ul className={classes.modal__list}>
            <li>Birth year: {(item as PeopleItem).birth_year}</li>
            <li>Gender: {(item as PeopleItem).gender}</li>
            <li>Height: {(item as PeopleItem).height}</li>
            <li>Mass: {(item as PeopleItem).mass}</li>
            <li data-testid="modal-eye-color">
              Eye color: {(item as PeopleItem).eye_color}
            </li>
            <li>Hair color: {(item as PeopleItem).hair_color}</li>
            <li>Skin color: {(item as PeopleItem).skin_color}</li>
            <li>Homeworld: {(item as PeopleItem).homeworld}</li>
          </ul>
        )}

        {state.filter === "planets" && (
          <ul className={classes.modal__list}>
            <li>Rotation period: {(item as PlanetsItem).rotation_period}</li>
            <li>Orbital period: {(item as PlanetsItem).orbital_period}</li>
            <li>Diameter: {(item as PlanetsItem).diameter}</li>
            <li>Climate: {(item as PlanetsItem).climate}</li>
            <li>Gravity: {(item as PlanetsItem).gravity}</li>
            <li>Terrain: {(item as PlanetsItem).terrain}</li>
            <li>Surface water: {(item as PlanetsItem).surface_water}</li>
            <li>Population: {(item as PlanetsItem).population}</li>
          </ul>
        )}
        {state.filter === "starships" && (
          <ul className={classes.modal__list}>
            <li>Model: {(item as StarshipsItem).model}</li>
            <li>Manufacturer: {(item as StarshipsItem).manufacturer}</li>
            <li>Cost in credits: {(item as StarshipsItem).cost_in_credits}</li>
            <li>Length: {(item as StarshipsItem).length}</li>
            <li>Max speed: {(item as StarshipsItem).max_atmosphering_speed}</li>
            <li>Passengers: {(item as StarshipsItem).passengers}</li>
            <li>Crew: {(item as StarshipsItem).crew}</li>
            <li>Consumables: {(item as StarshipsItem).consumables}</li>
            <li>
              Hyperdrive rating: {(item as StarshipsItem).hyperdrive_rating}
            </li>
            <li>MGLT: {(item as StarshipsItem).MGLT}</li>
            <li>Cargo capacity: {(item as StarshipsItem).cargo_capacity}</li>
            <li>Starship class: {(item as StarshipsItem).starship_class}</li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Modal;
