"use client";
import React from "react";
import styles from "./tabs.module.css";
import { useState } from "react";
import Description from "./Description";
import MoreInfoes from "./MoreInfoes";
import Comments from "./Comments";
const Tabs = ({product}) => {
  const [tab, setTab] = useState("description");
  return (
<div data-aos="fade-left" className={`${styles.tabs} relative p-[50px] pb-20 w-full`}>
      <input
        onClick={() => setTab("description")}
        type="radio"
        id="description"
        name="tab-control"
        className=" hidden"
        checked={tab == "description" && "checked"}
      />
      <input
        onClick={() => setTab("moreInfoes")}
        type="radio"
        id="moreInfoes"
        name="tab-control"
        className=" hidden"
        checked={tab == "moreInfoes" && "checked"}
      />
      <input
        onClick={() => setTab("comments")}
        type="radio"
        id="comments"
        name="tab-control"
        className=" hidden"
        checked={tab == "comments" && "checked"}
      />
      <ul className="flex justify-between items-end flex-wrap flex-row list-none pl-0 mb-2.5 w-[390px] mx-auto">
        <li title="Features" className="flex-1 w-[30px] px-2.5 text-center box-border">
          <label htmlFor="description" role="button" className=" transition-all duration-300 ease-in-out text-gray-500 text-base pt-5 relative overflow-hidden truncate block cursor-pointer font-shabnam">
            {" "}
            توضیحات{" "}
          </label>
        </li>
        <li title="Delivery Contents" className="flex-1 w-[30px] px-2.5 text-center box-border">
          <label htmlFor="moreInfoes" role="button" className=" transition-all duration-300 ease-in-out text-gray-500 text-base pt-5 relative overflow-hidden truncate block cursor-pointer font-shabnam">
            {" "}
            اطلاعات بیشتر{" "}
          </label>
        </li>
        <li title="Shipping" className="flex-1 w-[30px] px-2.5 text-center box-border">
          <label htmlFor="comments" role="button" className=" transition-all duration-300 ease-in-out text-gray-500 text-base pt-5 relative overflow-hidden truncate block cursor-pointer font-shabnam">
            {" "}
            نظرات ({product.comments.length}){" "}
          </label>
        </li>
      </ul>

      <div className={`${styles.contents} mt-[30px]`}>
        <section className={styles.tabs_content}>
          <Description />
        </section>
        <section className={styles.tabs_content}>
          <MoreInfoes product={JSON.parse(JSON.stringify(product))} />
        </section>
        <section className={styles.tabs_content}>
          <Comments
          productID={product._id}
          comments={JSON.parse(JSON.stringify(product.comments))} />
        </section>
      </div>
    </div>
  );
};

export default Tabs;
