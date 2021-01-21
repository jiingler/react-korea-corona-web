import './App.scss';

import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';
import EntireCountry from './components/EntireCountry';
import RegionList from './components/RegionList';
import RegionDetail from './components/RegionDetail';

import {fetchJson} from './api/ApiUtils';

import {useState, useEffect} from 'react';


const API_KEY = '7e7c57e81fdf04a63f2a64645c11e1780';
const ENTIRE_COUNTRY_REQUEST_URL = `https://api.corona-19.kr/korea/?serviceKey=${API_KEY}`

const fetchEntireCountryData = () => {
  return fetchJson(ENTIRE_COUNTRY_REQUEST_URL).then(data => {
    return {
      updateTime: data.updateTime,
      todayCase: 0,
      totalCase: data.TotalCase,
      nowCase: data.NowCase,
      totalRecovered: data.TotalRecovered,
      todayRecovered: data.TodayRecovered,
      totalDeath: data.TotalDeath,
      todayDeath: data.TodayDeath,

    }
  });
}

function App() {

  const [entireCountryData, setEntireCountryData] = useState({
    updateTime: '1970/01/01 00:00:00',
    todayCase: 0,
    totalCase: 0,
    nowCase: 0,
    totalRecovered: 0,
    todayRecovered: 0,
    totalDeath: 0,
    todayDeath: 0,
  });

  useEffect(()=>{
    const fetchData = async () => {
      const [fetchedEntireCountryData] = await Promise.all([
        fetchEntireCountryData()
      ]);

      setEntireCountryData({
        ...fetchedEntireCountryData,
      })
    }
    
    fetchData();
  }, []);


  return (
    <>
      <Navbar />
      <div className="container">
        <EntireCountry entireCountryData={entireCountryData} />
        {/* <RegionList /> */}
        {/* <RegionDetail /> */}
      </div>
      <Footer />
  </>
  );
}

export default App;
