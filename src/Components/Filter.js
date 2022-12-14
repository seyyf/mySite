import React, { useEffect } from "react";
import Button from "./Button";

function Filter({ showItems, setFiltered, activeGenre, setActiveGenre }) {
  useEffect(() => {
    if (activeGenre === 0) {
      setFiltered(showItems);
      return;
    }
    const filtered = showItems.filter((item) => item.genre == activeGenre);
    console.log(activeGenre);
    setFiltered(filtered);
  }, [activeGenre]);

  return (
    <>
      <Button onClick={() => setActiveGenre(0)} text="ALL" />
      <Button onClick={() => setActiveGenre(1)} text="TECHNOLOGIES" />
      <Button onClick={() => setActiveGenre(2)} text="FRAMEWORKS" />
      <Button onClick={() => setActiveGenre(3)} text="OTHERS" />
    </>
  );
}

export default Filter;
