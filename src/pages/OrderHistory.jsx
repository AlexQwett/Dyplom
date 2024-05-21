import React, { useEffect, useState } from "react";
import { SectionTitle } from "../components";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { nanoid } from "nanoid";

const OrderHistory = () => {
  // cancelled, in progress, delivered
  const loginState = useSelector((state) => state.auth.isLoggedIn);
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);

  const getOrderHistory = async () => {
    try {
      // saljemo get(default) request
      const response = await axios.get("http://localhost:8080/orders");
      const data = response.data;
      setOrders(
        data.filter((order) => order.userId === localStorage.getItem("id"))
      );
    } catch (error) {
      toast.error(error.response);
    }
  };

  useEffect(() => {
    if (!loginState) {
      toast.error("You must be logged in to access this page");
      navigate("/");
    } else {
      getOrderHistory();
    }
  }, []);

  return (
    <>
      <div className="order-history-main max-w-7xl mx-auto mt-10 px-20 max-md:px-10">
        {orders?.length === 0 ? (
          <div className="text-center">
            <h1 className="text-4xl text-accent-content">
              Історія замовлень порожні
            </h1>
            <Link
              to="/shop"
              className="btn bg-blue-600 hover:bg-blue-500 text-white mt-10"
            >
              Зробити замовлення
            </Link>
          </div>
        ) : (
          orders.map((order) => {
            return (
              <div
                key={nanoid()}
                className="collapse collapse-plus bg-blue-200 mb-2"
              >
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium text-accent-content">
                  Замовлення {order.id} - {order.orderStatus}
                </div>
                <div className="collapse-content">
                  <div className="overflow-x-auto">
                    <table className="table">
                      {/* head */}
                      <thead>
                        <tr className="text-accent-content bg-blue-200">
                          <th>Замовлення</th>
                          <th>Фото</th>
                          <th>Номенклатура</th>
                          <th>Фасування</th>
                          <th>Кількість</th>
                          <th>Ціна</th>
                        </tr>
                      </thead>
                      <tbody>
                        {order.cartItems.map((product, counter) => (
                          <tr className="text-accent-content" key={nanoid()}>
                            <th>{counter + 1}</th>
                            <th><img src={`https://${product.image}`} alt="" className="w-10" /></th>
                            <td>{product.title}</td>
                            <td>{product.selectedSize}</td>
                            <td>{product.amount}</td>
                            <td>{(product.price * product.amount).toFixed(2)} грн.</td>
                          </tr>
                        ))}
                        <tr>
                          <td colSpan="6" className="text-center">
                            <h4 className="text-md text-accent-content">
                              Всього: { Math.round(order?.subtotal) } грн.
                            </h4>
                          </td>
                        </tr>
                        <tr>
                          <td colSpan="6" className="text-center">
                            <h3 className="text-md text-accent-content">
                              Доставка: $50
                            </h3>
                          </td>
                        </tr>
                        <tr>
                          <td colSpan="6" className="text-center">
                            <h3 className="text-md text-accent-content">
                              ПДВ 20%: { Math.round(order?.subtotal / 5) } грн.
                            </h3>
                          </td>
                        </tr>
                        <tr>
                          <td colSpan="6" className="text-center">
                            <h3 className="text-xl text-accent-content">
                              - Всього: { Math.round(order?.subtotal + 50 + (order?.subtotal / 5)) } грн. -
                            </h3>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </>
  );
};

export default OrderHistory;
