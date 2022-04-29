import { Route, Routes } from "react-router-dom";
import "swiper/scss";
import Banner from "./banner/Banner";
import Main from "./layout/Main";
import HomePage from "./pages/HomePage";
import MovieDetailsPage from "./pages/MovieDetailsPage";
import MoviePage from "./pages/MoviePage";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Main></Main>}>
        {/* home */}
          <Route
            path="/"
            element={
              <>
                <Banner></Banner>
                <HomePage></HomePage>
              </>
            }
          ></Route>
        {/* movies */}
          <Route
            path="/movies"
            element={
              <>
                <Banner></Banner>
                <MoviePage></MoviePage>
              </>
            }
          ></Route>
        {/* trang chi tiết */}
          <Route
            path="/movie/:movieId"
            element={
              <>
                <MovieDetailsPage></MovieDetailsPage>
              </>
            }
          ></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
