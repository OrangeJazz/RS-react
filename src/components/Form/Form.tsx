import React from "react";
import { User } from "../../data/types";
import "./Form.css";

interface FormProps {
  onSubmit: (user: User) => void;
}

type StateKeys =
  | "name"
  | "surname"
  | "date"
  | "favBrand"
  | "rarity"
  | "file"
  | "dollTypes"
  | "promoPermission"
  | "doll-rare"
  | "dollBrand";

interface FormState {
  firstChangeForm: boolean;
  buttonDisable: boolean;
  name: boolean;
  surname: boolean;
  date: boolean;
  favBrand: boolean;
  file: boolean;
  img: string | null;
  dollTypes: boolean;
  rarity: boolean;
  promoPermission: boolean;
}

export default class Form extends React.Component<FormProps, FormState> {
  name: React.RefObject<HTMLInputElement> = React.createRef();
  surname: React.RefObject<HTMLInputElement> = React.createRef();
  date: React.RefObject<HTMLInputElement> = React.createRef();
  file: React.RefObject<HTMLInputElement> = React.createRef();
  dollTypes: Set<string> = new Set();
  rarity = false;
  favBrand: React.RefObject<HTMLSelectElement> = React.createRef();
  promoPermission: React.RefObject<HTMLInputElement> = React.createRef();
  dollTypeCollection: React.RefObject<HTMLInputElement> = React.createRef();
  dollTypeAntique: React.RefObject<HTMLInputElement> = React.createRef();
  dollTypeOoak: React.RefObject<HTMLInputElement> = React.createRef();
  dollTypeBjd: React.RefObject<HTMLInputElement> = React.createRef();
  dollTypePlay: React.RefObject<HTMLInputElement> = React.createRef();

  state = {
    firstChangeForm: false,
    buttonDisable: true,
    name: true,
    surname: true,
    date: true,
    favBrand: true,
    file: true,
    img: null,
    dollTypes: true,
    rarity: true,
    promoPermission: true,
  };

  onChangeHandler = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    const name = e.target.name as StateKeys;
    const avatar = this.file.current as HTMLInputElement;
    if (name === "file" && avatar.files && avatar.files.length !== 0) {
      this.setState({
        img: URL.createObjectURL(avatar.files[0]),
        file: true,
      });
    }

    if (name.includes("dollType")) {
      const target = (e as React.ChangeEvent<HTMLInputElement>).target;
      target.checked
        ? this.dollTypes.add(e.target.value)
        : this.dollTypes.delete(e.target.value);
    }

    if (name === "doll-rare") {
      const target = (e as React.ChangeEvent<HTMLInputElement>).target;
      this.rarity = target.value === "true";
    }

    this.setState((prevState) => {
      return { ...prevState, [name]: true };
    }, this.enableButton);

