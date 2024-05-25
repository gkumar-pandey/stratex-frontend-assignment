import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchMoviesService } from "../../services/fetchMovies";

const initialState = {
  movies: [],
  favMovies: [],
  isLoading: false,
  error: null,
};

export const fetchMovies = createAsyncThunk(
  "movies/fetchMovies",
  fetchMoviesService
);

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovieToFavorite: (state, action) => {
      state.favMovies = [...state.favMovies, action.payload];
    },
    removeMovieFromFavorite: (state, action) => {
      state.favMovies = state.favMovies.filter(
        (movie, idx) => movie.id !== action.payload
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMovies.pending, (state, action) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchMovies.fulfilled, (state, action) => {
      state.isLoading = false;
      state.movies = action.payload;
    });
    builder.addCase(fetchMovies.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export const { addMovieToFavorite, removeMovieFromFavorite } =
  movieSlice.actions;
export default movieSlice.reducer;
