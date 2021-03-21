import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

type Bookmarks = {
  category?: string;
  datetime?: number;
  headline?: string;
  id?: number;
  image?: string;
  related?: string;
  source?: string;
  summary?: string;
  url?: string;
}[];

type BookmarksState = {
  bookmarks: Bookmarks[] | [];
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
    removeBookmark(state, action) {
      const incomingIdx = state.bookmarks.findIndex(action.payload);
      state.bookmarks = state.bookmarks.splice(0, incomingIdx);
    },
  },
});

export const { addBookmark, removeBookmark } = bookmarksSlice.actions;

export const selectBookmarks = (state: RootState) => state.bookmarks;

export default bookmarksSlice.reducer;
