import React, { Component } from "react";
import { motion } from "framer-motion";
export default class Newsitem extends Component {
  render() {
    let { title, description, imageurl, newsurl ,source,author,time} = this.props;
    return (
      <motion.div initial={{ x: "100%" }}
      animate={{ x: "0%" }}
        whileHover={{ scale: 1.05 }}
      >
        <div className="card mb-4 h-100 ">
       <div style={{display:"flex",
      justifyContent:"flex-end",position:"absolute",right:'0'}}> <span className="badge rounded pill bg-info">
    {source}</span></div>
          <img src={imageurl} className="card-img-top image-fluid" alt="..." />
          <div
            className={`card-body bg-${this.props.color} text-${
              this.props.color === "light" ? "dark" : "light"
            }`}
          >
            <h5 className="card-title">{title}</h5>
            <p className="card-text" style={{ height: "10vh" }}>
              {description}
            </p>
            <motion.a
              href={newsurl}
              target="_blank"
              whileTap={{ scale: 0.8 }}
              whileHover={{ scale: 1.1 }}
              className="btn btn-sm btn-primary"
            >
              Read more...
            </motion.a>
            <p className="card-text mt-1"><small>{!author?"On":`By ${author} on`}  {new Date(time).toLocaleString()}</small></p>
          </div>
        </div>
      </motion.div>
    );
  }
}

