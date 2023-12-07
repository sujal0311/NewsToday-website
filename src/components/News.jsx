import React, { Component } from "react";
import Newsitem from "./Newsitem";
import Button from "./Button";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'
import { motion } from "framer-motion"
import Heading from "./Heading";

export default class News extends Component {
  static defaultProps = {
    country:"in",
    pageSize:"12",
    category:"general",
  }
  static propTypes = {
    country:PropTypes.string,
    pageSize:PropTypes.number,
    category:PropTypes.string,
    api:PropTypes.string,
    setProgress:PropTypes.func,
  }
  articles = [];
  handlePrevClick = async () => {
    let prevPage = this.state.page - 1;
    this.props.setProgress(10)
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.api}&page=${prevPage
    }&pageSize=${this.props.pageSize}`;
    this.setState({
      loading: "true",
    });
    let data = await fetch(url);
    this.props.setProgress(40)
    let parsedData = await data.json();
    this.props.setProgress(70)
    this.setState({
      page: prevPage,
      articles: parsedData.articles,
      loading: false,
    }, () => {
      window.scrollTo(0, 0);
    });
    this.props.setProgress(100)
  };
  handleNextClick = async () => {
    if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / 15))) {
      let nextPage = this.state.page + 1;
      this.props.setProgress(10)
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.api}&page=${nextPage}&pageSize=${this.props.pageSize}`;
      
      this.setState({
        loading: "true",
      });
  
      try {
        let data = await fetch(url);
        this.props.setProgress(30)
        let parsedData = await data.json();
        this.props.setProgress(60)
        this.setState({
          page: nextPage,
          articles: parsedData.articles,
          loading: false,
        }, () => {
          window.scrollTo(0, 0);
        });
      } catch (error) {
        console.error("Error fetching data:", error);
        this.setState({
          loading: false,
        });
      }
    }
    this.props.setProgress(100)
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
    this.props.setProgress(10)
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.api}&page=${
      this.state.page
    }&pageSize=${this.props.pageSize}`;
    this.props.setProgress(30)
    this.setState({
      loading: "true",
    });
    let data = await fetch(url);
    this.props.setProgress(50)
    let parsedData = await data.json();
    this.props.setProgress(70)
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
    this.props.setProgress(100)
  }
  render() {
    return (
      <div>
        <div className="container my-3">
        <Heading color={this.props.color} category={this.props.category}/>
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
                <motion.div  className="col-sm-12 col-md-6 col-xl-4 ">
                  <Newsitem
                    title={element.title.slice(0,80) + "..."}
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
