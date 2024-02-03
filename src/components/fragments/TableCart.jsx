import { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { DarkMode } from "../../context/DarkMode";
import { useTotalPrice, useTotalPriceDispatch } from "../../context/TotalPriceContext";

const TableCart = ({ products, ...props }) => {
  const cart = useSelector((state) => state.cart.data);
  // const [totalPrice, setTotalPrice] = useState(0);
  const { isDarkMode } = useContext(DarkMode);
  const dispatch = useTotalPriceDispatch();
  const { total } = useTotalPrice();

  useEffect(() => {
    if (products.length > 0 && cart.length > 0) {
      const sumPrice = cart.reduce((acc, item) => {
        const product = products.find((product) => product.id === item.id);
        return acc + product.price * item.qty;
      }, 0);
      dispatch({
        type: "UPDATE",
        payload: {
          total: sumPrice,
        },
      });
      // setTotalPrice(sumPrice);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart, products]);

  return (
    <table className={`text-left border-separate table-auto border-spacing-x-5 ${isDarkMode && "text-white"}`}>
      <thead>
        <tr>
          <th>Product</th>
          <th>Price</th>
          <th>Qty</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        {products.length > 0 &&
          cart.map((item) => {
            const productItem = products.find((product) => product.id === item.id);
            return (
              <tr key={item.id}>
                <td>{productItem.title.substring(0, 20)}...</td>
                <td>{productItem.price.toLocaleString("id-ID", { style: "currency", currency: "IDR" })}</td>
                <td>{item.qty}</td>
                <td>{(productItem.price * item.qty).toLocaleString("en-US", { style: "currency", currency: "USD" })}</td>
              </tr>
            );
          })}
        <tr>
          <td colSpan={3}>
            <b>Total Price</b>
          </td>
          <td>
            <b>{total.toLocaleString("en-US", { style: "currency", currency: "USD" })}</b>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default TableCart;
