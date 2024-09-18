import { Link } from "react-router-dom";

function CartOverview() {
  return (
    <div className="bg-yellow-300">
      <p className="text-neutral-950">
        <span>23 pizzas</span>
        <p>$23.45</p>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
