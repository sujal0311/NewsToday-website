import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import { motion } from "framer-motion"

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuOpen: false 
    };
  }
  toggleMenu = () => {
    this.setState({ isMenuOpen: !this.state.isMenuOpen });
  };

  render() {
    return (
      <>
        <nav className={`navbar navbar-expand-lg navbar-dark bg-primary fixed-top`}>
          <div className="container">
            <NavLink className="navbar-brand" to="/">
              NewsToday
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              onClick={this.toggleMenu}
              aria-expanded={this.state.isMenuOpen ? '"true"' : 'false'}
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className={`collapse navbar-collapse ${this.state.isMenuOpen ? 'show' : ''}`} id="navbarNavAltMarkup">
              <div className="navbar-nav">
                    <motion.div whileHover={{scale:1.1}} whileTap={{scale:0.8}}>
                <NavLink exact className="nav-link" activeclassname="active" to="/" onClick={this.toggleMenu} >
                  Home
                </NavLink>
                </motion.div>
                <motion.div whileHover={{scale:1.1}} whileTap={{scale:0.8}}>
                <NavLink className="nav-link" activeclassname="active" to="/business" onClick={this.toggleMenu} >
                  Business
                </NavLink>
                </motion.div>
                <motion.div whileHover={{scale:1.1}} whileTap={{scale:0.8}}>
                <NavLink className="nav-link" activeclassname="active" to="/entertainment" onClick={this.toggleMenu} >
                  Entertainment
                </NavLink>
                </motion.div>
                <motion.div whileHover={{scale:1.1}} whileTap={{scale:0.8}}>
                <NavLink className="nav-link" activeclassname="active" to="/health" onClick={this.toggleMenu} >
                  Health
                </NavLink>
                </motion.div>
                <motion.div whileHover={{scale:1.1}} whileTap={{scale:0.8}}>
                <NavLink className="nav-link" activeclassname="active" to="/science" onClick={this.toggleMenu} >
                  Science
                </NavLink>
                </motion.div>
                <motion.div whileHover={{scale:1.1}} whileTap={{scale:0.8}}>
                <NavLink className="nav-link" activeclassname="active" to="/sports" onClick={this.toggleMenu} >
                  Sports
                </NavLink>
                </motion.div>
              <motion.div whileHover={{scale:1.1}} whileTap={{scale:0.8}}>  <NavLink className="nav-link" activeclassname="active" to="/technology" onClick={this.toggleMenu} >
                  Technology
                </NavLink></motion.div>
              </div>
              <div className="d-lg-none" onClick={this.toggleMenu} >
                {/* Dark mode toggle for small screens */}
                <motion.div layout className={`form-check form-switch text-${this.props.color === 'light' ? 'light' : 'dark'}`}>
                  <input
                    className="form-check-input bg-secondary"
                    onChange={this.props.toggleDarkMode}
                    type="checkbox"
                    role="switch"
                    id="flexSwitchCheckSmall"
                  />
                  <label className="form-check-label" htmlFor="flexSwitchCheckSmall">
                    Dark Mode
                  </label>
                </motion.div>
              </div>
              <motion.div whileHover={{scale:1.1}} whileTap={{scale:0.8}} className="ms-lg-5 d-none d-lg-block">
                {/* Dark mode toggle for large screens */}
                <div className={`form-check form-switch text-${this.props.color === 'light' ? 'light' : 'dark'}`}>
                  <input
                    className="form-check-input bg-secondary"
                    onChange={this.props.toggleDarkMode}
                    type="checkbox"
                    role="switch"
                    id="flexSwitchCheckLarge"
                  />
                  <label className="form-check-label" htmlFor="flexSwitchCheckLarge">
                    Dark Mode
                  </label>
                </div>
              </motion.div>
            </div>
          </div>
        </nav>
      </>
    );
  }
}

export default Navbar;
