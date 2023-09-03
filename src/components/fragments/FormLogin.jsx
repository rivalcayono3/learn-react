import Button from "../elements/Button";
import Input from "../elements/Input";

function Form({ title, ...props }) {
  const handleSumbit = (e) => {
    e.preventDefault();
    // console.log(e.target.email.value);
    // console.log(e.target.password.value);
    localStorage.setItem("email", e.target.email.value);
    localStorage.setItem("password", e.target.password.value);
    window.location.href = "/products";
  };

  return (
    <form onSubmit={handleSumbit}>
      <Input type="email" label="Email" name="email" placeholder="example@gmail.com" />
      <Input type="password" label="Password" name="password" placeholder="******" />
      <Button type="sumbit" className={"w-full"} title={"Login"} />
    </form>
  );
}

export default Form;
