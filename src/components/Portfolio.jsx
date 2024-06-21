import React from "react";
import node from "../../public/node.png";
import reactjs from "../../public/reactjs.png";
import javascript from "../../public/javascript.png";
import mongodb from "../../public/mongodb.jpg";

function Portfolio() {
  const cardItem = [
    {
      id: 1,
      logo: node,
      name: "MoneyMap",
      p: `Engineered a dynamic financial tracker web application employing HTML, CSS, and React.js
      contributing to a substantial 15% upswing in users savings rates`,
      sourceCodeLink: "https://github.com/thehiten/MoneyMap"
    },
    {
      id: 2,
      logo: reactjs,
      name: "voteVerse",
      p: `Architected a sophisticated restaurant management system
      leveraging Node.js, MongoDB, and Express.js, delivering a remarkable 20% surge in productivity alongside a
      notable 30% enhancement in operational efficiency.`,
      sourceCodeLink: "https://github.com/thehiten/VoteVerse"
    },
    {
      id: 3,
      logo: javascript,
      name: "ChefCentral Restaurant management System",
      p: `Developed a robust voting system with Node.js, MongoDB, and Express.js, fostering civic engagement
      in democratic processes while ensuring unwavering election integrity and transparency.`,
      sourceCodeLink: "https://github.com/thehiten/ChefCentral-Restaurant-managemnt-System"
    },
    {
      id: 4,
      logo: mongodb,
      name: "bookCollect",
      p: `A bookCollect website built with the MERN stack offers a robust platform for users to browse, search, and purchase books online. Leveraging MongoDB, Express.js, React, and Node.js, this website provides a seamless user experience with features like:`,
      sourceCodeLink: "https://github.com/thehiten/BookCollect"
    },
  ];

  return (
    <>
      <div name="Portfolio" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20">
        <h1 className="text-3xl font-bold mb-5 text-center">Portfolio</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Example usage of cardItem */}
          {cardItem.map((item) => (
            <div key={item.id} className="border-2 rounded-lg shadow-lg p-4">
              <div className="flex justify-center mb-4">
                <img
                  src={item.logo}
                  className="w-20 h-20 rounded-full"
                  alt={item.name}
                />
              </div>
              <p className="font-bold mb-2">{item.name}</p>
              <p className="text-sm">{item.p}</p>
              <div className="mt-4 space-x-2">
                <a
                  href={item.sourceCodeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-red-500 text-white rounded hover:bg-blue-600"
                >
                  Source code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <hr className=" border-t-4" />
    </>
  );
}

export default Portfolio;
