import React, { useEffect, useState } from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import useSWR from "swr";
import MovieCard from "./MovieCard";
import { fetcher } from "../../config/Config";

//https://api.themoviedb.org/3/movie/now_playing?api_key=95f2419536f533cdaa1dadf83c606027

const MovieList = ({type = 'now_playing'}) => {
  const [movies, setMovies] = useState([]);
  const { data, error } = useSWR(
    `https://api.themoviedb.org/3/movie/${type}?api_key=bf621192a4ed83f45e2d169a09a8f7a2`,
    fetcher
  );

  // CÁCH 1: const movies = data?.results || [];
  // CÁCH 2:
  useEffect(() => {
    if (data && data.results) setMovies(data.results);
  }, [data]);
  
  
  return (
    <div className="movie-list">
      <Swiper grabCursor={"true"} spaceBetween={40} slidesPerView={"auto"}>
        {movies.length > 0 &&
          movies.map((item) => (
            <SwiperSlide key={item.id}>
              <MovieCard item={item}></MovieCard>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default MovieList;
