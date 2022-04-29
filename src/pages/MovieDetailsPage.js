import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { apikey, fetcher } from "../config/Config";

//https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  //   const [movies, setMovies] = useState([]);
  const { data, error } = useSWR(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apikey}
    `,
    fetcher
  );
  if( !data ) return null;
  console.log(data);

  // CÁCH 1: const movies = data?.results || [];
  // CÁCH 2:
  //   useEffect(() => {
  //     if (data && data.results) setMovies(data.results);
  //   }, [data]);

  const { backdrop_path } = data;
  return (
    <>
      <div className="w-full h-[600px] relative mb-10">
      <div className="absolute inset-0 bg-black bg-opacity-25"></div>
        <div
          className="w-full h-full bg-cover bg-no-repeat"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${backdrop_path})`,
          }}
        ></div>
      </div>
      {/* <div>Lorem ipsum dolor sit amet.</div> */}
    </>
  );
};

export default MovieDetailsPage;
