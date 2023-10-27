import { motion } from "framer-motion";
import React from "react";
import Input from "../Components/Input";
import Button from "../Components/Button";
function Contact() {
  return (
    <motion.div>
      <div className="sm:flex gap-9 justify-between">
        <div className="flex flex-col gap-[0.75rem] sm:w-2/3">
          <Input type="text" id="Name" />
          <Input type="number" id="Phone Number" />
          <Input type="email" id="Email" />
        </div>
        <div className="w-full h-2/3 sm:h-full">
          <label htmlFor="" className="text-color-white leading-8">
            Your message
          </label>
          <textarea className="border-2 border-color-white rounded-md p-2 indent-2 w-full h-full outline-none bg-color-transparent text-color-white sm:h-[17rem]" />
        </div>
      </div>
      <div className="w-full flex justify-end">
        <Button text="envoyer" className="uppercase" />
      </div>
    </motion.div>
  );
}

export default Contact;
