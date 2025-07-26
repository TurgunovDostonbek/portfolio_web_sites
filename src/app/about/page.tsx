import React from "react";
import { FaCode, FaLaptopCode } from "react-icons/fa";

const About = () => {
  return (
    <div className="container max-w-7xl mx-auto py-20">
      <h1 className="text-4xl font-bold mb-8 text-center">About Me</h1>

      {/* bio section */}
      <section className="mb-16">
        <p className="text-lg text-secondary max-w-3xl mx-auto text-center">
          I m a passionate Junior Frontend Developer with a focus on building
          responsive and user-friendly web interfaces. I enjoy turning design
          ideas into interactive websites using modern technologies like HTML,
          CSS, and JavaScript. I m continuously learning and improving to build
          better user experiences.
        </p>
      </section>

      {/* skills section */}
      <section className="mb-16">
        <h2 className="section-title">Skills</h2>
        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md">
            <FaCode className="h-8 w-8 text-primary  mb-4" />
            <h3 className="text-xl font-semibold mb-2">Frontend</h3>
            <ul className="text-secondary space-y-2">
              <li>HTML5 / CSS3</li>
              <li>Bootstrap</li>
              <li>JavaScript</li>
              <li>React </li>
            </ul>
          </div>

          <div className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md">
            <FaLaptopCode className="h-8 w-8 text-primary  mb-4" />
            <h3 className="text-xl font-semibold mb-2">Backend</h3>
            <ul className="text-secondary space-y-2">
              <li>No</li>
              <li>No</li>
              <li>No</li>
              <li>No</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md">
            <FaLaptopCode className="h-8 w-8 text-primary  mb-4" />
            <h3 className="text-xl font-semibold mb-2">Tools & Others</h3>
            <ul className="text-secondary space-y-2">
              <li>Git / GitHub</li>
              <li>No</li>
              <li>No</li>
              <li>No</li>
            </ul>
          </div>
        </div>
      </section>

      {/* expriences section */}

      <section className="mb-16">
        <h2 className="section-title">Expriences</h2>

        <div className="max-w-3xl mx-auto space-y-8">
          <div className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Frontend Developer</h3>
            <p className="text-primary mb-2">
              Company Name • I haven t worked for any companies yet, but I ve
              built several personal and team projects to improve my skills.
            </p>
            <ul className="text-secondary space-y-2 list-disc list-inside"></ul>
          </div>

          <div className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Frontend Developer</h3>
            <p className="text-primary mb-2">
              Company Name • I haven t worked for any companies yet, but I ve
              built several personal and team projects to improve my skills.
            </p>
            <ul className="text-secondary space-y-2 list-disc list-inside"></ul>
          </div>
        </div>
      </section>

      {/* education section */}
      <section className="mb-16">
        <h2 className="section-title">Education</h2>

        <div className="max-w-3xl mx-auto space-y-8">
          <div className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">
              Education Name • Algoritm
            </h3>
            <p className="text-primary mb-2">Education Year • 2023 - 2024</p>
            <p className="text-secondary">
              I completed training in HTML, CSS, and Bootstrap at the Algotitm
              Education Center, where I learned how to build responsive and
              visually appealing websites.
            </p>
          </div>
        </div>

        <div className="max-w-3xl mx-auto space-y-8 mt-3">
          <div className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">
              Education Name • WebBrain Academy
            </h3>
            <p className="text-primary mb-2">Education Year • 2023 - 2024</p>
            <p className="text-secondary">
              I learned JavaScript at WebBrain Academy, where I focused on
              writing interactive and functional web applications.
            </p>
          </div>
        </div>

        <div className="max-w-3xl mx-auto space-y-8 mt-3">
          <div className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">
              Education Name • WebBrain Academy
            </h3>
            <p className="text-primary mb-2">Education Year • 2024 - 2025</p>
            <p className="text-secondary">
              I studied JavaScript at WebBrain Academy, where I also learned
              modern web development tools and libraries such as React, React
              Router DOM, npm, Vite, Git, and Git Bash. During my training, I
              focused on building interactive and fast web applications using
              these technologies.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
