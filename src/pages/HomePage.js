import React from "react";
import Banner from "../banner/Banner";
import MovieList from "../component/movie/MovieList";

const HomePage = () => {
  return (
    <>
      
      <section className="movie-layout page-container pb-20">
        <h2 className="capitalize text-white mb-5 text-3xl ">Now playing</h2>
        <MovieList></MovieList>
      </section>

      <section className="movie-layout page-container pb-20">
        <h2 className="capitalize text-white mb-5 text-3xl ">Top rated</h2>
        <MovieList type="top_rated"></MovieList>
      </section>

      <section className="movie-layout page-container pb-20">
        <h2 className="capitalize text-white mb-5 text-3xl ">Trending</h2>
        <MovieList type="popular"></MovieList>
      </section>
    </>
  );
};

export default HomePage;
