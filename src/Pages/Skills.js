import { motion } from "framer-motion";
import React, { useState } from "react";
import Button from "../Components/Button";
export default function Skills() {
  const [showItems, SetShowItems] = useState(true);
  return (
    <>
      <motion.div
        className="flex justify-between flex-col h-[80vh] pt-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 1 } }}
      >
        <div className="flex justify-between">
          <Button text="ALL" onClick={(e) => SetShowItems(e)} />

          <Button text="TECHNOLOGIES" />
          <Button text="FRAMEWORKS" />
          <Button text="TOOLS" />
        </div>
        <div>{showItems && <div>aaaaaa</div>}</div>
      </motion.div>
    </>
  );
}
