import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const projects = [
  // {
  //   name: "LappyZone (E-Commerce Website)",
  //   year: "Mar2025",
  //   align: "right",
  //   image: "../../public/images/website-img-1.jpg",
  //   link: "#",
  // },
  {
    name: "Books Management System",
    year: "April2025",
    align: "left",
    image: "../../public/images/website-img-2.webp",
    link: "https://github.com/Shashik04/Book-Management-System.git",
  },
  {
    name: "Movie App",
    year: "Mar2025",
    align: "right",
    image: "../../public/images/website-img-3.jpg",
    link: "https://github.com/Shashik04/Movie-App.git",
  },
  {
    name: "Dashboard UI",
    year: "Mar2025",
    align: "left",
    image: "../../public/images/website-img-4.jpg",
    link: "https://github.com/Shashik04/Dashboard-UI.git",
  },
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => {
          return (
            <SingleProject
              key={index}
              name={project.name}
              year={project.year}
              align={project.align}
              image={project.image}
              link={project.link}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;
