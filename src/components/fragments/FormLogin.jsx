import { forwardRef, useEffect, useRef, useState } from "react";
import Button from "../elements/Button";
import Input from "../elements/Input";
import { login } from "../../services/auth.service";

const Form = ({ title, ...props }) => {
  const [loginFailed, setLoginFailed] = useState("");

  const handleSumbit = (e) => {
    e.preventDefault();
    // console.log(e.target.email.value);
    // console.log(e.target.password.value);
    // localStorage.setItem("email", e.target.email.value);
    // localStorage.setItem("password", e.target.password.value);

    const data = {
      username: e.target.username.value,
      password: e.target.password.value,
    };
    login(data, (status, res) => {
      if (status) {
        localStorage.setItem("token", res);
        window.location.href = "/products";
      } else {
        setLoginFailed(res.response.data);
        console.log(res.response.data);
      }
    });
  };

  const usernameRef = useRef(null);

  useEffect(() => {
    usernameRef.current.focus();
  });

  return (
    <form onSubmit={handleSumbit}>
      <Input type="text" ref={usernameRef} label="Email" name="username" placeholder="Jhon Doe" />
      <Input type="password" label="Password" name="password" placeholder="******" />
      <Button type="sumbit" className={"w-full"} title={"Login"} />
      {loginFailed && <p className="mt-5 text-center text-red-500">{loginFailed}</p>}
    </form>
  );
};

export default Form;
