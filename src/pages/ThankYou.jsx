import React, { useEffect } from "react";
import { SectionTitle } from "../components";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { toast } from "react-toastify";
import { store } from "../store";
import { calculateTotals, clearCart } from "../features/cart/cartSlice";

const ThankYou = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const loginState = useSelector((state) => state.auth.isLoggedIn);
  const { total } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const saveToOrderHistory = async () => {
    try {
      const response = await axios.post("http://localhost:8080/orders", {
        userId: localStorage.getItem("id"),
        orderStatus: "in progress",
        subtotal: total,
        cartItems: cartItems,
      });
    } catch (err) {
      toast.error(err.response);
    }
  };

  if (cartItems.length > 0) {
    saveToOrderHistory();
    store.dispatch(clearCart());
    store.dispatch(calculateTotals());
    toast.success("Order completed");
  }

  useEffect(() => {
    if (!loginState) {
      toast.error("You must be logged in to access this page");
      navigate("/");
    }
  }, []);


  return (
    <>
      <div className="thankyou-content text-center text-accent-content px-10 max-w-7xl mx-auto">
        <h2 className="text-6xl max-sm:text-4xl">
          Дякуємо за замовлення
        </h2>

        <ul className="text-xl mt-5 text-blue-500 max-sm:text-lg">
          <li className="hover:text-blue-600 cursor-pointer">
            <Link to="/order-history">&rarr; Переглянути історію замовлень &larr;</Link>
          </li>
          
          <li className="hover:text-blue-600 cursor-pointer">
            &rarr; Слідкуйте за нами в соціальних мережах &larr;
          </li>
        </ul>

        <h4 className="text-xl mt-5 max-sm:text-lg">
          Ще раз дякуємо за покупку!
        </h4>
        <h4 className="text-xl max-sm:text-lg">
          З повагою, Ascon Zoo Trade
        </h4>
      </div>
    </>
  );
};

export default ThankYou;
