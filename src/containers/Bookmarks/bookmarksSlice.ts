import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '@App/store';
import { News } from '@Types';

type BookmarksState = {
  bookmarks: News[] | [];
};

const initialState = {
  bookmarks: [],
} as BookmarksState;

export const bookmarksSlice = createSlice({
  name: 'bookmarks',
  initialState,
  reducers: {
    addBookmark(state, action) {
      state.bookmarks = [...state.bookmarks, action.payload];
    },
    removeBookmarkById(state, action) {
      state.bookmarks = state.bookmarks.filter(
        (item) => item.id !== action.payload,
      );
    },
  },
});

export const { addBookmark, removeBookmarkById } = bookmarksSlice.actions;

export const selectBookmarks = (state: RootState) => state.bookmarks;

export default bookmarksSlice.reducer;
