import CssBaseline from '@mui/material/CssBaseline';
import HomesFeed from './components/homes-feed/homes-feed';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';

const App: React.FC = () => {
  return (
    <>
      <CssBaseline />
      <Navbar />
      <HomesFeed />
      <Footer />
    </>
  );
};

export default App;
