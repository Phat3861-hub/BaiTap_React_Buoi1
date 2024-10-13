import React from "react";

const Card = ({ iconClass, title, description }) => {
  return (
    <div className="bg-gray-100 rounded-lg p-14 text-center flex justify-center flex-col items-center relative">
      <div className="w-16 h-16 bg-sky-600 flex justify-center flex-col items-center rounded-lg absolute  bottom-3/4 text-white text-4xl">
        <i className={iconClass}></i>
      </div>
      <h3 className="text-2xl font-bold">{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Card;
