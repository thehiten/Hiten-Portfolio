import React from "react";

function About() {
  return (
    <div
      name="About"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
    >
      <h1 className="text-3xl font-bold mb-5 text-center">About</h1>
      <p className="text-sm md:text-base">
        Hello! My name is Hiten, and I am a passionate web developer. With a
        strong background in creating dynamic and responsive websites, I
        specialize in transforming ideas into digital realities. My expertise
        spans various technologies, including HTML, CSS, JavaScript, and modern
        frameworks like React.
      </p>
      <br />
      <h1 className="text-xl font-semibold mb-3 text-red-700 ">Education</h1>
      <p className="text-sm md:text-base">
        BE - Computer Science and Engineering, Chandigarh University, Mohali,
        Punjab
      </p>
      <p className="text-sm md:text-base">Graduated: May 2025</p>
      <br />

      <h1 className="text-xl font-semibold mb-3 text-red-700 ">
        Technical Skills
      </h1>
      <ul className="list-disc list-inside  leading-relaxed text-sm md:text-base">
        <li>Programming Languages: C/C++, Python, HTML, CSS, JavaScript</li>
        <li>Technologies/Frameworks: React.js, Node.js, Express.js</li>
        <li>Databases: MongoDB, MySQL</li>
        <li>
          Coursework: Operating Systems, Database Management Systems, Computer
          Networks, AIML
        </li>
        <li>
          Areas of Interest: Full-Stack Development, Data Structures and
          Algorithms, Artificial Intelligence
        </li>
      </ul>
      <br />

      <h1 className="text-xl font-semibold mb-3 text-red-700 ">Projects</h1>
      <ul className="list-disc list-inside  leading-relaxed text-sm md:text-base">
        <li>Amazon Clone Website</li>
        <li>MoneyMap</li>
        <li>ChefCentral Restaurant Management System</li>
        <li>VoteVerse</li>
        <li>BookStore</li>
      </ul>
      <br />

      <h1 className="text-xl font-semibold mb-3 text-red-700 ">Achievements</h1>
      <ul className="list-disc list-inside  leading-relaxed text-sm md:text-base">
        <li>
          Scholarship: Received 50% scholarship in academic fees from university
          and government scholarship (CENTRAL SECTOR SCHEME OF SCHOLARSHIPS FOR
          COLLEGE AND UNIVERSITY STUDENTS).
        </li>
        <li>
          NCC A Certificate (Navy): Participated in practical naval training
          scenarios, earning NCC A Certification with a specialization,
          enhancing team performance and completing missions successfully.
        </li>
      </ul>
      <br />

      <h1 className="text-xl font-semibold mb-3 text-red-700 ">Certificates</h1>
      <ul className="list-disc list-inside  leading-relaxed text-sm md:text-base">
        <li>
          C++ and DSA Certification: Demonstrated proficiency in C++ programming
          language and Data Structures and Algorithms, showcasing a 20% increase
          in coding efficiency.
        </li>
        <li>
          MERN Certification: Completed Web Developer Certification program,
          resulting in a 50% increase in proficiency in modern web development
          technologies and practices.
        </li>
        <li>
          Internet of Things: Scored in the 86th percentile, demonstrating
          mastery of IoT concepts and methodologies.
        </li>
      </ul>
      <br />

      <h1 className="text-xl font-semibold mb-3 text-red-700 ">Interests</h1>
      <ul className="list-disc list-inside  leading-relaxed text-sm md:text-base">
        <li>Enthusiastic about problem-solving with computer science.</li>
        <li>Thrive on innovation and creative solutions.</li>
      </ul>
      <br />

      <h1 className="text-xl font-semibold mb-3 text-red-700 ">Languages</h1>
      <ul className="list-disc list-inside  leading-relaxed text-sm md:text-base">
        <li>Hindi: Full Professional Proficiency</li>
        <li>English: Full Professional Proficiency</li>
      </ul>
    </div>
  );
}

export default About;
