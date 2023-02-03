import {
  faTwitter,
  faLinkedin,
  faGithub,
} from "@fortawesome/fontawesome-free-brands";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://github.com/NyashaMuusha"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon className="font-awesome " size="2x" icon={faGithub} />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.linkedin.com/in/nyasha-ivy-peace-muusha-279457a3/"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon className="font-awesome" size="2x" icon={faLinkedin} />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://twitter.com/beingAyshan"
        target="_blank"
        rel="noreferrer"
      >
        {" "}
        <FontAwesomeIcon className="font-awesome" size="2x" icon={faTwitter} />
      </a>
    </div>
  );
};
export default SocialMediaIcons;
