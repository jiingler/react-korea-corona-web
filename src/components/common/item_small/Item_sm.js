import ItemAmountSm from './ItemAmount_sm';
import ItemTitleSm from './ItemTitle_sm';

const ItemSm = ({ title, amount }) => (
  <>
    <ItemTitleSm title={title} />
    <ItemAmountSm amount={amount} />
  </>
);

export default ItemSm;