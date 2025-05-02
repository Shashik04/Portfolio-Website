import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p>
      Hi, I’m Shashikant Yadav — a passionate Full Stack Developer with a strong foundation in building dynamic, responsive, and user-friendly web applications. I enjoy turning ideas into real-world digital solutions that are both functional and visually appealing. <br />

I’ve worked on a variety of full-stack projects.<br />


My stack includes JavaScript, React, Node.js, Express.js, MongoDB, MySQL, and tools like Tailwind CSS, Bootstrap, and REST APIs. I'm always exploring new technologies and love to build seamless user experiences backed by robust backend systems.
      </p>
      <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
        >
          My Projects
        </Link>
      </button>
    </div>
  );
};

export default AboutMeText;
