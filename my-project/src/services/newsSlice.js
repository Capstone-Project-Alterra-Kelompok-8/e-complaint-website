import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getNews, getNewsDetail } from "./newsService";

// Thunk untuk fetch semua berita
export const fetchNews = createAsyncThunk("news/fetchNews", async () => {
  const data = await getNews();
  return data;
});

// Thunk ini buat fetch detail berita berdasarkan ID
export const fetchNewsDetail = createAsyncThunk(
  "news/fetchNewsDetail",
  async (newsId) => {
    const data = await getNewsDetail(newsId);
    return data;
  }
);

const newsSlice = createSlice({
  name: "news",
  initialState: {
    news: [],
    detailNews: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNews.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchNews.fulfilled, (state, action) => {
        state.loading = false;
        state.news = action.payload;
      })
      .addCase(fetchNews.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchNewsDetail.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchNewsDetail.fulfilled, (state, action) => {
        state.loading = false;
        state.detailNews = action.payload;
      })
      .addCase(fetchNewsDetail.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default newsSlice.reducer;
