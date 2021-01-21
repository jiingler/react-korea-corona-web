import './App.scss';

import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';
import EntireCountry from './components/EntireCountry';
import RegionList from './components/RegionList';
import RegionDetail from './components/RegionDetail';

import {fetchJson} from './api/ApiUtils';

import {useState, useEffect} from 'react';


const API_KEY = '7e7c57e81fdf04a63f2a64645c11e1780';
const ENTIRE_COUNTRY_REQUEST_URL = `https://api.corona-19.kr/korea/?serviceKey=${API_KEY}`;
const REGION_REQUEST_URL = `https://api.corona-19.kr/korea/country/new/?serviceKey=${API_KEY}`;

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

const fetchRegionData = () => {
  return fetchJson(REGION_REQUEST_URL).then(data => {
    console.log(data)

    return Object.values(data)
      .filter(item => item.countryName && !['검역'].includes(item.countryName));
    
  })
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

  const [regionData, setRegionData] = useState([]);

  useEffect(()=>{
    const fetchData = async () => {
      let [fetchedEntireCountryData, fetchedRegionData] = await Promise.all([
        fetchEntireCountryData(),
        fetchRegionData()
      ]);

      fetchedEntireCountryData.todayCase = fetchedRegionData.filter(item => item.countryName === '합계')[0].newCase;

      fetchedRegionData = [...fetchedRegionData.filter(item => item.countryName !== '합계')];

      setEntireCountryData({
        ...fetchedEntireCountryData,
      });

      setRegionData([
        ...fetchedRegionData,
      ])
    }
    
    fetchData();
  }, []);


  return (
    <>
      <Navbar />
      <div className="container">
        <EntireCountry entireCountryData={entireCountryData} />
        {/* <RegionList regionPayload={regionData}/> */}
        {/* <RegionDetail /> */}
      </div>
      <Footer />
  </>
  );
}

export default App;
