import { Link } from "react-router-dom";

function CartOverview() {
  return (
    <div 
    className="bg-yellow-400 uppercase p-6 sm:p-8 flex items-center justify-between">
      <p className="text-neutral-950 font-semibold space-x-4 sm:space-x-8">
        <span>23 pizzas</span>
        <span>$23.45</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
