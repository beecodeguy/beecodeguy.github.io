import React, {useContext} from "react";
import "./Contact.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import {illustration, contactInfo} from "../../portfolio";
import {Fade} from "react-reveal";
import contactMeAnim from "../../../public/assets/lottie/contact_me_anim.json";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import StyleContext from "../../contexts/StyleContext";
import {FaWhatsapp} from "react-icons/fa";
import {MdEmail} from "react-icons/md";

export default function Contact() {
  const {isDark} = useContext(StyleContext);
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main contact-margin-top" id="contact">
        <div className="contact-div-main">
          <div className="contact-header">
            <h1 className="heading contact-title flex items-center">
              {contactInfo.title}
            </h1>
            <p
              className={
                isDark
                  ? "dark-mode contact-subtitle"
                  : "subTitle contact-subtitle"
              }
            >
              {contactInfo.subtitle}
            </p>
            <div
              className={
                isDark ? "dark-mode contact-text-div" : "contact-text-div"
              }
            >
              {contactInfo.number && (
                <>
                  <a
                    className="contact-detail flex items-center gap-2 text-green-500 hover:text-green-500"
                    href={"tel:" + contactInfo.number}
                  >
                    {contactInfo.number} {<FaWhatsapp size={36} />}
                  </a>
                  <br />
                  <br />
                </>
              )}
              <a
                className="contact-detail-email flex items-center gap-2 text-orange-500"
                href={"mailto:" + contactInfo.email_address}
              >
                {contactInfo.email_address} {<MdEmail size={36} />}
              </a>
              <br />
              <br />
              <SocialMedia />
            </div>
          </div>
          <div className="contact-image-div">
            {illustration.animated ? (
              <DisplayLottie
                animationData={contactMeAnim}
                style={{height: "400px"}}
              />
            ) : (
              <img
                alt="Man working"
                src={require("../../assets/images/contactMailDark.svg")}
              ></img>
            )}
          </div>
        </div>
      </div>
    </Fade>
  );
}
