import { Fragment, useEffect, useState } from "react";
import CardProduct from "../components/fragments/CardProduct";
import Button from "../components/elements/Button";

const products = [
  {
    id: 1,
    title: "Sepatu Baru",
    price: 1000000,
    image: "/assets/shoes.jpg",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci deserunt esse doloribus itaque assumenda nulla hic obcaecati nisi dolorem illum.",
  },
  {
    id: 2,
    title: "Sepatu Lama",
    price: 2000000,
    image: "https://img.freepik.com/free-photo/fashion-shoes-sneakers_1203-7529.jpg?w=1380&t=st=1693463221~exp=1693463821~hmac=178ef777e096f690783890b510401ffb0ac03e405b683f76d553a979afb7e90a",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci deserunt esse doloribus ",
  },
  {
    id: 3,
    title: "Sepatu tahun 2000",
    price: 1500000,
    image: "https://img.freepik.com/free-photo/fashion-shoes-sneakers_1203-7529.jpg?w=1380&t=st=1693463221~exp=1693463821~hmac=178ef777e096f690783890b510401ffb0ac03e405b683f76d553a979afb7e90a",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci deserunt esse doloribus ",
  },
];

function ProductsPage() {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const emailName = localStorage.getItem("email");

  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/login";
  };

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")) || []);
  }, []);

  useEffect(() => {
    if (cart.length > 0) {
      const sumPrice = cart.reduce((acc, item) => {
        const product = products.find((product) => product.id === item.id);
        return acc + product.price * item.qty;
      }, 0);
      setTotalPrice(sumPrice);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

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
        <p className="font-semibold text-white ">{emailName}</p>
        <Button className="px-3 ml-5 bg-black" title={"Logout"} onClick={handleLogout} />
      </nav>
      <div className="flex justify-center py-6">
        <div className="flex flex-wrap justify-center w-4/6 gap-6">
          {products.map((product) => (
            <CardProduct key={product.id}>
              <CardProduct.Header image={product.image} />
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
              {cart.map((item) => {
                const productItem = products.find((product) => product.id === item.id);
                return (
                  <tr key={item.id}>
                    <td>{productItem.title}</td>
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
          <video controls width="640" height="360">
            <source src="/src/components/videomkv/360_VR.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </Fragment>
  );
}

export default ProductsPage;
