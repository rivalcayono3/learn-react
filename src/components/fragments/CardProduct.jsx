import Button from "../elements/Button";

function CardProduct({ children, ...props }) {
  return <div className="flex flex-col justify-between w-full max-w-sm p-7 rounded-xl bg-blue-950">{children}</div>;
}

const Header = ({ image, ...props }) => {
  return (
    <a href="#">
      <img className="mb-6 rounded-xl" src={image} alt="product" />
    </a>
  );
};
const Body = ({ title, children, ...props }) => {
  return (
    <div className="h-full mb-6">
      <h1 className="text-2xl font-semibold tracking-tight text-white ">{title}</h1>
      <p className="h-full text-white text-s">Rp {children}</p>
    </div>
  );
};
const Footer = ({ price, handleAddToCart, id, ...props }) => {
  return (
    <div className="flex items-center justify-between">
      <span className="text-xl font-bold text-white ">Rp {price.toLocaleString("id-ID", { styles: "currency", currency: "IDR" })}</span>
      <Button className="px-4" title={"Add to Cart"} onClick={() => handleAddToCart(id)} />
    </div>
  );
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;
