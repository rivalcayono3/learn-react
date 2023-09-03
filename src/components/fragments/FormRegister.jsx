import Button from "../elements/Button";
import Input from "../elements/Input";
import FormLogin from "../fragments/FormLogin";

function Form({ title, ...props }) {
  return (
    <form action="">
      <Input type="text" label="Fullname" name="fullname" placeholder="Insert your name" />
      <Input type="email" label="Email" name="email" placeholder="example@gmail.com" />
      <Input type="password" label="Password" name="password" placeholder="******" />
      <Input type="password" label="Confirm Password" name="password" placeholder="******" />
      <Button className={"w-full"} title={"Register"} />
    </form>
  );
}

export default Form;
