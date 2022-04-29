import React, { useEffect, useState } from "react";
import useSWR from "swr";
import { fetcher } from "../config/Config";
import { SwiperSlide, Swiper } from "swiper/react";

const Banner = () => {
  //   const [movies, setMovies] = useState([]);
  const { data, error } = useSWR(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=bf621192a4ed83f45e2d169a09a8f7a2`,
    fetcher
  );
  // cách 1 :
  const movies = data?.results || [];
  /*  cách 2 :
   *useEffect(() => {
   *  if (data && data.results) setMovies(data.results);
   *}, [data]);
   */
  
  return (
    <section className="banner h-[500px] page-container mb-20 overflow-hidden">
      <Swiper grabCursor={"true"} slidesPerView={"auto"}>
        {movies.length > 0 &&
          movies.map((item) => (
            <SwiperSlide key={item.id} >
              <BannerItem prop={item}></BannerItem>
            </SwiperSlide>
          ))}
      </Swiper>
    </section>
  );
};

// components new BannerItem
const BannerItem = ({ prop }) => {
  const {title,poster_path } = prop ;

  return (
    <div className="w-full h-full bg-white rounded-lg relative">
      <div className="overlay absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.5)] rounded-lg"></div>
      <img
        src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
        alt=""
        className="w-full h-full object-top object-cover select-none rounded-lg"
      />
      <div className="absolute left-5 bottom-5 w-full text-white">
        <h2 className="font-bold text-3xl mb-5">{title}</h2>
        <div className="flex items-center gap-x-3 mb-8">
          <span className="px-4 py-2 border border-white rounded-md">
            Aotion
          </span>
          <span className="px-4 py-2 border border-white rounded-md">
            Aotion
          </span>
          <span className="px-4 py-2 border border-white rounded-md">
            Aotion
          </span>
        </div>
        <button className="px-6 py-3 text-white bg-red-400 rounded-md font-medium">
          watch now
        </button>
      </div>
    </div>
  );
};

export default Banner;
