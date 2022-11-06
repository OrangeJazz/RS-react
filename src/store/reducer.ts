import { Actions } from "./actions";
import {
  ADD_DOLL_TYPE,
  CHANGE_DATE,
  CHANGE_FAV_BRAND,
  CHANGE_FILE,
  CHANGE_FILTER,
  CHANGE_FIRST_NAME,
  CHANGE_ITEMS,
  CHANGE_LAST_NAME,
  CHANGE_PROMO,
  CHANGE_RARE,
  CHANGE_SEARCH_VALUE,
  DELETE_DOLL_TYPE,
} from "./constants";
import { State } from "./store";

const reducer = (state: State, action: Actions): State => {
  // console.log({ state, action });
  switch (action.type) {
    case CHANGE_FILTER:
      return {
        ...state,
        filter: action.payload,
      };

    case CHANGE_SEARCH_VALUE:
      return {
        ...state,
        searchValue: action.payload,
      };

    case CHANGE_ITEMS:
      return {
        ...state,
        items: action.payload,
      };

    case CHANGE_FIRST_NAME:
      return {
        ...state,
        form: {
          ...state.form,
          firstName: action.payload,
        },
      };
    case CHANGE_LAST_NAME:
      return {
        ...state,
        form: {
          ...state.form,
          lastName: action.payload,
        },
      };
    case CHANGE_FILE:
      return {
        ...state,
        form: {
          ...state.form,
          image: action.payload,
        },
      };
    case CHANGE_DATE:
      return {
        ...state,
        form: {
          ...state.form,
          date: action.payload,
        },
      };
    case CHANGE_FAV_BRAND:
      return {
        ...state,
        form: {
          ...state.form,
          favBrand: action.payload,
        },
      };
    case CHANGE_PROMO:
      return {
        ...state,
        form: {
          ...state.form,
          promoPermission: action.payload,
        },
      };
    case CHANGE_RARE:
      return {
        ...state,
        form: {
          ...state.form,
          rare: action.payload,
        },
      };
    case ADD_DOLL_TYPE:
      const addedDollType = state.form.dollType.add(action.payload);
      return {
        ...state,
        form: {
          ...state.form,
          dollType: addedDollType,
        },
      };
    case DELETE_DOLL_TYPE:
      state.form.dollType.delete(action.payload);
      // console.log(state.form.dollType);
      return {
        ...state,
        form: {
          ...state.form,
          // dollType: deletedDollType,
        },
      };

    default:
      return state;
  }
};

export default reducer;
