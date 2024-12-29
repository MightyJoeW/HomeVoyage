import { Routes, Route } from 'react-router';
import HomesFeed from './components/homes-feed/homes-feed';
import HomeInfo from './components/home-info/home-info';
import Error from './components/error/error';

export default (
  <Routes>
    <Route path='/' element={<HomesFeed />}></Route>
    <Route path='/homes/:id' element={<HomeInfo />}></Route>
    <Route path='*' element={<Error />}></Route>
  </Routes>
);
