import "./index.scss";

// import icons
import { BsTwitter } from "react-icons/bs";
import { SiDiscord } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="landing-footer p-3 ps-1 pe-1 ps-md-3 pe-md-3 pe-lg-5 ps-lg-5">
      <div
        style={{
          width: "60%",
        }}
      >
        2022 Copyright &copy; By Alchemist
      </div>
      <div>
        <a
          href="https://twitter.com/AlchemistsNFT"
          target="_blank"
          className="footer-link"
        >
          <BsTwitter color="white" size={25} />
        </a>
        <a
          href="https://discord.com/invite/alchemistsnft"
          target="_blank"
          className="footer-link ms-3"
        >
          <SiDiscord color="white" size={25} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
