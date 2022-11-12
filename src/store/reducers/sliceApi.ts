import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "services/api";
import { PeopleItem, PlanetsItem, StarshipsItem } from "../../data/types";

export type ApiState = {
  filter: string;
  searchValue: string;
  items: PeopleItem[] | PlanetsItem[] | StarshipsItem[];
  page: number[];
  totalItemsCount: number;
  item: PeopleItem | PlanetsItem | StarshipsItem | null;
  loading: boolean;
};

export const initialState: ApiState = {
  filter: "people",
  searchValue: "",
  items: [],
  page: [1, 10],
  totalItemsCount: 0,
  item: null,
  loading: true,
};

export interface FetchItems {
  filter: string;
  page: number;
  itemsNum: number;
}

export interface FetchSearchItems {
  filter: string;
  searchValue: string;
}

interface ResponceApi {
  data: {
    count: number;
    next: string;
    previous: null | string;
    results: PeopleItem[] | PlanetsItem[] | StarshipsItem[];
  };
}

export const fetchItems = createAsyncThunk(
  "fetchItems",
  async (state: FetchItems) => {
    if (state.itemsNum === 10) {
      const res: ResponceApi = await axiosInstance.get(
        `${state.filter}/?page=${state.page}`
      );
      return res.data;
    }
    if (state.itemsNum === 20) {
      const res1: ResponceApi = await axiosInstance.get(
        `${state.filter}/?page=${state.page * 2 - 1}`
      );
      const res2: ResponceApi = await axiosInstance.get(
        `${state.filter}/?page=${state.page * 2}`
      );

      const result = {
        ...res1.data,
        results: [...res1.data.results, ...res2.data.results],
      };
      return result;
    }
  }
);

export const fetchSearchItems = createAsyncThunk(
  "fetchSearchItems",
  async (state: FetchSearchItems) => {
    const res: ResponceApi = await axiosInstance.get(
      `${state.filter}/?search=${state.searchValue}`
    );
    return res.data;
  }
);

export const slice = createSlice({
  name: "apiPage",
  initialState,
  reducers: {
    changeFilter(state, action) {
      state.filter = action.payload;
    },
    changeSearchValue(state, action) {
      state.searchValue = action.payload;
    },
    changeItems(state, action) {
      state.items = action.payload;
    },
    changeItem(state, action) {
      state.item = action.payload;
    },
    changePageNumber(state, action) {
      state.page[0] = action.payload;
    },
    changeItemsPerPage(state, action) {
      state.page[1] = action.payload;
    },
    changeTotalItemsCount(state, action) {
      state.totalItemsCount = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchItems.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchItems.fulfilled, (state, action) => {
        state.items = action.payload?.results as
          | PeopleItem[]
          | PlanetsItem[]
          | StarshipsItem[];
        state.totalItemsCount = action.payload?.count as number;
        state.loading = false;
      })
      .addCase(fetchItems.rejected, (state, action) => {
        console.log(action.error);
        state.items = [];
        state.totalItemsCount = 0;
        state.loading = false;
      })
      .addCase(fetchSearchItems.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchSearchItems.fulfilled, (state, action) => {
        state.items = action.payload?.results as
          | PeopleItem[]
          | PlanetsItem[]
          | StarshipsItem[];
        state.totalItemsCount = action.payload?.count as number;
        state.loading = false;
      })
      .addCase(fetchSearchItems.rejected, (state, action) => {
        console.log(action.error);
        state.items = [];
        state.totalItemsCount = 0;
        state.loading = false;
      });
  },
});

export default slice.reducer;

export const {
  changeFilter,
  changeSearchValue,
  changeItems,
  changeItem,
  changePageNumber,
  changeItemsPerPage,
  changeTotalItemsCount,
} = slice.actions;
