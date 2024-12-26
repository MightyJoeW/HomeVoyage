import CssBaseline from '@mui/material/CssBaseline';
import routes from './routes';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';

const App: React.FC = () => {
  return (
    <>
      <CssBaseline />
      <Navbar />
      {routes}
      <Footer />
    </>
  );
};

export default App;
