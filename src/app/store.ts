import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import newsReducer from '../containers/App/newsSlice';

export const store = configureStore({
  reducer: {
    news: newsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
