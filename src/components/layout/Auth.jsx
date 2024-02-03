import { useContext } from "react";
import { Link } from "react-router-dom";
import { DarkMode } from "../../context/DarkMode";

export default function Auth({ title, children, type, ...props }) {
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode);
  console.log(isDarkMode);
  return (
    <div className={`flex items-center justify-center h-screen ${isDarkMode && "bg-slate-900"}`}>
      <div className="w-full max-w-xs">
        <div className="mb-6">
          <button className="absolute p-2 text-white bg-blue-600 rounded right-2 top-2" onClick={() => setIsDarkMode(!isDarkMode)}>
            {isDarkMode ? "Light" : "Dark"}
          </button>
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
