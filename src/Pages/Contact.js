import { motion } from "framer-motion";
import React from "react";
import Input from "../Components/Input";
function Contact() {
  return (
    <motion.div className="flex gap-9 justify-between h-[80vh]">
      <div className="flex flex-col gap-7 w-2/3">
        <Input type="text" id="Name" />
        <Input type="text" id="Phone Number" />
        <Input type="text" id="Email" />
      </div>
      <div className="w-full">
        <label for="" className="text-color-white leading-8">
          Your message
        </label>
        <textarea className="indent-2 w-full  rounded-sm" />
      </div>
    </motion.div>
  );
}

export default Contact;
