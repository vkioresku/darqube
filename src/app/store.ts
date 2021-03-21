import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import newsReducer from '@Containers/News/newsSlice';
import paginationReducer from '@Containers/News/paginationSlice';
import bookmarksReducer from '@Containers/Bookmarks/bookmarksSlice';

export const store = configureStore({
  reducer: {
    news: newsReducer,
    bookmarks: bookmarksReducer,
    pagination: paginationReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
