import React from "react";
const Breadcrumb = ({ title }) => {
  return (
    <section className="flex items-center mb-4 text-base gap-2">
      <a href="/" className="text-gray-400">خانه </a>
      <span className=" relative top-0.5">/</span>
      <a href="/" className="text-gray-400">همه موارد </a>
      <span className=" relative top-0.5">/</span>
      <p>{title}</p>
    </section>
  );
};

export default Breadcrumb;
