import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Thunk untuk fetch semua berita
export const fetchNews = createAsyncThunk('news/fetchNews', async (_, { getState }) => {
    const token = sessionStorage.getItem('token');
    const response = await fetch('https://capstone-dev.mdrizki.my.id/api/v1/news', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    });
    const data = await response.json();
    return data.data;
});

// Thunk untuk fetch detail berita berdasarkan ID
export const fetchNewsDetail = createAsyncThunk('news/fetchNewsDetail', async (newsId, { getState }) => {
    const token = sessionStorage.getItem('token');
    const response = await fetch(`https://capstone-dev.mdrizki.my.id/api/v1/news/${newsId}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    });
    const data = await response.json();
    return data.data;
});

const newsSlice = createSlice({
    name: 'news',
    initialState: {
        news: [],
        detailNews: null,
        loading: false,
        error: null
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
    }
});

export default newsSlice.reducer;
