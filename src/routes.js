import { Routes, Route } from 'react-router';
import HouseFeed from './components/house-feed/house-feed';
import HouseInfo from './components/house-info/house-info';
import Error from './components/error/error';

export default (
  <Routes>
    <Route path='/' element={<HouseFeed />}></Route>
    <Route path='/:id' element={<HouseInfo />}></Route>
    <Route path='*' element={<Error />}></Route>
  </Routes>
);
