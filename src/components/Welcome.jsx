import React from "react";
import Card from "./Card.jsx";

const Welcome = () => {
  const cardsData = [
    {
      iconClass: "fa-regular fa-folder",
      title: "Fresh new layout",
      description:
        "With Bootstrap 5, we've created a fresh new layout for this template!",
    },
    {
      iconClass: "fa-solid fa-cloud-arrow-down",
      title: "Free to download",
      description:
        "As always, Start Bootstrap has a powerful collectin of free templates.",
    },
    {
      iconClass: "fa-solid fa-pager",
      title: "Jumbotron hero header",
      description:
        "The heroic part of this template is the jumbotron hero header!",
    },
    {
      iconClass: "fa-solid fa-box-open",
      title: "Feature boxes",
      description:
        "We've created some custom feature boxes using Bootstrap icons!",
    },
    {
      iconClass: "fa-solid fa-code",
      title: "Simple clean code",
      description:
        "We keep our dependencies up to date and squash bugs as they come!",
    },
    {
      iconClass: "fa-regular fa-circle-check",
      title: "A name you trust",
      description:
        "Start Bootstrap has been the leader in free Bootstrap templates since 2013!",
    },
  ];
  return (
    <div className="container mx-auto my-8">
      <div className="text-center p-5 md:p-5 xl:p-24 mx-10 xl:mx-28 bg-gray-100  rounded-lg">
        <h2 className="text-5xl text-balance font-bold">A warm welcome!</h2>
        <p className="text-2xl my-5">
          Bootstrap utility classes are used to create this jumbotron since the
          old component has been removed from the framework. Why create custom
          CSS when you can use utilities?
        </p>
        <button className="px-5 py-3  bg-sky-600 text-white text-xl rounded-lg">
          Call to action
        </button>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 mx-28 gap-14 mt-8">
        {cardsData.map((card, index) => (
          <Card
            key={index}
            iconClass={card.iconClass}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Welcome;
