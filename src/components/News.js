import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types';

export class News extends Component {
    
    static defaultProps = {
        country: 'in',
        pageSize: 8,
        category: 'general',
       // pageNo:1, 
    };

    static propTypes = {
        country: PropTypes.string,
        //pageNo: PropTypes.number,
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
            loading:false,
            page:1,
           // pageSize:12
        }
        document.title= `${this.captalizefun(this.props.category)} - NewsMonkey`;
        //let pageNo=1;
    }

    async updateNews(){  
        console.log("Page No"+this.state.page);     
       const url = `https://newsapi.org/v2/top-headlines?apiKey=5ceb803ed42246098009b172edbd3b48&country=${this.props.country}&category=${this.props.category}&pageSize=${this.props.pageSize}&page=${this.state.page}`;
        
        this.setState({loading:true})
        let data = await fetch(url);
        let passedData = await data.json();
        this.setState({totalRecords: passedData.totalResults,loading:false});
        this.setState({articles: passedData.articles,page: this.state.page});
        console.log(this.state.totalRecords);
        console.log(passedData);
    }

    async componentDidMount(){
        this.updateNews();
        // let url = `https://newsapi.org/v2/top-headlines?apiKey=5ceb803ed42246098009b172edbd3b48&country=${this.props.country}&category=${this.props.category}&pageSize=${this.props.pageSize}&page=1`;
        // this.setState({loading:true})
        // let data = await fetch(url);
        // let passedData = await data.json();
        // this.setState({totalRecords: passedData.totalResults,loading:false});
        // this.setState({articles: passedData.articles});
        // console.log(this.state.totalRecords);
        // console.log(passedData);
    }

    handlePrevClick = async () => {
        console.log("Previous")
        // let url = `https://newsapi.org/v2/top-headlines?apiKey=5ceb803ed42246098009b172edbd3b48&country=${this.props.country}&category=${this.props.category}&pageSize=${this.props.pageSize}&page=${this.state.page-1}`;
        // this.setState({loading:true})
        // let data = await fetch(url);
        // let passedData = await data.json();
        // this.setState({page: this.state.page-1,articles: passedData.articles,loading:false});
        
        this.setState({page: this.state.page-1});
        //console.log("Page No"+this.state.page);
        this.updateNews();
    }
    handleNextClick = async () => {
       console.log("Next")
       // console.log("Page No"+this.state.page);
        this.setState({page: this.state.page+1});
       // console.log("Page No"+this.state.page);       
        this.updateNews();
       // console.log(this.state.totalRecords)
    //    if(this.state.page+1 <=Math.ceil(this.state.totalRecords/this.props.pageSize)) {
    //     let url = `https://newsapi.org/v2/top-headlines?apiKey=5ceb803ed42246098009b172edbd3b48&country=${this.props.country}&category=${this.props.category}&pageSize=${this.props.pageSize}&page=${this.state.page+1}`;
    //     this.setState({loading:true})
    //     let data = await fetch(url);
    //     let passedData = await data.json();
    //     this.setState({page: this.state.page+1,articles: passedData.articles,loading:false});
    //    }
    }
  render() {
    return (
      <div className="container my-3">
       <h2 className='text-center'style={{margin:"35px 0px"}}>NewsMonkey - Top Headlines from {this.captalizefun(this.props.category)}</h2> 
        {this.state.loading && <Spinner />}       
        <div className="row">
                {!this.state.loading && this.state.articles.map((element)=>{
                    //if(element.urlToImage !== null){
                        return <div className="col-md-3" key={element.url}>
                            {/* <NewsItem title={element.title.length>20 ? element.title.slice(0,20)+"..." : element.title.slice(0,20)} description={element.description.length>80 ? element.description.slice(0,80)+"..." : element.description.slice(0,80)} imgUrl={element.urlToImage} newsUrl={element.url}/> */}
                            <NewsItem title={element.title} description={element.description} imgUrl={element.urlToImage} newsUrl={element.url} newsTime={element.publishedAt} author={element.author} source={element.source.name}/>
                            </div> 
                    //}     
                })}

        </div>
        <div className="container d-flex justify-content-center">
            <button disabled={this.state.page<=1} type="button" className="btn me-5 btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
            <button disabled={this.state.page+1> Math.ceil(this.state.totalRecords/this.props.pageSize)}  type="button" className="btn p-2 btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News
