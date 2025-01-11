"use client";
import { useState } from "react";

export default function useCollapse() {
  const [toggle, setToggle] = useState(true);
  const [activeIndex, setActiveIndex] = useState(undefined);

  const handleSetIndex = (index) => {
    if (activeIndex !== index) {
      setActiveIndex(index);
      setToggle(!toggle);
    } else {
      setActiveIndex(undefined);
      setToggle(!toggle);
    }
  };

  return {
    activeIndex,
    handleSetIndex,
  };
}
