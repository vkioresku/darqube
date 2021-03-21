import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import newsReducer from '../containers/News/newsSlice';
import bookmarksReducer from '../containers/Bookmarks/bookmarksSlice';

export const store = configureStore({
  reducer: {
    news: newsReducer,
    bookmarks: bookmarksReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
