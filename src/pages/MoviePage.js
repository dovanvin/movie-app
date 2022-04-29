import React, { useEffect, useState } from "react";
import useSWR from "swr";
import MovieCard from "../component/movie/MovieCard";
import { fetcher } from "../config/Config";

const MoviePage = () => {
  const [movies, setMovies] = useState([]);
  const { data, error } = useSWR(
    `https://api.themoviedb.org/3/movie/popular?api_key=bf621192a4ed83f45e2d169a09a8f7a2`,
    fetcher
  );

  // CÁCH 1: const movies = data?.results || [];
  // CÁCH 2:
  useEffect(() => {
    if (data && data.results) setMovies(data.results);
  }, [data]);

  return (
    <>
      <div className="flex page-container mb-10">
        <div className="flex-1">
          <input
            type="text"
            placeholder="search movies here to type ..."
            className="w-full p-4 bg-slate-800 outline-none text-white"
          />
        </div>
        <button className="p-4 text-white bg-red-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>

      <div className="grid grid-cols-4 gap-10">
        {movies.length > 0 &&
          movies.map((item) => (
            <MovieCard key={item.id} item={item}></MovieCard>
          ))}
      </div>
    </>
  );
};

export default MoviePage;
