import { PeopleItem } from "data/types";
import { FormData } from "data/types";
export type State = {
  filter: string;
  searchValue: string;
  items: PeopleItem[];
  form: FormData;
  page: number[];
  totalItemsCount: number;
};

export const initialState: State = {
  filter: "people",
  searchValue: "",
  items: [],
  form: {
    firstName: "",
    lastName: "",
    image: {} as FileList,
    date: "",
    dollType: new Set(),
    rare: false,
    favBrand: "",
    promoPermission: false,
  },
  page: [1, 10],
  totalItemsCount: 0,
};
