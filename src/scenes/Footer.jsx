import SocialMediaIcons from "../components/SocialMediaIcons";
const Footer = () => {
  return (
    <footer className="h-64 bg-red pt-10">
      <div className="w-5/6 mx-auto">
        <SocialMediaIcons />
        <div className="md:flex justify-center md:justify-between text-center">
          <p className="font-playfair font-semibold text-2xl text-yellow">
            Nyasha Muusha
          </p>
          <p className="font-playfair text-md text-yellow">
            @{''}{new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
