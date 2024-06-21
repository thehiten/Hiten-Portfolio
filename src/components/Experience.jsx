import React from "react";
import html from "../../public/html.png";
import css from "../../public/css.jpg";
import javascript from "../../public/javascript.png";
import reactjs from "../../public/reactjs.png";
import mongodb from "../../public/mongodb.jpg";
import express from "../../public/express.png";
import node from "../../public/node.png";

function Experience() {
  const cardItems = [
    {
      id: 1,
      logo: html,
      name: "HTML",
    },
    {
      id: 2,
      logo: css,
      name: "CSS",
    },
    {
      id: 3,
      logo: javascript,
      name: "JavaScript",
    },
    {
      id: 4,
      logo: reactjs,
      name: "ReactJS",
    },
    {
      id: 5,
      logo: mongodb,
      name: "MongoDB",
    },
    {
      id: 6,
      logo: express,
      name: "Express",
    },
    {
      id: 7,
      logo: node,
      name: "Node.js",
    },
  ];

  return (
    <>
      <div
        name="Experience"
        className=" max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
      >
        <h1 className="text-3xl font-bold mb-10 text-center">Experience</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {cardItems.map(function (item) {
            return (
              <div
                key={item.id}
                className=" flex flex-col space-y-2 items-center space-y-4"
              >
                <img
                  src={item.logo}
                  alt={item.name}
                  className="h-20 w-20 rounded-full"
                />
                <span className="text-lg font-medium">{item.name}</span>
              </div>
            );
          })}
        </div>
      </div>
      <hr className=" border-t-4" />
    </>
  );
}

export default Experience;
