import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../store/slice/movieSlice";
import GridContainer from "../components/GridContainer";
import MovieCard from "../components/MovieCard";
import Container from "../components/Container";
import Loader from "../components/Loader";

const MoviesList = () => {
  const dispatch = useDispatch();
  const { isLoading, movies, error } = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(fetchMovies());
  }, []);

  return (
    <>
      <Container>
        <div className="p-4 min-h-svh h-full">
          <h1 className="text-center text-white font-semibold text-3xl py-4">
            Movies List
          </h1>
          {isLoading ? (
            <Loader />
          ) : (
            <>
              <GridContainer>
                {movies?.map((movie, idx) => (
                  <MovieCard key={movie.id} {...movie} />
                ))}
              </GridContainer>
            </>
          )}
        </div>
      </Container>
    </>
  );
};

export default MoviesList;
