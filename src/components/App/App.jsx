import { Routes, Route } from 'react-router-dom';
import { Layout } from 'components/Layout/Layout';
import { Home } from 'pages/Home';
import { MoviesSearch } from 'pages/MoviesSearch';
import { MovieInfo } from 'pages/MovieInfo';
import { NotFound } from 'pages/NotFound';
import { MovieCredits } from 'components/MovieCredits/MovieCredits';
import { MovieReviews } from 'components/MovieReviews/MovieReviews';




export const App = () => {


  return (

    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='MoviesSearch' element={<MoviesSearch />} />
        <Route path='MovieInfo/:MovieInfoId' element={<MovieInfo />}>
          <Route path='moviecredits' element={<MovieCredits />} />
          <Route path='moviereviews' element={<MovieReviews />} />
        </Route>
      </Route>
      {/* <Route path='*' element={<Navigate to='/' />} /> */}
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
};
