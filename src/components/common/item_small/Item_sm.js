import ItemAmountSm from './ItemAmount_sm';
import ItemTitleSm from './ItemTitle_sm';

const ItemSm = ({ title, amount }) => (
  <div className="p-3 bg-light">
    <ItemTitleSm title={title} />
    <ItemAmountSm amount={amount} />
  </div>
);

export default ItemSm;