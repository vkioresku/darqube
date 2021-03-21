import { createSlice } from '@reduxjs/toolkit';
import { AppThunk, RootState } from '../../app/store';

type News = {
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

type NewsState = {
  news: News | [];
  loading: 'idle' | 'pending';
};

const initialState = {
  news: [],
  loading: 'idle',
} as NewsState;

export const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    newsLoading(state) {
      if (state.loading === 'idle') {
        state.loading = 'pending';
      }
    },
    newsReceived(state, action) {
      if (state.loading === 'pending') {
        state.loading = 'idle';
        state.news = action.payload;
      }
    },
  },
});

const { newsLoading, newsReceived } = newsSlice.actions;

export const fetchNews = (): AppThunk => async (dispatch) => {
  dispatch(newsLoading());
  const response = await fetch(
    'https://finnhub.io/api/v1/company-news?symbol=AAPL&from=2021-03-01&to=2021-03-15&token=bpjsf67rh5r9328ecgvg',
  );
  const data = await response.json();
  dispatch(newsReceived(data));
};

export const selectNews = (state: RootState) => state.news;

export default newsSlice.reducer;
