import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
    };

    captalizefun = (string)=>{
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    constructor(props){
        super(props);
        this.state={
            articles: [],
            loading:true,
            page:1,
            totalResults:0
        }
        document.title= `${this.captalizefun(this.props.category)} - NewsMonkey`;
    }

    async updateNews(){ 
        this.props.setProgress(10);
        //const url = `https://newsapi.org/v2/top-headlines?apiKey=5ceb803ed42246098009b172edbd3b48&country=${this.props.country}&category=${this.props.category}&pageSize=${this.props.pageSize}&page=${this.state.page}`;   
       const url = `https://newsapi.org/v2/top-headlines?apiKey=${this.props.apiKey}&country=${this.props.country}&category=${this.props.category}&pageSize=${this.props.pageSize}&page=${this.state.page}`;        
        this.setState({loading:true})
        let data = await fetch(url);
        this.props.setProgress(30);
        let parsedData = await data.json();
        this.props.setProgress(70);
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading:false
        });
        this.props.setProgress(100);
    }

    async componentDidMount(){
        this.updateNews();
    }

    handlePrevClick = async () => {   
        this.setState({page: this.state.page-1});
        this.updateNews();
    }
    handleNextClick = async () => {
        this.setState({page: this.state.page+1});    
        this.updateNews();
    }
    fetchMoreData = async () => {
        this.setState({page: this.state.page+1});    
        const url = `https://newsapi.org/v2/top-headlines?apiKey=${this.props.apiKey}&country=${this.props.country}&category=${this.props.category}&pageSize=${this.props.pageSize}&page=${this.state.page+1}`;        
       // this.setState({loading:true})
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: this.state.articles.concat(parsedData.articles),
            totalResults: parsedData.totalResults
        });
        console.log(this.state.totalResults);
        console.log(this.state.articles.length);
      };
  render() {
    return (
        <>
       <h2 className='text-center'style={{margin:"35px 0px"}}>NewsMonkey - Top Headlines from {this.captalizefun(this.props.category)}</h2> 
        {this.state.loading && <Spinner />}       
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner/>}
        >
            <div className="container">
                <div className="row">
                        {this.state.articles.map((element)=>{
                                return <div className="col-md-3" key={element.url}>
                                    <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imgUrl={element.urlToImage} newsUrl={element.url} newsTime={element.publishedAt} author={element.author} source={element.source.name}/>
                                    </div>  
                        })}
                </div>
            </div>
        </InfiniteScroll>
        {/* <div className="container d-flex justify-content-center">
            <button disabled={this.state.page<=1} type="button" className="btn me-5 btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
            <button disabled={this.state.page+1> Math.ceil(this.state.totalRecords/this.props.pageSize)}  type="button" className="btn p-2 btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div> */}
      </>
    )
  }
}

export default News
