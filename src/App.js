import './App.scss';

import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';
import EntireCountry from './components/EntireCountry';
import RegionList from './components/RegionList';
import RegionDetail from './components/RegionDetail';

function App() {
  return (
    <>
      <Navbar />
      <EntireCountry />
      {/* <RegionList /> */}
      {/* <RegionDetail /> */}
      <Footer />
  </>
  );
}

export default App;
