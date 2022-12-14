import React from "react";

function Input({ type, placeholder, className, id }) {
  return (
    <div>
      <label htmlFor={id} className={`text-color-white leading-8 ${className}`}>
        {id}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        id={id}
        className={`outline-none indent-2 w-full py-4 px-[6px] border-2 border-color-white rounded-md p-2 bg-color-transparent text-color-white ${className}`}
      />
    </div>
  );
}

export default Input;
