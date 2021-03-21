import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

type Bookmark = {
  category?: string;
  datetime?: number;
  headline?: string;
  id?: number;
  image?: string;
  related?: string;
  source?: string;
  summary?: string;
  url?: string;
};

type BookmarksState = {
  bookmarks: Array<Bookmark> | [];
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
