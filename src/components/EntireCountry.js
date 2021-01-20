import RegionTitle from './common/RegionTitle';
import ItemSm from './common/item_small/Item_sm';
import ItemLg from './common/item_large/Item_lg';

const EntireCountry = () => (
  <div className="container text-center p-0">
    <RegionTitle regionName={'전국'} refreshDateTime={'2021/01/20 00:00'} />
    <div className="content row gx-0">
      <div className="col-12 p-3 mb-3 bg-light">
        <ItemLg title={'오늘 신규확진자'} amount={'404'} />
      </div>
      <div className="col-6 p-3 mb-3 bg-light">
        <ItemSm title={'확진자'} amount={'73,518'} />
      </div>
      <div className="col-6 p-3 mb-3 bg-light">
        <ItemSm title={'격리진행중'} amount={'12,038'} />
      </div>
      <div className="col-6 p-3 bg-light">
        <div className="mb-3">
          <ItemSm title={'완치자수'} amount={'60,180'} />
        </div>
        <div>
          <ItemSm title={'오늘 완치자수'} amount={'712'} />
        </div>
      </div>
      <div className="col-6 p-3 bg-light">
        <div className="mb-3">
          <ItemSm title={'사망자수'} amount={'1,300'} />
        </div>
        <div>
          <ItemSm title={'오늘 사망자수'} amount={'17'} />
        </div>
      </div>
    </div>
  </div>
);

export default EntireCountry;