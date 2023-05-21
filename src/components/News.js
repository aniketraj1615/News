import React, { Component } from "react";

import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 6,
    category: "general",
  };
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };
  constructor() {
    super();
    console.log("constructor is called");
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }

  async componentDidMount() {
    console.log(this.props.pageSize);
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=${this.props.apiKey}&page=1&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);

    let parsedData = await data.json();
    console.log(parsedData);

    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
  }
  prevhandle = async () => {
    console.log("prv btn");
    let url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${this.props.category}&apikey=${this.props.apiKey}&page=${
      this.state.page - 1
    }&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
      loading: false,
    });
  };
  nexthandle = async () => {
    console.log("next btn");
    if (
      this.state.page + 1 >
      Math.ceil(this.state.totalResults / this.props.pageSize)
    ) {
    } else {
      let url = `https://newsapi.org/v2/top-headlines?country=${
        this.props.country
      }&category=${this.props.category}&apikey=${this.props.apiKey}&page=${
        this.state.page + 1
      }&pageSize=${this.props.pageSize}`;
      this.setState({ loading: true });
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,
        loading: false,
      });
    }
  };
  render() {
    console.log("render");
    console.log(this.state.apiKey);
    return (
      <>
        <div className="container my-3">
          <h1 className="text-center my-5">Headlines</h1>
          {this.state.loading && <Spinner />}
          <div className="row">
            {!this.state.loading &&
              this.state.articles.map((element) => {
                return (
                  <div className="col-md-4" key={element.url}>
                    <NewsItem
                      // title={element.title ? element.title.slice(0, 25) : ""}   //for fixing the heading size upto 25 words
                      title={element.title}
                      // description={
                      //   element.description
                      //     ? element.description.slice(0, 70)
                      //     : ""
                      // }  //for fixing the description upto 70 words only
                      description={element.description}
                      imageUrl={
                        element.urlToImage
                          ? element.urlToImage
                          : "https://images.hindustantimes.com/tech/img/2023/04/18/1600x900/asteroid_1681792994471_1681792994687.jpg"
                      }
                      newsUrl={element.url}
                      author={element.author}
                      date={element.publishedAt}
                      source={element.source.name}
                    />
                  </div>
                );
              })}
            <div className="container d-flex justify-content-between my-4">
              <button
                type="button"
                disabled={this.state.page <= 1}
                onClick={this.prevhandle}
                className="btn btn-dark"
              >
                &larr;Previous
              </button>
              <button
                type="button"
                disabled={
                  this.state.page + 1 >
                  Math.ceil(this.state.totalResults / this.props.pageSize)
                }
                onClick={this.nexthandle}
                className="btn btn-dark"
              >
                Next&rarr;
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default News;
