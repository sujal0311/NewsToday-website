import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import News from "./components/News";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

class App extends Component {
  state = {
    progress: 0,
  };
  setProgress = (progress) => {
    this.setState({
      progress: progress,
    });
  };
  constructor(props) {
    super(props);
    this.state = {
      color: "light",
      api: "7c1cef1fc5994ba8adb287de1aae8f3f",
    };
  }

  toggleDarkMode = () => {
    this.setState({
      color: this.state.color === "light" ? "dark" : "light",
    });
  };
  render() {
    return (
      <BrowserRouter>
        <Navbar color={this.state.color} toggleDarkMode={this.toggleDarkMode} />
        <LoadingBar color="#f11946" progress={this.state.progress} height={3} />
        <div className={`bg-${this.state.color}`}>
          <Routes>
            <Route
              path="/"
              element={
                <News
                  setProgress={this.setProgress}
                  api={this.state.api}
                  key={"general"}
                  pageSize={12}
                  country="in"
                  category="general"
                  color={this.state.color}
                />
              }
            />
            <Route
              path="/general"
              element={
                <News
                  setProgress={this.setProgress}
                  api={this.state.api}
                  key={"home"}
                  pageSize={12}
                  country="in"
                  category="general"
                  color={this.state.color}
                />
              }
            />
            <Route
              path="/business"
              element={
                <News
                  setProgress={this.setProgress}
                  api={this.state.api}
                  key={"business"}
                  pageSize={12}
                  country="in"
                  category="business"
                  color={this.state.color}
                />
              }
            />
            <Route
              path="/entertainment"
              element={
                <News
                  setProgress={this.setProgress}
                  api={this.state.api}
                  key={"entertainment"}
                  pageSize={12}
                  country="in"
                  category="entertainment"
                  color={this.state.color}
                />
              }
            />
            <Route
              path="/health"
              element={
                <News
                  setProgress={this.setProgress}
                  api={this.state.api}
                  key={"health"}
                  pageSize={12}
                  country="in"
                  category="health"
                  color={this.state.color}
                />
              }
            />
            <Route
              path="/science"
              element={
                <News
                  setProgress={this.setProgress}
                  api={this.state.api}
                  key={"science"}
                  pageSize={12}
                  country="in"
                  category="science"
                  color={this.state.color}
                />
              }
            />
            <Route
              path="/sports"
              element={
                <News
                  setProgress={this.setProgress}
                  api={this.state.api}
                  key={"sports"}
                  pageSize={12}
                  country="in"
                  category="sports"
                  color={this.state.color}
                />
              }
            />
            <Route
              path="/technology"
              element={
                <News
                  setProgress={this.setProgress}
                  api={this.state.api}
                  key={"technology"}
                  pageSize={12}
                  country="in"
                  category="technology"
                  color={this.state.color}
                />
              }
            />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
