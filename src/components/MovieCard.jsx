import React from "react";
import { MdFavoriteBorder } from "react-icons/md";
import { MdFavorite } from "react-icons/md";

const MovieCard = (props) => {
  const { id, image, imgdb_url, movie, rating } = props;
  const isFavorite = false;
  const toggleFavorite = () => {};
  return (
    <>
      <div className="border relative  p-4 border-gray-500 rounded-md bg-[var(secondary-bg)] text-white w-72 bg-base-100 shadow-xl">
        <img src={image} alt={movie} />

        <div className="card-body">
          <h2 className="text-lg font-medium text-white">{movie}</h2>
          <p>Rating : {rating}</p>
        </div>
        <button className="text-3xl  top-2 right-2 cursor-pointer absolute">
          {isFavorite ? <MdFavorite /> : <MdFavoriteBorder />}
        </button>
      </div>
    </>
  );
};

export default MovieCard;
