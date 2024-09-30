/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Form, redirect, useActionData, useNavigation } from "react-router-dom";
import { createOrder } from "../../services/apiRestaurant";
import Button from "../../ui/Button";

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str
  );

const fakeCart = [
  {
    pizzaId: 12,
    name: "Mediterranean",
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: "Vegetale",
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: "Spinach and Mushroom",
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function CreateOrder() {
  const navigation = useNavigation()
  const isSubmitting = navigation.state === 'submitting'
  // const [withPriority, setWithPriority] = useState(false);
  const cart = fakeCart;
  const formErrors = useActionData()
  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-2">Ready to order? Let's go!</h2>

      <Form method="POST">
        <div className="form-input-wrapper">
          <label className="mr-2 sm:basis-40">First Name</label>
          <div className="grow">
            <input
            className="input w-full"
            type="text" name="customer" required />
          </div>
        </div>

        <div className="form-input-wrapper">
          <label className="mr-2 sm:basis-40">Phone number</label>
          <div className="grow">
            <input
            className="input w-full"
            type="tel" name="phone" required />
            {formErrors?.phone && <p className="text-xs pl-2 mt-2 text-red-600">{formErrors.phone}</p>}
          </div>
        </div>

        <div className="form-input-wrapper">
          <label className="mr-2 sm:basis-40">Address</label>
          <div className="grow">
            <input
            className="input w-full"
             type="text" name="address" required />
          </div>
        </div>

        <div className="my-4 flex gap-4 items-center">
          <input
          className="h-6 w-6 accent-yellow-400 mr-2 rounded-full focus:outline-none focus:ring-1 focus:ring-yellow-500 hover:ring-2 hover:ring-yellow-400"
            type="checkbox"
            name="priority"
            id="priority"
            // value={withPriority}
            // onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="priority">Want to yo give your order priority?</label>
        </div>
        <input type="hidden" value={JSON.stringify(cart)} name="cart"/>
        <div className="flex sm:justify-center">
          <Button
          >
            {isSubmitting ? 'Placing order...' : 'Order now'}
           </Button>
        </div>
      </Form>
    </div>
  );
}

export const actions = async({request}) => {
  const formData = await request.formData()
  const data = Object.fromEntries(formData)
  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === 'on'
  }
  const errors = {}
  if(!isValidPhone(order.phone)) {
    errors.phone = "Please give us valid contact number to contact you"
  }
  if (Object.keys(errors).length>0) {
    return errors
  }
  const newOrder = await createOrder(order)
  return redirect(`/order/${newOrder.id}`)
}

export default CreateOrder;
