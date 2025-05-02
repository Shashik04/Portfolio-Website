import SingleExperience from "./SingleExperience";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import React from "react";

const experiences = [
  {
    job: "Web Developer Intern",
    company: "Nexgeno Technology private limited",
    date: "Nov/2024 - Jan/2025",
    responsibilities: [
      "Learned HTML, CSS, and JavaScript basics to advance.",
      "Built mini projects to apply skills.",
      "Collaborated on real-world workflows.",
      "Used Git & GitHub for version control."
  
    ],
  },
  {
    job: "Full Stack Developer Intern",
    company: "Workverse",
    date: "Feb/2025 - April/2025",
    responsibilities: [
      "Contributed to Centralized Monitoring System and WIP projects.",
      "Developed REST APIs, handled data workflows, and optimized performance.",
      "Used Git, Postman, etc.",
    ],
  },
  {
    job: "Full Stack Developer Intern",
    company: "Controllzed",
    date: "April/2025 - Present",
    responsibilities: [
      "Participated in web development workflows and Agile practices.",
      "Practiced code reviews, documentation, and Git collaboration.",
      "Gained exposure to [React, Node.js, Git, etc.].",
    ],
  },
];

const AllExperiences = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between">
      {experiences.map((experience, index) => (
        <React.Fragment key={index}>
          <SingleExperience experience={experience} />
          {index < experiences.length - 1 && (
            <motion.div
              variants={fadeIn("right", 0)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.7 }}
            >
              <FaArrowRightLong className="text-6xl text-orange lg:block sm:hidden" />
            </motion.div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default AllExperiences;
