import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchNewsComments = createAsyncThunk(
  'newsComments/fetchNewsComments',
  async (newsId, { getState }) => {
    const token = sessionStorage.getItem('token');
    const response = await axios.get(`https://capstone-dev.mdrizki.my.id/api/v1/news/${newsId}/comments`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data.data;
  }
);

const newsCommentSlice = createSlice({
  name: 'newsComments',
  initialState: {
    comments: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNewsComments.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchNewsComments.fulfilled, (state, action) => {
        state.loading = false;
        state.comments = action.payload;
      })
      .addCase(fetchNewsComments.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default newsCommentSlice.reducer;
