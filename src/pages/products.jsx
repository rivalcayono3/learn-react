import { Fragment, useEffect, useState } from "react";
import CardProduct from "../components/fragments/CardProduct";
import Button from "../components/elements/Button";
import { getProducts } from "../services/product.services";
import { useLogin } from "../hooks/useLogin";

function ProductsPage() {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [products, setProducts] = useState([]);
  const username = useLogin();

  // const emailName = localStorage.getItem("email");

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")) || []);
  }, []);

  useEffect(() => {
    getProducts((data) => {
      setProducts(data);
      console.log(data);
      // console.log(products);
    });
  }, []);
  console.log(products);

  useEffect(() => {
    if (products.length > 0 && cart.length > 0) {
      const sumPrice = cart.reduce((acc, item) => {
        const product = products.find((product) => product.id === item.id);
        return acc + product.price * item.qty;
      }, 0);
      setTotalPrice(sumPrice);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart, products]);

  const handleAddCart = (id) => {
    const productItem = products.find((product) => product.id === id);

    if (cart.find((item) => item.id === id)) {
      setCart(cart.map((item) => (item.id === id ? { ...item, qty: item.qty + 1 } : item)));
    } else {
      setCart([...cart, { id, qty: 1, title: productItem.title, price: productItem.price }]);
    }
  };

  return (
    <Fragment>
      <nav className="flex items-center justify-end px-6 py-3 bg-blue-500">
        <p className="font-semibold text-white ">{username}</p>
        <Button className="px-3 ml-5 bg-black" title={"Logout"} onClick={handleLogout} />
      </nav>
      <div className="flex justify-center py-6">
        <div className="flex flex-wrap justify-center w-4/6 gap-6">
          {products.length > 0 &&
            products.map((product) => (
              <CardProduct key={product.id}>
                <CardProduct.Header image={product.image} id={product.id} />
                <CardProduct.Body title={product.title}>{product.description}</CardProduct.Body>
                <CardProduct.Footer price={product.price} id={product.id} handleAddToCart={handleAddCart} />
              </CardProduct>
            ))}
        </div>
        <div className="w-2/6">
          <h1 className="ml-5 text-3xl font-bold text-blue-600">CART</h1>
          <table className="text-left border-separate table-auto border-spacing-x-5">
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
                      <td>{(productItem.price * item.qty).toLocaleString("id-ID", { style: "currency", currency: "IDR" })}</td>
                    </tr>
                  );
                })}
              <tr>
                <td colSpan={3}>
                  <b>Total Price</b>
                </td>
                <td>
                  <b>{totalPrice.toLocaleString("id-ID", { style: "currency", currency: "IDR" })}</b>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Fragment>
  );
}

export default ProductsPage;
