"use client"
import React from "react";
import { motion } from "framer-motion";

const variants = {
  default: { width: 0 },
  active: { width: "calc(100% - 0.75rem)" },
};

const TabButton = ({ active, selectTab, children }) => {
  const buttonClasses = active ? "bg-gradient-to-br from-white to-pink-800" : "bg-gradient-to-br from-blue-500 via-purple-500";

  return (
    <button onClick={selectTab}>
      <p className={`mr-5 px-1 py-1 font-semibold w-full sm:w-fit rounded-full hover:bg-slate-400 text-white mt-3 ${buttonClasses}`}>
      <span className='block bg-[#121212] hover:bg-[#ADB6BE] hover:text-black rounded-full px-5 py-2'>{children}</span>
      </p>
      <motion.div
        animate={active ? "active" : "default"}
        variants={variants}
        className="h-1 bg-primary-500 mt-2 mr-3"
      ></motion.div>
    </button>
  );
};

export default TabButton;