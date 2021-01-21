import RegionCard from "./common/RegionCard";

const RegionList = ({regionPayload}) => {
  console.log(regionPayload)
  return (
    <div className="content row g-3">
    {regionPayload.map(regionData => {
      return (
        <RegionCard regionData={regionData}/>
      )
    })}
    </div>
  );
}

export default RegionList;