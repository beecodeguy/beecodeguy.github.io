import React, {useContext} from "react";
import "./Footer.scss";
import {Fade} from "react-reveal";
import emoji from "react-easy-emoji";
import StyleContext from "../../contexts/StyleContext";

export default function Footer() {
  const {isDark} = useContext(StyleContext);
  return (
    <Fade bottom duration={1000} distance="5px">
      <div className="footer-div flex flex-col items-center gap-1">
        <p
          className={
            "dark-mode footer-text flex justify-center items-center gap-1"
          }
        >
          {emoji("Made with ❤️ by Beecodeguy")}
        </p>
        <p className="text-gray-500 mt-6">
          © {new Date().getFullYear()} • Built with passion and code
        </p>
        {/* <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          Theme by{" "}
          <a href="https://github.com/saadpasta/developerFolio">
            developerFolio
          </a>
        </p> */}
      </div>
    </Fade>
  );
}
