import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Async thunk untuk mengambil data berita
export const fetchNews = createAsyncThunk('news/fetchNews', async (_, { getState, rejectWithValue }) => {
  try {
    const token = sessionStorage.getItem('token'); // Mengambil token dari sesi
    const response = await fetch('https://capstone-dev.mdrizki.my.id/api/v1/news', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data.data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

const newsSlice = createSlice({
  name: 'news',
  initialState: {
    news: [],
    loading: false,
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNews.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchNews.fulfilled, (state, action) => {
        state.loading = false;
        state.news = action.payload;
      })
      .addCase(fetchNews.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  }   
});

export default newsSlice.reducer;
