import React, { Component } from "react";
import { motion } from "framer-motion"
export class Button extends Component {
  render() {
    return (
      <div className="container d-flex justify-content-between pb-5">
        <motion.button
          disabled={this.props.page === 1}
          type="button"
          className="btn btn-primary w-15 "
          onClick={this.props.prev} whileTap={{ scale: 0.8 }} whileHover={{ scale: 1.1 }}
        >
          ← Previous
        </motion.button>
        <nav aria-label="...">
          <ul className="pagination p-2">
            <li className={`page-item ${this.props.page === 1 ? "active" : " "}`}>
              <a className="page-link">
                1
              </a>
            </li>
            <li
              className={`page-item ${this.props.page === 2 ? "active" : " "}`}
              aria-current="page"
            >
              <span className="page-link">2</span>
            </li>
            <li className={`page-item ${this.props.page === 3 ? "active" : " "}`}>
              <a className="page-link">
                3
              </a>
            </li>
            <li className={`page-item  ${this.props.page === 4 ? "active" : " "}`}>
              <a className="page-link">
                4
              </a>
            </li>
            <li className={`page-item ${this.props.page === 5 ? "active" : " "}`}>
              <a className="page-link">
                5
              </a>
            </li>
          </ul>
        </nav>
        <motion.button
          disabled={
            this.props.page + 1 > Math.ceil(this.props.totalResults / 15)
          } whileTap={{ scale: 0.8 }} whileHover={{ scale: 1.1 }}
          type="button"
          className="btn btn-primary  w-15 "
          onClick={this.props.next}
        >
          Next →
        </motion.button>
      </div>
    );
  }
}

export default Button;
