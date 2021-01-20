import ItemAmountLg from './ItemAmount_lg';
import ItemTitleLg from './ItemTitle_lg';

const ItemLg = ({ title, amount }) => (
  <>
    <ItemTitleLg title={title} />
    <ItemAmountLg amount={amount} />
  </>
);

export default ItemLg;