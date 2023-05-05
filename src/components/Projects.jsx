import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title, text }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
  const projectTitle = title.split(" ").join("-").toLowerCase();

  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair">{title}</p>
        <p className="mt-7">{text}</p>
      </div>
      <img
        src={`assets/${projectTitle}.jpg`}
        alt={projectTitle}
        className="h-[300px]"
      />
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="pt-48 pb-48">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-red">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="mt-10 mb-10">
          Unleashing the Power of React and JavaScript: Building Applications
          that are Modern and Fun
        </p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* ROW 1 */}
          <div
            className="flex justify-center text-center items-center p-10 bg-red
             text-2xl font-playfair font-semibold"
          >
            BEAUTIFUL USER INTERFACES
          </div>
          <a href="https://recoverly-9f5a0.web.app/signup">
            <Project
              title="Project 1"
              text="Our debt recovery system simplifies debt management by allowing users to handle the process with just a few clicks. It streamlines the recovery process, making it easier and more efficient for businesses to manage their debts.."
            />
          </a>
          <a href="https://evogym-ayshan.netlify.app">
            <Project
              title="Project 2"
              text="As someone who is passionate about fitness, creating a gym app was an obvious choice."
            />
          </a>

          {/* ROW 2 */}
          <a href="https://www.ayshan.co.za">
            <Project
              title="Project 3"
              text="I designed a website for a tech startup, showcasing innovative solutions and cutting-edge technology. The website features a modern and sleek design, with clear and concise information about the company"
            />
          </a>
          <a href="https://the-cv-nip.netlify.app" className="h-full">
            <Project
              title="Project 4"
              text="I keep my first web portfolio as a reminder of my growth as a front-end developer, even though it may not be as polished as my current work. It's a source of pride and motivation, representing the beginning of my journey towards becoming an accomplished developer."
            />
          </a>
          <div
            className="flex justify-center text-center items-center p-10 bg-blue
               text-2xl font-playfair font-semibold"
          >
            SMOOTH USER EXPERIENCE
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
