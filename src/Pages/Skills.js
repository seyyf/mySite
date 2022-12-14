import Axios from "axios";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import Filter from "../Components/Filter";
import Skill from "../Components/Skill";

export default function Skills() {
  const [showItems, setShowItems] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeGenre, setActiveGenre] = useState(0);
  const getSkill = () => {
    Axios.get("http://localhost:4000/get-skills")
      .then((result) => {
        setShowItems(result.data);
        setFiltered(result.data);
      })
      .catch((error) => {
        console.log(error, "erreur");
      });
  };

  useEffect(() => {
    getSkill();
  }, []);
  return (
    <>
      <motion.div
        className="flex justify-between flex-col h-full pt-10 gap-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 1 } }}
      >
        <div className="flex justify-between">
          <Filter
            showItems={showItems}
            setFiltered={setFiltered}
            activeGenre={activeGenre}
            setActiveGenre={setActiveGenre}
          />
        </div>
        <div className="skill">
          {filtered.map((item, key) => {
            return <Skill key={key} item={item} />;
          })}
        </div>
      </motion.div>
    </>
  );
}
