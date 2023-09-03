import React from "react";

function Button({ title, className, type = "button", onClick, ...props }) {
  return (
    <button type={type} onClick={onClick} className={`font-medium py-2 text-white bg-blue-600 rounded-md ${className}`}>
      {title}
    </button>
  );
}

export default Button;
