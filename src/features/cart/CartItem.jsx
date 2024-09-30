/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;

  return (
    <li className="py-3">
      <p className="mb-1 font-semibold">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between grow">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
        <Button>Delete</Button>
      </div>
    </li>
  );
}

export default CartItem;
