import { PeopleItem } from "data/types";
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

export type ChangeFilter = {
  type: typeof CHANGE_FILTER;
  payload: string;
};

export type ChangeSearchValue = {
  type: typeof CHANGE_SEARCH_VALUE;
  payload: string;
};

export type ChangeItems = {
  type: typeof CHANGE_ITEMS;
  payload: PeopleItem[];
};
export type ChangeFirstName = {
  type: typeof CHANGE_FIRST_NAME;
  payload: string;
};
export type ChangeLastName = {
  type: typeof CHANGE_LAST_NAME;
  payload: string;
};
export type ChangeFile = {
  type: typeof CHANGE_FILE;
  payload: FileList;
};
export type ChangeDate = {
  type: typeof CHANGE_DATE;
  payload: string;
};
export type ChangeFavBrand = {
  type: typeof CHANGE_FAV_BRAND;
  payload: string;
};
export type ChangePromo = {
  type: typeof CHANGE_PROMO;
  payload: boolean;
};
export type ChangeRare = {
  type: typeof CHANGE_RARE;
  payload: boolean;
};
export type AddDollType = {
  type: typeof ADD_DOLL_TYPE;
  payload: string;
};
export type DeleteDollType = {
  type: typeof DELETE_DOLL_TYPE;
  payload: string;
};
export type ChangePageNumber = {
  type: typeof CHANGE_PAGE_NUMBER;
  payload: number;
};
export type ChangeTotalItemsCount = {
  type: typeof CHANGE_TOTAL_ITEMS_COUNT;
  payload: number;
};
export type ChangeItemsPerPage = {
  type: typeof CHANGE_ITEMS_PER_PAGE;
  payload: number;
};

export type Actions =
  | ChangeFilter
  | ChangeSearchValue
  | ChangeItems
  | ChangeFirstName
  | ChangeLastName
  | ChangeFile
  | ChangeDate
  | ChangeFavBrand
  | ChangePromo
  | ChangeRare
  | AddDollType
  | DeleteDollType
  | ChangePageNumber
  | ChangeTotalItemsCount
  | ChangeItemsPerPage;

export const changeFilter = (payload: string): ChangeFilter => ({
  type: CHANGE_FILTER,
  payload,
});

export const changeSearchValue = (payload: string): ChangeSearchValue => ({
  type: CHANGE_SEARCH_VALUE,
  payload,
});

export const changeItems = (payload: PeopleItem[]): ChangeItems => ({
  type: CHANGE_ITEMS,
  payload,
});

export const changeFirstName = (payload: string): ChangeFirstName => ({
  type: CHANGE_FIRST_NAME,
  payload,
});
export const changeLastName = (payload: string): ChangeLastName => ({
  type: CHANGE_LAST_NAME,
  payload,
});
export const changeFile = (payload: FileList): ChangeFile => ({
  type: CHANGE_FILE,
  payload,
});
export const changeDate = (payload: string): ChangeDate => ({
  type: CHANGE_DATE,
  payload,
});
export const changeFavBrand = (payload: string): ChangeFavBrand => ({
  type: CHANGE_FAV_BRAND,
  payload,
});
export const changePromo = (payload: boolean): ChangePromo => ({
  type: CHANGE_PROMO,
  payload,
});
export const changeRare = (payload: boolean): ChangeRare => ({
  type: CHANGE_RARE,
  payload,
});
export const addDollType = (payload: string): AddDollType => ({
  type: ADD_DOLL_TYPE,
  payload,
});
export const deleteDollType = (payload: string): DeleteDollType => ({
  type: DELETE_DOLL_TYPE,
  payload,
});

export const changePageNumber = (payload: number): ChangePageNumber => ({
  type: CHANGE_PAGE_NUMBER,
  payload,
});
export const changeItemsPerPage = (payload: number): ChangeItemsPerPage => ({
  type: CHANGE_ITEMS_PER_PAGE,
  payload,
});
export const changeTotalItemsCount = (
  payload: number
): ChangeTotalItemsCount => ({
  type: CHANGE_TOTAL_ITEMS_COUNT,
  payload,
});
