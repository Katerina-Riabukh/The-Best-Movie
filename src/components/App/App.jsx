import { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from 'components/Layout/Layout';

const Home = lazy(() => import('../../pages/Home'))
const MoviesSearch = lazy(() => import('../../pages/MoviesSearch'))
const MovieInfo = lazy(() => import('../../pages/MovieInfo'))
const MovieCredits = lazy(() => import('../MovieCredits/MovieCredits'))
const MovieReviews = lazy(() => import('../MovieReviews/MovieReviews'))



export const App = () => {



  return (

    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='movies' element={<MoviesSearch />} />
        <Route path='movies/:movieId' element={<MovieInfo />}>
          <Route path='credits' element={<MovieCredits />} />
          <Route path='reviews' element={<MovieReviews />} />
        </Route>
      </Route>
      <Route path='*' element={<Navigate to='/' />} />
      {/* <Route path='*' element={<NotFound />} /> */}
    </Routes>
  );
};
