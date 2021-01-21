import RegionCard from "./common/RegionCard";

const RegionList = ({regionPayload}) => (
  <div className="row g-3">
    <RegionCard regionPayload={regionPayload}/>
  </div>
);

export default RegionList;