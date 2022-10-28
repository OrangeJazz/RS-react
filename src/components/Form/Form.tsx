import React, { useEffect, useRef, useState } from "react";
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

// interface FormState {
//   firstChangeForm: boolean;
//   buttonDisable: boolean;
//   name: boolean;
//   surname: boolean;
//   date: boolean;
//   favBrand: boolean;
//   file: boolean;
//   img: string | null;
//   dollTypes: boolean;
//   rarity: boolean;
//   promoPermission: boolean;
// }

const Form = (props: FormProps) => {
  const name = useRef<HTMLInputElement | null>(null);
  const surname = useRef<HTMLInputElement | null>(null);
  const date = useRef<HTMLInputElement | null>(null);
  const file = useRef<HTMLInputElement | null>(null);
  let dollTypes: Set<string> = new Set();
  let rarity = false;
  const favBrand = useRef<HTMLSelectElement | null>(null);
  const promoPermission = useRef<HTMLInputElement | null>(null);
  const dollTypeCollection = useRef<HTMLInputElement | null>(null);
  const dollTypeAntique = useRef<HTMLInputElement | null>(null);
  const dollTypeOoak = useRef<HTMLInputElement | null>(null);
  const dollTypeBjd = useRef<HTMLInputElement | null>(null);
  const dollTypePlay = useRef<HTMLInputElement | null>(null);

  const [firstChangeForm, setFirstChangeForm] = useState(false);
  const [buttonDisable, setButtonDisable] = useState(true);
  const [nameState, setNameState] = useState(true);
  const [surnameState, setSurnameState] = useState(true);
  const [dateState, setDateState] = useState(true);
  const [favBrandState, setFavBrandState] = useState(true);
  const [fileState, setFileState] = useState(true);
  const [imgState, setImgState] = useState("");
  const [dollTypesState, setDollTypesState] = useState(true);
  const [rarityState, setRarityState] = useState(true);
  const [promoPermissionState, setPromoPermissionState] = useState(true);

  useEffect(() => {
    if (
      favBrandState &&
      promoPermissionState &&
      dateState &&
      fileState &&
      nameState &&
      surnameState &&
      dollTypesState &&
      rarityState &&
      firstChangeForm
    ) {
      setButtonDisable(false);
    }
  }, [
    favBrandState,
    promoPermissionState,
    dateState,
    fileState,
    nameState,
    surnameState,
    dollTypesState,
    rarityState,
    firstChangeForm,
  ]);

  const onChangeHandler = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    const name = e.target.name as StateKeys;
    const avatar = file.current as HTMLInputElement;

    if (name === "file" && avatar.files && avatar.files.length !== 0) {
      setImgState(URL.createObjectURL(avatar.files[0]));
    }

    if (name.includes("dollType")) {
      const target = (e as React.ChangeEvent<HTMLInputElement>).target;
      target.checked
        ? dollTypes.add(e.target.value)
        : dollTypes.delete(e.target.value);
      setDollTypesState(true);
    }

    if (name === "doll-rare") {
      const target = (e as React.ChangeEvent<HTMLInputElement>).target;
      rarity = target.value === "true";
    }

    switch (name) {
      case "name":
        setNameState(true);
        break;
      case "surname":
        setSurnameState(true);
        break;
      case "date":
        setDateState(true);
        break;
      case "dollBrand":
        setFavBrandState(true);
        break;
      case "doll-rare":
        setRarityState(true);
        break;
      case "file":
        setFileState(true);
        break;
      case "promoPermission":
        setPromoPermissionState(true);
        break;
      default:
        break;
    }

    if (!firstChangeForm) {
      setButtonDisable(false);
    }
  };

  const validationAll = (): boolean => {
    const nameValue = (name.current as HTMLInputElement).value;
    const surnameValue = (surname.current as HTMLInputElement).value;
    const dateValue = (date.current as HTMLInputElement).value;
    const avatarValue = file.current as HTMLInputElement;
    const promoPermissionValue = promoPermission.current as HTMLInputElement;

    let isValid = true;
    const regName = /^[a-zA-Z]+[a-zA-Z]+$/;
    isValid = isValid && nameValue.trim().length > 2;
    isValid = isValid && regName.test(nameValue);
    setNameState(nameValue.trim().length > 2 && regName.test(nameValue));
    isValid = isValid && surnameValue.trim().length > 2;
    isValid = isValid && regName.test(surnameValue);
    setSurnameState(
      surnameValue.trim().length > 2 && regName.test(surnameValue)
    );
    const dayValue = new Date(dateValue);
    const currentDay = new Date();
    isValid = isValid && !!(date.current as HTMLInputElement).valueAsDate;
    isValid = isValid && dayValue < currentDay;
    setDateState(
      !!(date.current as HTMLInputElement).valueAsDate && dayValue < currentDay
    );
    isValid = isValid && !!avatarValue.files;
    isValid = isValid && !!(avatarValue.files as FileList).length;
    setFileState(
      !!avatarValue.files && !!(avatarValue.files as FileList).length
    );
    isValid = isValid && promoPermissionValue.checked;
    setPromoPermissionState(promoPermissionValue.checked);
    return isValid;
  };

  const resetStateInputs = () => {
    const nameValue = name.current as HTMLInputElement;
    const surnameValue = surname.current as HTMLInputElement;
    const dateValue = date.current as HTMLInputElement;
    const avatarValue = file.current as HTMLInputElement;
    const favBrandValue = favBrand.current as HTMLSelectElement;
    const promoPermissionValue = promoPermission.current as HTMLInputElement;
    const collectionValue = dollTypeCollection.current as HTMLInputElement;
    const bjdValue = dollTypeBjd.current as HTMLInputElement;
    const antiqueValue = dollTypeAntique.current as HTMLInputElement;
    const ooakValue = dollTypeOoak.current as HTMLInputElement;
    const playValue = dollTypePlay.current as HTMLInputElement;

    nameValue.value = "";
    surnameValue.value = "";
    dateValue.value = "";
    favBrandValue.value = "Barbie";
    promoPermissionValue.checked = false;
    collectionValue.checked = false;
    antiqueValue.checked = false;
    bjdValue.checked = false;
    ooakValue.checked = false;
    playValue.checked = false;
    avatarValue.value = "";
    rarity = false;
    dollTypes = new Set();

    setButtonDisable(true);
    setNameState(true);
    setSurnameState(true);
    setDateState(true);
    setFavBrandState(true);
    setFileState(true);
    setImgState("");
    setPromoPermissionState(true);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const nameValue = name.current as HTMLInputElement;
    const surnameValue = surname.current as HTMLInputElement;
    const dateValue = date.current as HTMLInputElement;
    const avatarValue = file.current as HTMLInputElement;
    const favBrandValue = favBrand.current as HTMLSelectElement;
    const promoPermissionValue = promoPermission.current as HTMLInputElement;

    setFirstChangeForm(true);

    if (!validationAll()) {
      setButtonDisable(true);
      return;
    }

    const user: User = {
      id: Date.now(),
      firstName: nameValue.value,
      lastName: surnameValue.value,
      date: dateValue.value,
      image: URL.createObjectURL((avatarValue.files as FileList)[0]),
      dollTypes: new Set(dollTypes),
      rarity: rarity,
      dollBrand: favBrandValue.value,
      promo: promoPermissionValue.checked,
    };

    props.onSubmit(user);
    resetStateInputs();
  };

  return (
    <form onSubmit={handleSubmit} className="form" data-testid={"react-form"}>
      <fieldset className="form__fieldset">
        <label className="form__text">
          First Name:
          <input
            onChange={onChangeHandler}
            type="text"
            name="name"
            ref={name}
            className="form__text-input"
            data-testid={"name-input"}
          />
        </label>
        <div
          className={`error-message${nameState ? "_hidden" : ""}`}
          data-testid={"name-error"}
        >
          The first name must contain only letters and more then 2 letters
        </div>
      </fieldset>
      <fieldset className="form__fieldset">
        <label className="form__text">
          Last Name:
          <input
            onChange={onChangeHandler}
            name="surname"
            type="text"
            ref={surname}
            className="form__text-input"
            data-testid={"surname-input"}
          />
        </label>
        <div
          className={`error-message${surnameState ? "_hidden" : ""}`}
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
          className={`error-message${fileState ? "_hidden" : ""}`}
          data-testid={"image-error"}
        >
          You should download the image for avatar
        </div>
        <input
          onChange={onChangeHandler}
          type="file"
          name="file"
          style={{ visibility: "hidden", display: "none" }}
          ref={file}
          id="upload-button"
          data-testid={"image-input"}
        />
      </fieldset>
      <fieldset className="form__fieldset">
        <label className="form__date">
          Date of Birth:
          <input
            onChange={onChangeHandler}
            type="date"
            name="date"
            ref={date}
            className="form__date-input"
            data-testid={"date-input"}
          />
        </label>
        <div
          className={`error-message${dateState ? "_hidden" : ""}`}
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
                ref={dollTypeBjd}
                value="bjd"
                onChange={onChangeHandler}
                data-testid={"dollType-input"}
              />
              <label htmlFor="bjd">BJD</label>
            </div>
            <div className="form__list-item">
              <input
                type="checkbox"
                id="antique"
                name="dollTypeAntique"
                ref={dollTypeAntique}
                value="antique"
                onChange={onChangeHandler}
              />
              <label htmlFor="antique">Antique</label>
            </div>
            <div className="form__list-item">
              <input
                type="checkbox"
                id="ooak"
                name="dollTypeOoak"
                ref={dollTypeOoak}
                value="OOAK"
                onChange={onChangeHandler}
              />
              <label htmlFor="ooak">OOAK</label>
            </div>
            <div className="form__list-item">
              <input
                type="checkbox"
                id="play"
                name="dollTypePlay"
                ref={dollTypePlay}
                value="play"
                onChange={onChangeHandler}
              />
              <label htmlFor="play">Play</label>
            </div>
            <div className="form__list-item">
              <input
                type="checkbox"
                id="collection"
                name="dollTypeCollection"
                ref={dollTypeCollection}
                value="collection"
                onChange={onChangeHandler}
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
              onChange={onChangeHandler}
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
              onChange={onChangeHandler}
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
            ref={favBrand}
            name="dollBrand"
            className="select__options"
            onChange={onChangeHandler}
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
            ref={promoPermission}
            value="true"
            id="readyForPromo"
            name="promoPermission"
            onChange={onChangeHandler}
            data-testid={"promoPermission-input"}
          />
          I want to receive notifications about promo, sales, etc.
        </label>
        <div
          className={`error-message${promoPermissionState ? "_hidden" : ""}`}
          data-testid={"promoPermission-error"}
        >
          Please, give your permission
        </div>
      </fieldset>
      <button
        type="submit"
        className={buttonDisable ? "btn__submit_disabled" : "btn__submit"}
        data-testid={"submit-button"}
        disabled={buttonDisable}
      >
        Submit
      </button>
    </form>
  );
};

export default Form;
