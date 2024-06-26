import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getNews, getNewsDetail } from "./newsService";
import { deleteComment } from "./newsCommentSlice";

const token = sessionStorage.getItem("token");

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

export const deleteNews = createAsyncThunk(
  "news/deleteNews",
  async (newsId, { dispatch }) => {
    try {
      // Delete news
      await axios.delete(
        `https://capstone-dev.mdrizki.my.id/api/v1/news/${newsId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // Fetch comments and delete each one
      const response = await axios.get(
        `https://capstone-dev.mdrizki.my.id/api/v1/news/${newsId}/comments`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const comments = response.data.data;
      comments.forEach(async (comment) => {
        await dispatch(deleteComment({ newsId, commentId: comment.id }));
      });

      return newsId;
    } catch (error) {
      console.error(`Error deleting news with ID ${newsId}:`, error);
      throw error;
    }
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
      })
      .addCase(deleteNews.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteNews.fulfilled, (state, action) => {
        state.loading = false;
        // Filter out the deleted news item
        state.news = state.news.filter((news) => news.id !== action.payload);
      })
      .addCase(deleteNews.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default newsSlice.reducer;
