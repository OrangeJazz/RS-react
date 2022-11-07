import { Actions } from "./actions";
import {
  ADD_DOLL_TYPE,
  CHANGE_DATE,
  CHANGE_FAV_BRAND,
  CHANGE_FILE,
  CHANGE_FILTER,
  CHANGE_FIRST_NAME,
  CHANGE_ITEMS,
  CHANGE_ITEMS_PER_PAGE,
  CHANGE_LAST_NAME,
  CHANGE_PAGE_NUMBER,
  CHANGE_PROMO,
  CHANGE_RARE,
  CHANGE_SEARCH_VALUE,
  CHANGE_TOTAL_ITEMS_COUNT,
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
    case CHANGE_TOTAL_ITEMS_COUNT:
      return {
        ...state,
        totalItemsCount: action.payload,
      };
    case CHANGE_PAGE_NUMBER:
      return {
        ...state,
        page: [action.payload, state.page[1]],
      };
    case CHANGE_ITEMS_PER_PAGE:
      return {
        ...state,
        page: [state.page[0], action.payload],
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
      return {
        ...state,
        form: {
          ...state.form,
        },
      };

    default:
      return state;
  }
};

export default reducer;
