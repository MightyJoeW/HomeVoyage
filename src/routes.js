import { Routes, Route } from 'react-router';
import HomesFeed from './components/homes-feed/homes-feed';
// import HomeCard from './components/home-card/home-card';
import Error from './components/error/error';
export default (
  <Routes>
    <Route path='/' element={<HomesFeed />}></Route>
    {/* <Route path='/homes/:id' element={<HomeCard />}></Route> */}
    <Route path='*' element={<Error />}></Route>
  </Routes>
);
