import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '@App/store';

type PaginationState = {
  page: number;
};

const initialState = {
  page: 1,
} as PaginationState;

export const paginationSlice = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
    nextPage(state) {
      state.page += 1;
    },
    prevPage(state) {
      state.page -= 1;
    },
  },
});

export const { nextPage, prevPage } = paginationSlice.actions;

export const selectPagination = (state: RootState) => state.pagination;

export default paginationSlice.reducer;
