import React from "react";
import { useSelector } from "react-redux";
import GridContainer from "../components/GridContainer";
import MovieCard from "../components/MovieCard";
import Container from "../components/Container";

const FavMoviesList = () => {
  const { favMovies } = useSelector((state) => state.movies);
  return (
    <Container>
      <div className="p-4 min-h-svh h-full">
        <h1 className="text-center text-white font-semibold text-3xl py-4">
          Movies List
        </h1>
        <GridContainer>
          {favMovies?.map((movie, idx) => (
            <MovieCard key={movie.id} {...movie} />
          ))}
        </GridContainer>
      </div>
    </Container>
  );
};

export default FavMoviesList;
