import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { containerVariants } from "./Base";

const Toppings = ({ addTopping, pizza }) => {
  let toppings = [
    "mushrooms",
    "peppers",
    "onions",
    "olives",
    "extra cheese",
    "tomatoes",
  ];

  return (
    <motion.div
      variants={containerVariants}
      animate="visible"
      initial="hidden"
      className="toppings container"
    >
      <h3>Step 2: Choose Toppings</h3>
      <ul>
        {toppings.map((topping) => {
          let spanClass = pizza.toppings.includes(topping) ? "active" : "";
          return (
            <motion.li
              whileHover={{ scale: 1.1, originX: 0, color: "#f8e112" }}
              key={topping}
              onClick={() => addTopping(topping)}
            >
              <span className={spanClass}>{topping}</span>
            </motion.li>
          );
        })}
      </ul>

      <Link to="/order">
        <motion.button
          whileHover={{
            scale: 1.1,
            textShadow: "0px 0px 8px rgb(255,255,255)",
            boxShadow: "0px 0px 8px rgb(255,255,255)",
          }}
        >
          Order
        </motion.button>
      </Link>
    </motion.div>
  );
};

export default Toppings;
