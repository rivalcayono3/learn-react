import { Link } from "react-router-dom";

export default function Auth({ title, children, type, ...props }) {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-full max-w-xs">
        <div className="mb-6">
          <h1 className="mb-2 text-4xl font-bold text-blue-600">{title}</h1>
          <p className="font-semibold text-slate-700 ">Welcome, Please enter your details</p>
        </div>
        {children}
        <div className="mt-4 text-base font-medium text-center text-slate-800">
          {type === "login" ? (
            <p>
              Don't have an account?{" "}
              <Link to={"/register"} className="font-bold text-blue-600 underline">
                {" "}
                Register
              </Link>
            </p>
          ) : (
            <p>
              Already have an account?{" "}
              <Link to={"/login"} className="font-bold text-blue-600 underline">
                {" "}
                Login
              </Link>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
