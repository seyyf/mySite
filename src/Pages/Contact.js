import { motion } from "framer-motion";
import React from "react";
import Input from "../Components/Input";
function Contact() {
  return (
    <motion.div className="flex gap-9 justify-between h-[80vh]">
      <div className="flex flex-col gap-[0.75rem] w-2/3">
        <Input type="text" id="Name" />
        <Input type="number" id="Phone Number" />
        <Input type="email" id="Email" />
      </div>
      <div className="w-full h-1/2">
        <label htmlFor="" className="text-color-white leading-8">
          Your message
        </label>
        <textarea className="border-2 border-color-white rounded-md p-2 indent-2 w-full h-full outline-none bg-color-transparent text-color-white" />
      </div>
    </motion.div>
  );
}

export default Contact;
