import React from "react";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ item }) => {
  //prop-types .Nó giúp dõ dàng hơn trong việc chuyền prop
  const { title, poster_path, vote_average, release_date , id } = item;
  // dùng useNavigate() để điều hướng 
  const navigate = useNavigate();

  return (
    <div className="movie-card select-none flex flex-col rounded-lg p-3 bg-slate-800 text-white h-[100%]">
      <img
        src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
        alt=""
        className="w-full h-[250px] object-cover rounded-lg mb-5"
      />
      <div className="flex flex-col flex-1">
        <h3 className=" text-xl font-bold mb-3">{title}</h3>
        <div className="flex items-center justify-between mb-10 ">
          <span>{new Date(release_date).getFullYear()}</span>
          <span>{vote_average}</span>
        </div>
        <button onClick={() => navigate(`/movie/${id}`)} className="w-full py-2 text-white bg-red-500 rounded-md font-medium mt-auto">
          watch now
        </button>
      </div>
    </div>
  );
};

export default MovieCard;
