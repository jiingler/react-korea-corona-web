import RegionTitle from './common/RegionTitle';
import Unit from './common/Unit';
import ItemSm from './common/item_small/Item_sm';
import ItemLg from './common/item_large/Item_lg';

const EntireCountry = ({entireCountryData}) => {

  const {
    updateTime,
    todayCase,
    totalCase,
    nowCase,
    totalRecovered,
    todayRecovered,
    totalDeath,
    todayDeath,
  } = entireCountryData;
  
  return (
    <div className="content text-center px-0">
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
            <ItemSm title={'총 완치자수'} amount={totalRecovered} />
          </div>
          <div>
            <ItemSm title={'오늘 완치자수'} amount={todayRecovered} />
          </div>
        </div>
        <div className="col-6 p-3 bg-light">
          <div className="mb-3">
            <ItemSm title={'총 사망자수'} amount={totalDeath} />
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