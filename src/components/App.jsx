import { Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';
import Home from 'pages/Home/Home';
import Movies from 'pages/Movies/Movies';
import NavBar from './NavBar/NavBar';
import MovieDetails from 'pages/MovieDetails/MovieDetails';
import Cast from 'pages/Cast/Cast';
import Review from 'pages/Reviews/Reviews';
  
export const App = () => {
  return (
    <div>
      <NavBar />
      <Suspense>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:id" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Review />}/>
          </Route>
          <Route path="*" element={<Home />} />
        </Routes>
      </Suspense>
    </div>
  );
};
