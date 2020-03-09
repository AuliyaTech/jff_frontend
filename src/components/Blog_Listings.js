import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import client from "../config";
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

let unsubscribeSubject = new Subject();


class Blog_Listings extends Component {
  constructor(props){
    super(props)

    this.state={
      loaded: false,
      articles: null
    };
  }

  fetchArticles() {
    client
    .items()
    .elementsParameter(['url', 'title'])
    .toObservable()
    .pipe(takeUntil(unsubscribeSubject))
    .subscribe(res =>{
      console.log(res.items);
      this.setState({
        loaded: true,
        articles: res.items
      })
    });
  }

  componentDidMount() {
    this.fetchArticles();
  };

  unsubscribe() {
    unsubscribeSubject.next();
    unsubscribeSubject.complete();
  }

  componentWillUnmount() {
    this.unsubscribe();
  }
  
  render() {
    if(this.state.loaded){
      return(
        <ul>
          {this.state.articles.map( article =>{
            return (
              <li key={article.url.value}>
                <Link to={`/post/${article.url.value}`}>
                  {article.title.value}
                </Link>
              </li>
            )
          }
          )
        }
        </ul>
      )
    }
  
    else{
      return (
        <div>
          ...loading
        </div>
      );
    }
  }
}

export default Blog_Listings;