    if (!this.state.firstChangeForm) {
      this.setState({ buttonDisable: false });
    }
  };

  enableButton = () => {
    if (
      this.state.favBrand &&
      this.state.promoPermission &&
      this.state.date &&
      this.state.file &&
      this.state.name &&
      this.state.surname &&
      this.state.dollTypes &&
      this.state.rarity &&
      this.state.firstChangeForm
    ) {
      this.setState((prevState) => {
        return { ...prevState, buttonDisable: false };
      });
    }
  };

  isValidComponent = (condition: boolean, stateKey: StateKeys): boolean => {
    if (condition) {
      this.setState((prevState) => {
        return { ...prevState, [stateKey]: false };
      });
      return false;
    } else {
      this.setState((prevState) => {
        return { ...prevState, [stateKey]: true };
      });
      return true;
    }
  };

  validationAll = (): boolean => {
    const name = (this.name.current as HTMLInputElement).value;
    const surname = (this.surname.current as HTMLInputElement).value;
    const date = (this.date.current as HTMLInputElement).value;
    const avatar = this.file.current as HTMLInputElement;
    const promoPermission = this.promoPermission.current as HTMLInputElement;

    let isValid = true;
    const regName = /^[a-zA-Z]+ [a-zA-Z]+$/;
    isValid = this.isValidComponent(name.trim().length < 2, "name") && isValid;
    isValid = this.isValidComponent(regName.test(name), "name") && isValid;
    isValid =
      this.isValidComponent(surname.trim().length < 2, "surname") && isValid;
    isValid =
      this.isValidComponent(regName.test(surname), "surname") && isValid;
    const dataValue = new Date(date);
    const currentDay = new Date();
    isValid =
      this.isValidComponent(!date || dataValue > currentDay, "date") && isValid;
    isValid =
      this.isValidComponent(
        !this.state.img || !avatar.files || avatar.files.length === 0,
        "file"
      ) && isValid;
    isValid =
      this.isValidComponent(
        promoPermission.checked === false,
        "promoPermission"
      ) && isValid;

    return isValid;
  };

  resetStateInputs = () => {
    const name = this.name.current as HTMLInputElement;
    const surname = this.surname.current as HTMLInputElement;
    const date = this.date.current as HTMLInputElement;
    const avatar = this.file.current as HTMLInputElement;
    const favBrand = this.favBrand.current as HTMLSelectElement;
    const promoPermission = this.promoPermission.current as HTMLInputElement;
    const collection = this.dollTypeCollection.current as HTMLInputElement;
    const bjd = this.dollTypeBjd.current as HTMLInputElement;
    const antique = this.dollTypeAntique.current as HTMLInputElement;
    const ooak = this.dollTypeOoak.current as HTMLInputElement;
    const play = this.dollTypePlay.current as HTMLInputElement;

    name.value = "";
    surname.value = "";
    date.value = "";
    favBrand.value = "Barbie";
    promoPermission.checked = false;
    collection.checked = false;
    antique.checked = false;
    bjd.checked = false;
    ooak.checked = false;
    play.checked = false;
    avatar.value = "";
    this.rarity = false;
    this.dollTypes = new Set();

    this.setState({
      buttonDisable: true,
      name: true,
      surname: true,
      date: true,
      favBrand: true,
      file: true,
      img: null,
      promoPermission: true,
    });
  };

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const name = this.name.current as HTMLInputElement;
    const surname = this.surname.current as HTMLInputElement;
    const date = this.date.current as HTMLInputElement;
    const avatar = this.file.current as HTMLInputElement;
    const favBrand = this.favBrand.current as HTMLSelectElement;
    const promoPermission = this.promoPermission.current as HTMLInputElement;

    this.setState({ firstChangeForm: true });
    if (!this.validationAll()) {
      this.setState({ buttonDisable: true });
      return;
    }

    const user: User = {
      id: Date.now(),
      firstName: name.value,
      lastName: surname.value,
      date: date.value,
      image: URL.createObjectURL((avatar.files as FileList)[0]),
      dollTypes: new Set(this.dollTypes),
      rarity: this.rarity,
      dollBrand: favBrand.value,
      promo: promoPermission.checked,
    };

    this.props.onSubmit(user);
    this.resetStateInputs();
  };

  render() {
    return (
      <form
        onSubmit={this.handleSubmit}
        className="form"
        data-testid={"react-form"}
      >
        <fieldset className="form__fieldset">
          <label className="form__text">
            First Name:
            <input
              onChange={this.onChangeHandler}
              type="text"
              name="name"
              ref={this.name}
              className="form__text-input"
              data-testid={"name-input"}
            />
          </label>
          <div
            className={`error-message${this.state.name ? "_hidden" : ""}`}
            data-testid={"name-error"}
          >
            The first name must contain only letters and more then 2 letters
          </div>
        </fieldset>
        <fieldset className="form__fieldset">
          <label className="form__text">
            Last Name:
            <input
              onChange={this.onChangeHandler}
              name="surname"
              type="text"
              ref={this.surname}
              className="form__text-input"
              data-testid={"surname-input"}
            />
          </label>
          <div
            className={`error-message${this.state.surname ? "_hidden" : ""}`}
            data-testid={"surname-error"}
          >
            The last name must contain only letters and more then 2 letters
          </div>
        </fieldset>
        <fieldset className="form__fieldset">
          <label htmlFor={"upload-button"} className="form__upload">
            Image:
            <div className="form__btn_upload">Upload</div>
          </label>
          <div
            className={`error-message${this.state.file ? "_hidden" : ""}`}
            data-testid={"image-error"}
          >
            You should download the image for avatar
          </div>
          <input
            onChange={this.onChangeHandler}
            type="file"
            name="file"
            style={{ visibility: "hidden", display: "none" }}
            ref={this.file}
            id="upload-button"
            data-testid={"image-input"}
          />
        </fieldset>
        <fieldset className="form__fieldset">
          <label className="form__date">
            Date of Birth:
            <input
              onChange={this.onChangeHandler}
              type="date"
              name="date"
              ref={this.date}
              className="form__date-input"
              data-testid={"date-input"}
            />
          </label>
          <div
            className={`error-message${this.state.date ? "_hidden" : ""}`}
            data-testid={"date-error"}
          >
            The Date of Birth should be in the past
          </div>
        </fieldset>
        <fieldset className="form__fieldset">
          <div className="form__list">
            <legend>What type of dolls you are interested in?</legend>
            <div className="form__list-items">
              <div className="form__list-item">
                <input
                  type="checkbox"
                  id="bjd"
                  name="dollTypeBjd"
                  ref={this.dollTypeBjd}
                  value="bjd"
                  onChange={this.onChangeHandler}
                  data-testid={"dollType-input"}
                />
                <label htmlFor="bjd">BJD</label>
              </div>
              <div className="form__list-item">
                <input
                  type="checkbox"
                  id="antique"
                  name="dollTypeAntique"
                  ref={this.dollTypeAntique}
                  value="antique"
                  onChange={this.onChangeHandler}
                />
                <label htmlFor="antique">Antique</label>
              </div>
              <div className="form__list-item">
                <input
                  type="checkbox"
                  id="ooak"
                  name="dollTypeOoak"
                  ref={this.dollTypeOoak}
                  value="OOAK"
                  onChange={this.onChangeHandler}
                />
                <label htmlFor="ooak">OOAK</label>
              </div>
              <div className="form__list-item">
                <input
                  type="checkbox"
                  id="play"
                  name="dollTypePlay"
                  ref={this.dollTypePlay}
                  value="play"
                  onChange={this.onChangeHandler}
                />
                <label htmlFor="play">Play</label>
              </div>
              <div className="form__list-item">
                <input
                  type="checkbox"
                  id="collection"
                  name="dollTypeCollection"
                  ref={this.dollTypeCollection}
                  value="collection"
                  onChange={this.onChangeHandler}
                />
                <label htmlFor="collection">Collection</label>
              </div>
            </div>
          </div>
        </fieldset>
        <fieldset className="form__fieldset">
          <div className="form__switch">
            <legend>Do you prefer rare dolls?</legend>
            <div className="form__list-items_radio">
              <input
                type="radio"
                id="rare"
                name="doll-rare"
                value="true"
                onChange={this.onChangeHandler}
                data-testid={"radio-input-1"}
              />
              <label htmlFor="rare">
                <div className="form__list-item form__btn_radio btn_left">
                  Yes
                </div>
              </label>

              <input
                type="radio"
                id="not-rare"
                name="doll-rare"
                value="false"
                onChange={this.onChangeHandler}
                defaultChecked={true}
                data-testid={"radio-input-2"}
              />
              <label htmlFor="not-rare">
                <div className="form__list-item form__btn_radio btn_right">
                  No
                </div>
              </label>
            </div>
          </div>
        </fieldset>
        <fieldset className="form__fieldset">
          <div className="form__select">
            <label htmlFor="favBrand">What is your favorite brand?</label>
            <select
              id="favBrand"
              ref={this.favBrand}
              name="dollBrand"
              className="select__options"
              onChange={this.onChangeHandler}
              data-testid={"select-input"}
            >
              <option value="barbie">Barbie</option>
              <option value="pullip">Pullip</option>
              <option value="blythe">Blythe</option>
              <option value="iplehouse">Iplehouse</option>
              <option value="other">Other</option>
            </select>
          </div>
        </fieldset>
        <fieldset className="form__fieldset">
          <label htmlFor="readyForPromo" className="form__accept">
            <input
              type="checkbox"
              ref={this.promoPermission}
              value="true"
              id="readyForPromo"
              name="promoPermission"
              onChange={this.onChangeHandler}
              data-testid={"promoPermission-input"}
            />
            I want to receive notifications about promo, sales, etc.
          </label>
          <div
            className={`error-message${
              this.state.promoPermission ? "_hidden" : ""
            }`}
            data-testid={"promoPermission-error"}
          >
            Please, give your permission
          </div>
        </fieldset>
        <button
          type="submit"
          className={
            this.state.buttonDisable ? "btn__submit_disabled" : "btn__submit"
          }
          data-testid={"submit-button"}
          disabled={this.state.buttonDisable}
        >
          Submit
        </button>
      </form>
    );
  }
}
