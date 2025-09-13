import React from "react";
import styles from "./box.module.css";
import { IoStatsChart } from "react-icons/io5";
const Box = ({ title, value }) => {
  return (
    <div className={`${styles.box} relative w-[270px] mx-auto rounded-md p-4 border-2 border-panelBrown`}>
      <span>{value}</span>
      <div className="flex justify-between items-center">
        <p>{title}</p>
        <IoStatsChart className="text-4xl text-panelBrown" />
      </div>
    </div>
  );
};

export default Box;
