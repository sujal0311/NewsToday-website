import React, { Component } from "react";
import Newsitem from "./Newsitem";
import Button from "./Button";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import Heading from "./Heading";
import sampledata from "../samplenews";
import nextdata from "../nextpagenews";
export default class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: "12",
    category: "general",
  };
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
    api: PropTypes.string,
    setProgress: PropTypes.func,
  };
  articles = [];
  handlePrevClick = async () => {
    let prevPage = this.state.page - 1;
    this.props.setProgress(10);
    this.setState({
      loading: "true",
    });
    this.props.setProgress(40);
    this.props.setProgress(70);
    this.setState(
      {
        page: prevPage,
        articles: sampledata.articles,
        loading: false,
      },
      () => {
        window.scrollTo(0, 0);
      }
    );
    this.props.setProgress(100);
  };
  handleNextClick = async () => {
    if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / 15))) {
      let nextPage = this.state.page + 1;
      this.props.setProgress(10);

      this.setState({
        loading: "true",
      });

      try {
        this.props.setProgress(30);
        this.setState(
          {
            page: nextPage,
            articles: nextdata.articles,
            loading: false,
          },
          () => {
            window.scrollTo(0, 0);
          }
        );
      } catch (error) {
        console.error("Error fetching data:", error);
        this.setState({
          loading: false,
        });
      }
    }
    this.props.setProgress(100);
  };

  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: false,
      page: 1,
    };
  }

  async componentDidMount() {
    this.props.setProgress(10);

    try {
      this.setState({
        articles: sampledata.articles,
        totalResults: sampledata.totalResults,
        loading: false,
      });
    } catch (error) {
      console.error("Error fetching data from API:", error);

      // If the API fails, load sample data from local JSON
    }

    this.props.setProgress(100);
  }

  render() {
    return (
      <div>
        <div className="container my-3">
          <Heading color={this.props.color} category={this.props.category} />
          {this.state.loading && <Spinner />}
          <div className="row">
            {this.state.articles.map((element) => {
              if (element.urlToImage == null) {
                return;
              }
              if (element.description == null) {
                return;
              }
              return (
                <motion.div className="col-sm-12 col-md-6 col-xl-4 ">
                  <Newsitem
                    title={element.title.slice(0, 80) + "..."}
                    description={element.description.slice(0, 115) + "..."}
                    imageurl={element.urlToImage}
                    newsurl={element.url}
                    color={this.props.color}
                    source={element.source.name}
                    author={element.author}
                    time={element.publishedAt}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
        <Button
          page={this.state.page}
          prev={this.handlePrevClick}
          next={this.handleNextClick}
          totalResults={this.state.totalResults}
        />
      </div>
    );
  }
}
