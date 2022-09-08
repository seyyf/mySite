import React from "react";

function Input({ type, placeholder, className, id }) {
  return (
    <div>
      <label for={id} className={`text-color-white leading-8 ${className}`}>
        {id}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        id={id}
        className={` border-none indent-2 outline-none rounded-sm w-full py-4 px-[6px] ${className}`}
      />
    </div>
  );
}

export default Input;
