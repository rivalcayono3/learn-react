import { Fragment, useContext, useEffect, useState } from "react";
import CardProduct from "../components/fragments/CardProduct";
import { getProducts } from "../services/product.services";
import TableCart from "../components/fragments/TableCart";
import Navbar from "../components/layout/Navbar";
import { useLogin } from "../hooks/useLogin";
import { DarkMode } from "../context/DarkMode";

function ProductsPage() {
  const [products, setProducts] = useState([]);
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode);
  useLogin();

  useEffect(() => {
    getProducts((data) => {
      setProducts(data);
      console.log(data);
    });
  }, []);

  return (
    <Fragment>
      <Navbar />
      <div className={`flex justify-center py-6 ${isDarkMode && "bg-slate-900"}`}>
        <div className="flex flex-wrap justify-center w-4/6 gap-6">
          {products.length > 0 &&
            products.map((product) => (
              <CardProduct key={product.id}>
                <CardProduct.Header image={product.image} id={product.id} />
                <CardProduct.Body title={product.title}>{product.description}</CardProduct.Body>
                <CardProduct.Footer price={product.price} id={product.id} />
              </CardProduct>
            ))}
        </div>
        <div className="w-2/6">
          <h1 className="ml-5 text-3xl font-bold text-blue-600">CART</h1>
          <TableCart products={products} />
        </div>
      </div>
    </Fragment>
  );
}

export default ProductsPage;
