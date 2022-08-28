import { useState } from "react";
import image from "../Assets/Groupe 3.png";
import Button from "../Components/Button";
import Modal from "../Components/Modal";
function AboutMe() {
  const [modal, setModal] = useState(false);
  const content = {
    title: "Hi There !",
    phrase:
      "My Name is Seyf Mejri, I'm a Full-stack web Developer & Web Designer",
  };
  return (
    <div className="flex h-[80vh] justify-between">
      <div className=" flex justify-center flex-col w-[70%]">
        <h1 className="text-6xl text-mainColor">{content.title}</h1>
        <p className="mt-6 text-4xl text-color-white">{content.phrase}</p>
        <div>
          <Button
            text="Read More"
            className="mt-8"
            onClick={() => {
              setModal(true);
            }}
          />
          {modal && <Modal closeModal={setModal} />}
        </div>
      </div>
      <div className="flex justify-end">
        <img src={image} alt="" className="w-[75%] object-contain" />
      </div>
    </div>
  );
}

export default AboutMe;
