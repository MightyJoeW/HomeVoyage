import { Routes, Route } from 'react-router';
import HomesFeed from './components/homes-feed/homes-feed';
// import Home from './components/home';
import Error from './components/error/error';
export default (
  <Routes>
    <Route path='/' element={<HomesFeed />}></Route>
    {/* <Route path='/users/:username' element={<Home />}></Route> */}
    <Route path='*' element={<Error />}></Route>
  </Routes>
);
