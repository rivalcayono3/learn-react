import { Link } from "react-router-dom";
import Button from "../elements/Button";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slices/cartSlice";

function CardProduct({ children, ...props }) {
  return <div className="flex flex-col justify-between w-full max-w-sm p-7 rounded-xl bg-blue-950">{children}</div>;
}

const Header = ({ image, id, ...props }) => {
  return (
    <Link to={`/product/${id}`}>
      <img className="object-cover w-full mb-6 rounded-xl h-60" src={image} alt="product" />
    </Link>
  );
};
const Body = ({ title, children, ...props }) => {
  return (
    <div className="h-full mb-6">
      <h1 className="text-2xl font-semibold tracking-tight text-white ">{title.substring(0, 20)}...</h1>
      <p className="h-full text-white text-s">{children.substring(0, 100)}</p>
    </div>
  );
};
const Footer = ({ price, id, ...props }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center justify-between">
      <span className="text-xl font-bold text-white ">Rp {price.toLocaleString("id-ID", { styles: "currency", currency: "IDR" })}</span>
      <Button className="px-4" title={"Add to Cart"} onClick={() => dispatch(addToCart({ id, qty: 1 }))} />
    </div>
  );
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;
