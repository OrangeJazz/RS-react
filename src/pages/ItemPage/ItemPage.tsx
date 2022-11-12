import { PeopleItem, PlanetsItem, StarshipsItem } from "../../data/types";
import { useAppSelector } from "../../hooks/redux";
import React from "react";
import { Link } from "react-router-dom";
import classes from "./ItemPage.module.css";

const ItemPage = () => {
  const apiState = useAppSelector((state) => state.apiReducer);
  const item = apiState.item;

  return (
    <div className="container">
      <h2>{item?.name}</h2>
      <div className="content-wrapper">
        {apiState.filter === "people" && (
          <ul className={classes["list"]}>
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

        {apiState.filter === "planets" && (
          <ul className={classes["list"]}>
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
        {apiState.filter === "starships" && (
          <ul className={classes["list"]}>
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
        <div className={classes["btn-container"]}>
          <Link to="/api" className={classes.button}>
            Back
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ItemPage;
