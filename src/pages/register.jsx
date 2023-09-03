import Auth from "../components/layout/Auth";
import FormRegister from "../components/fragments/FormRegister";

function RegisterPage() {
  return (
    <Auth title={"Register"} type={"register"}>
      <FormRegister />
    </Auth>
  );
}

export default RegisterPage;
