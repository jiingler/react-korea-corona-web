import ItemAmountSm from "./item_small/ItemAmount_sm";

const RegionCard = ({regionPayload}) => {
  return (
    <div className="col-lg-2 col-md-3 col-4">
      <button className="btn w-100 py-4 bg-light text-center">
        <h3 className="region-name">서울</h3>
      </button>
    </div>
  );
}

export default RegionCard;