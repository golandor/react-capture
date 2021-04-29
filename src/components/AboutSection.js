import React from "react";
import home1 from "../img/home1.png";

import Wave from "./Wave";

import { motion } from "framer-motion";

import { titleanimation, fade, photoAnimation } from "../animation";

import { About, Description, Image, Hide } from "../styles";
const AboutSection = () => {
  // const titleAnim = {
  //   hidden: { opacity: 0 },
  //   show: { opacity: 1, transition: { duration: 2 } },
  // };
  // const container = {
  //   hidden: { x: 100 },
  //   show: {
  //     x: 0,
  //     transition: {
  //       duration: 0.75,
  //       ease: "easeOut",
  //       staggerChildren: 0.6,
  //       // when: "beforeChildren",
  //     },
  //   },
  // };

  return (
    <About>
      <Description>
        <motion.div>
          <Hide>
            <motion.h2 variants={titleanimation}>We work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleanimation}>
              your <span>dreams</span> come
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleanimation}>true</motion.h2>
          </Hide>
        </motion.div>

        <motion.p variants={fade}>
          Contact us for any photografy or videography ideas that you have. We
          have professionals with amazing skills
        </motion.p>
        <motion.button variants={fade}>Contact Us</motion.button>
      </Description>

      <Image>
        <motion.img
          variants={photoAnimation}
          src={home1}
          alt="guy with a camera"
        />
      </Image>
      <Wave />
    </About>
  );
};

export default AboutSection;
