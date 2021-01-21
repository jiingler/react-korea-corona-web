import {useState, useEffect} from 'react';

import RegionTitle from './common/RegionTitle';
import Unit from './common/Unit';
import ItemSm from './common/item_small/Item_sm';
import ItemLg from './common/item_large/Item_lg';

import {fetchJson} from '../api/ApiUtils';

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

const EntireCountry = () => {
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

  const {
    updateTime,
    todayCase,
    totalCase,
    nowCase,
    totalRecovered,
    todayRecovered,
    totalDeath,
    todayDeath,
  } = entireCountryData

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
    <div className="entire-country container text-center px-0">
      <RegionTitle regionName={'전국'} refreshDateTime={updateTime} />
      {/* <Unit /> */}
      <div className="row gx-0">
        <div className="col-12 p-3 mb-3 bg-light">
          <ItemLg title={'신규확진자'} amount={todayCase} />
        </div>
        <div className="col-6 p-3 mb-3 bg-light">
          <ItemSm title={'확진자'} amount={totalCase} />
        </div>
        <div className="col-6 p-3 mb-3 bg-light">
          <ItemSm title={'격리진행중'} amount={nowCase} />
        </div>
        <div className="col-6 p-3 bg-light">
          <div className="mb-3">
            <ItemSm title={'완치자수'} amount={totalRecovered} />
          </div>
          <div>
            <ItemSm title={'오늘 완치자수'} amount={todayRecovered} />
          </div>
        </div>
        <div className="col-6 p-3 bg-light">
          <div className="mb-3">
            <ItemSm title={'사망자수'} amount={totalDeath} />
          </div>
          <div>
            <ItemSm title={'오늘 사망자수'} amount={todayDeath} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default EntireCountry;