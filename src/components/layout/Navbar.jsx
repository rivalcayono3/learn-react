import React, { useContext, useEffect, useState } from "react";
import { useLogin } from "../../hooks/useLogin";
import Button from "../elements/Button";
import { useSelector } from "react-redux";
import { DarkMode } from "../../context/DarkMode";
import { useTotalPrice } from "../../context/TotalPriceContext";

const Navbar = () => {
  const username = useLogin();
  const [totalCart, setTotalCart] = useState(0);
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode);
  const cart = useSelector((state) => state.cart.data);
  const { total } = useTotalPrice();
  // console.log(cart);

  useEffect(() => {
    const sum = cart.reduce((acc, item) => {
      return acc + item.qty;
    }, 0);
    setTotalCart(sum);
  }, [cart]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };
  return (
    <nav className={"flex items-center justify-end px-6 py-3 bg-blue-500"}>
      <p className="font-semibold text-white ">{username}</p>
      <Button className="px-3 ml-5 bg-black" title={"Logout"} onClick={handleLogout} />
      <div className="flex items-center p-2 ml-5 mr-5 text-white bg-blue-700 rounded-md">
        Items: {totalCart} | Total Price: ${total}
      </div>
      <Button className={`p-2 text-white bg-blue-600 rounded right-2 top-2 `} title={isDarkMode ? "Light" : "Dark"} onClick={() => setIsDarkMode(!isDarkMode)} />
    </nav>
  );
};

export default Navbar;
