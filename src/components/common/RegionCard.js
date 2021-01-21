import ItemAmountSm from "./item_small/ItemAmount_sm";

const RegionCard = ({regionData}) => {
  const {
    countryName,
    death,
    newCase,
    newCcase,
    newFcase,
    percentage,
    recovered,
    totalCase,
  } = regionData;
  return (
    <div className="col-lg-2 col-md-3 col-4">
      <button className="btn w-100 py-4 bg-light text-center">
        <h3 className="region-name">{countryName}</h3>
      </button>
    </div>
  );
}

export default RegionCard;