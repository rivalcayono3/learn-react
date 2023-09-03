import Auth from "../components/layout/Auth";
import FormLogin from "../components/fragments/FormLogin";

function LoginPage() {
  return (
    <Auth title={"Login"} type={"login"}>
      <FormLogin />
    </Auth>
  );
}

export default LoginPage;
