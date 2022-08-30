import React from "react";

function Button({ text, className, onClick }) {
  return (
    <>
      <button
        className={`px-6 py-2 bg-mainColor rounded-md hover:shadow-xl hover:shadow-color-[#eee] 
        ease-in duration-200 hover:scale-110 ${className}`}
        onClick={onClick}
      >
        {text}
      </button>
    </>
  );
}

export default Button;
