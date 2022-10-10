import React from "react";
import { User } from "../../data/types";

interface FormProps {
  onSubmit: (user: User) => void;
}

export default class Form extends React.Component<FormProps> {
  name: React.RefObject<HTMLInputElement> = React.createRef();
  surname: React.RefObject<HTMLInputElement> = React.createRef();
  imageInput: React.RefObject<HTMLInputElement> = React.createRef();
  date: React.RefObject<HTMLInputElement> = React.createRef();
  dollTypes: Set<string> = new Set();
  rarity = false;
  favBrand: React.RefObject<HTMLSelectElement> = React.createRef();
  promoPermission = false;

  validateName = (name: string) => {
    const res = true;
    return res;
  };

  isValid = (user: User) => {
    this.validateName(user.firstName);
    this.validateName(user.lastName);
  };

  handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const user: User = {
      id: Date.now(),
      firstName: this.name.current?.value || "",
      lastName: this.surname.current?.value || "",
      date: this.date.current?.value || "",
      image: this.imageInput.current?.value || "",
      dollTypes: new Set(this.dollTypes),
      rare: this.rarity,
      dollBrand: this.favBrand.current?.value || "",
      promo: this.promoPermission,
    };

    // alert("Отправленное имя: " + this.date.current?.value);
    // console.log(user);
    this.props.onSubmit(user);
    // if (this.name.current) this.name.current.value = "";
    // if (this.surname.current) this.surname.current.value = "";
    // if (this.imageInput.current) this.imageInput.current.value = "";
    // if (this.date.current) this.date.current.value = "";
    // if (this.favBrand.current) this.favBrand.current.value = "";
    // this.dollTypes = new Set();
    // this.rarity = false;
    // this.promoPermission = false;
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <fieldset>
          <label>
            First Name:
            <input type="text" ref={this.name} />
          </label>
        </fieldset>
        <br />
        <fieldset>
          <label>
            Last Name:
            <input type="text" ref={this.surname} />
          </label>
        </fieldset>
        <br />
        <fieldset>
          <label htmlFor={"upload-button"}>
            Image:
            <div className="btn__upload">Upload</div>
          </label>
          <input
            type="file"
            style={{ visibility: "hidden", display: "none" }}
            ref={this.imageInput}
            id="upload-button"
          />
        </fieldset>
        <br />
        <fieldset>
          <label>
            Date of Birth:
            <input type="date" ref={this.date} />
          </label>
          <br />
        </fieldset>
        <br />
        <fieldset>
          <legend>What type of dolls you are interested in?</legend>
          <input
            type="checkbox"
            id="bjd"
            name="doll-type"
            value="bjd"
            onChange={(e) => {
              e.target.checked
                ? this.dollTypes.add("bjd")
                : this.dollTypes.delete("bjd");
            }}
          />
          <label htmlFor="bjd">BJD</label>
          <input
            type="checkbox"
            id="antique"
            name="doll-type"
            value="antique"
            onChange={(e) => {
              e.target.checked
                ? this.dollTypes.add("antique")
                : this.dollTypes.delete("antique");
            }}
          />
          <label htmlFor="antique">Antique</label>
          <input
            type="checkbox"
            id="ooak"
            name="doll-type"
            onChange={(e) => {
              e.target.checked
                ? this.dollTypes.add("ooak")
                : this.dollTypes.delete("ooak");
            }}
          />
          <label htmlFor="ooak">OOAK</label>
          <input
            type="checkbox"
            id="play"
            name="doll-type"
            value="play"
            onChange={(e) => {
              e.target.checked
                ? this.dollTypes.add("play")
                : this.dollTypes.delete("play");
            }}
          />
          <label htmlFor="play">Play</label>
          <input
            type="checkbox"
            id="collection"
            name="doll-type"
            value="collection"
            onChange={(e) => {
              e.target.checked
                ? this.dollTypes.add("collection")
                : this.dollTypes.delete("collection");
            }}
          />
          <label htmlFor="collection">Collection</label>
        </fieldset>
        <br />
        <fieldset>
          <legend>Do you prefer rare dolls?</legend>
          <input
            type="radio"
            id="rare"
            name="doll-rare"
            value="true"
            onChange={(e) => {
              this.rarity = e.target.checked;
            }}
          />
          <label htmlFor="rare">Yes</label>
          <input
            type="radio"
            id="not-rare"
            name="doll-rare"
            value="false"
            onChange={(e) => {
              this.rarity = !e.target.checked;
            }}
            defaultChecked={true}
          />
          <label htmlFor="not-rare">No</label>
        </fieldset>
        <br />
        <fieldset>
          <label htmlFor="favBrand">What is your favorite brand?</label>
          <select id="favBrand" ref={this.favBrand}>
            <option value="barbie">Barbie</option>
            <option value="pullip">Pullip</option>
            <option value="blythe">Blythe</option>
            <option value="iplehouse">Iplehouse</option>
            <option value="other">Other</option>
          </select>
        </fieldset>
        <br />
        <fieldset>
          <label htmlFor="readyForPromo">
            <input
              type="checkbox"
              value="true"
              id="readyForPromo"
              onChange={(e) => {
                this.promoPermission = e.target.checked;
              }}
            />
            I want to receive notifications about promo, sales, etc.
          </label>
        </fieldset>
        <br />
        <button type="submit">Submit</button>
      </form>
    );
  }
}
