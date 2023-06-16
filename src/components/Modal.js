import React from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const backdropVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
    },
  },
};

const modalVariant = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: 200,
    opacity: 1,
  },
};

const Modal = ({ showModal }) => {
  return (
    <AnimatePresence exitBeforeEnter>
      {showModal && (
        <motion.div
          variants={backdropVariant}
          animate="visible"
          initial="hidden"
          exit="hidden"
          className="backdrop"
        >
          <motion.div variants={modalVariant} className="modal">
            <p>Want to make another pizza?</p>
            <Link to="/">
              <button>Start again</button>
            </Link>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
