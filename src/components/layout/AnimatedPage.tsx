import { motion } from "framer-motion";
import React from "react";
import { Animations } from "../../../styles/animations";

const AnimatedPage = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      variants={Animations.pageTransition}
      initial={"hidden"}
      animate={"visible"}
      exit={"exit"}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedPage;
