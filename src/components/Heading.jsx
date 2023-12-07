import React, { Component } from 'react';
import { motion } from "framer-motion";

export class Heading extends Component {
  render() {
    let { color,category } = this.props;
    category=category.charAt(0).toUpperCase()+category.slice(1);
    return (
      <div id="heading"
        className="d-flex justify-content-center align-items-center">
      <motion.div initial={{ opacity: 0 ,x:100}} animate={{ opacity: 1,x:0 }} transition={{ duration: 1 }} exit={{ opacity: 0 }} className={`text-center mt-5 p-4 bg-${color}`}>
        <h1 className={`fw-bolder text-${color==='dark'?'light':'dark'}`}>NewsToday - Top {category} Headlines</h1>
      </motion.div>
      </div>
    );
  }
}

export default Heading;
