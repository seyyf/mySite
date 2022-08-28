import React from "react";

function Modal({ closeModal }) {
  return (
    <div className="fixed  bg-color-black/[0.3] top-0 left-0 h-[100vh] w-[100vw] flex justify-center items-center">
      <div className="bg-color-white w-[50%] max-w-full p-8 rounded-md">
        <div className="flex justify-end ">
          <button
            onClick={() => closeModal(false)}
            className="hover:bg-color-black/5 px-2 rounded-full text-xl"
          >
            X
          </button>
        </div>
        <p className="mt-4">
          Hi, I'm mejri seyf, full-stack web Developer (MERN STACK), I have 26
          years old and I live in tunisia.
        </p>
      </div>
    </div>
  );
}

export default Modal;
