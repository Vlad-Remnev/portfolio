import React from "react";
import {
  FaVk,
  FaLinkedinIn,
  FaGithub, FaGoogle,
  FaWhatsapp
} from "react-icons/fa";

const SocialShare = [
  { Social: <FaVk />, link: "https://vk.com/remnevich" },
  { Social: <FaGithub />, link: "https://github.com/Vlad-Remnev" },
  { Social: <FaGoogle />, link: "mailto:mail%20to:remnevich@gmail.com,com"},
  { Social: <FaWhatsapp />, link: "https://wa.me/79057706664"},
  { Social: <FaLinkedinIn />, link: "https://www.linkedin.com/in/%D0%B2%D0%BB%D0%B0%D0%B4%D0%B8%D1%81%D0%BB%D0%B0%D0%B2-%D1%80%D0%B5%D0%BC%D0%BD%D0%B5%D0%B2-3bb3b51b4/" },
];

const Social = () => {
  return (
    <div className="nav social-icons justify-content-center">
      {SocialShare.map((val, i) => (
        <a key={i} href={`${val.link}`} rel="noreferrer" target="_blank">
          {val.Social}
        </a>
      ))}
    </div>
  );
};

export default Social;
