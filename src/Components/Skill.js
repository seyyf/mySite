import { motion } from "framer-motion";
import React from "react";

function Skill({ item }) {
  return (
    <motion.div layout className="text-color-white">
      <div>
        <img src={item.img} alt="" width="120" />
      </div>
    </motion.div>
  );
}

export default Skill;
