/* eslint-disable no-unused-vars */
// Test ID: IIDSAT

import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from "../../utils/helpers";
import { getOrder } from "../../services/apiRestaurant";
import { useLoaderData } from "react-router-dom";
import OrderItem from "./OrderItem";


function Order() {
  // Everyone can search for all orders, so for privacy reasons we're gonna gonna exclude names or address, these are only for the restaurant staff
  const order = useLoaderData()
  const {
    id,
    status,
    priority,
    priorityPrice,
    orderPrice,
    estimatedDelivery,
    cart,
  } = order;
  const deliveryIn = calcMinutesLeft(estimatedDelivery);

  return (
    <div className="p-6 space-y-8">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h2 className="text-xl font-semibold">Order #{id} status</h2>

        <div className="space-x-2">
          {priority && <span className="bg-red-500 rounded-full px-4 py-2 text-sm font-semibold uppercase text-slate-50 tracking-wide">Priority</span>}
          <span className="bg-green-500 rounded-full px-4 py-2 text-sm font-semibold uppercase text-slate-50 tracking-wide">{status} order</span>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-2 bg-stone-300 p-4 rounded-lg">
        <p className="font-medium">
          {deliveryIn >= 0
            ? `Only ${calcMinutesLeft(estimatedDelivery)} minutes left 😃`
            : "Order should have arrived"}
        </p>
        <p className="text-xs text-stone-700">(Estimated delivery: {formatDate(estimatedDelivery)})</p>
      </div>

      <ul className="divide-y divide-stone-200">
        {cart.map(item=> <OrderItem item={item} key={item.pizzaID}/>)}
      </ul>

      <div className="space-y-2 bg-stone-200 p-4 rounded-lg">
        <p className="text-sm font-medium text-stone-500">Price pizza: {formatCurrency(orderPrice)}</p>
        {priority && <p className="text-sm font-medium text-stone-500">Price priority: {formatCurrency(priorityPrice)}</p>}
        <p className="text-lg font-bold text-stone-700">To pay on delivery: {formatCurrency(orderPrice + priorityPrice)}</p>
      </div>
    </div>
  );
}

export const loader = async({params}) => {
  const order = await getOrder(params.orderId)
  return order
}

export default Order;
