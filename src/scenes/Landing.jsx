import useMediaQuery from "../hooks/useMediaQuery";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";
import SocialMediaIcons from '../components/SocialMediaIcons'

const Landing = ({ setSelectedPage }) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px");
  return (
    <section
      id="home"
      className="min-h-screen md:min-h-[100.5vh] flex flex-col md:flex-row items-center justify-center gap-16 py-10"
    >
      {/* IMAGE SECTION */}
      <div className="md:order-2 flex justify-center basis-3/5 z-10 mt-16 md:mt-32">
        {isAboveMediumScreens ? (
          <div className="relative z-0 ml-20 before:absolute before:-top-20 before:-left-20 before:rounded-t-[400px] before:w-full before:max-w-[400px] before:h-full before:border-2 before:border-blue before:z-[-1]">
            <img
              className="hover:filter hover:saturate-150 transition duration-500 z-10 w-full rounded-t-[400px] max-w-[400px] md:max-w[600]"
              src="assets/nip.png"
              alt="profile"
            />
          </div>
        ) : (
          <img
            className="hover:filter hover:saturate-200 transition duration-500 z-10 w-full rounded-t-[400px] max-w-[400px] md:max-w[600]"
            src="assets/nip.png"
            alt="profile"
          />
        )}
      </div>
      {/* MAIN SECTION */}
      <div className="z-30 basis-2/5 mt-12 md:mt-32">
        {/* HEADINGS */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="text-6xl font-playfair z-10 text-center mr-2 md:text-start">
            Nyasha {""}
            <span
              className="xs:relative xs:text-deep-blue  xs:font-semibold z-20 xs:before:content-brush
              before:absolute before:-left-[30px] before:-top-[110px] before:z-[-1]"
            >
              Muusha
            </span>
          </p>

          <p className=" mt-16 md:mt-20 mb-7 text-md md:text-lg text-justify md:text-start ">
            I am Nyasha, a User-focused UX designer passionate about creating intuitive, accessible, and engaging digital experiences that enhance usability, efficiency, and overall user satisfaction.
          </p>
        </motion.div>
        {/* CALL TO ACTIONS */}
        <motion.div
          className="flex mt-5 md:mt-16 justify-center md:justify-start"
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 }
          }}
        >
          <AnchorLink
            className="bg-gradient-rainblue text-deep-blue rounded-sm py-3 px-7 font-semi-bold hover:bg-blue hover:text-white transition duration-500"
            onClick={() => setSelectedPage('contact')}
            href='#contact'>
            Contact Me
          </AnchorLink>
          <AnchorLink
            className='rounded-r-sm bg-gradient-rainblue py-0.5 pr-0.5 '
            onClick={() => setSelectedPage('contact')}
            href='#contact'>
            <div
              className="bg-deep-blue hover:text-red transition duration-500 w-full h-full flex items-center justify-center font-playfair px-10"> Lets Talk</div>
          </AnchorLink>
        </motion.div>
        <motion.div
          className="flex mt-5  md:mt-20 justify-center md:justify-start"
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 }
          }}
        >
          <SocialMediaIcons />
        </motion.div>
      </div>
    </section>
  );
};
export default Landing;
