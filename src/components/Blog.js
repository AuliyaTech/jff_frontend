import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import client from "../config";
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

let unsubscribeSubject = new Subject();

class Blog extends Component {
    constructor(props){
        super(props);

        this.state={
            loaded: false,
            article: null
        }
    }

    fetchArticle(slug){
        client
        .items()
        .equalsFilter('elements.url', slug)
        .depthParameter(1)
        .toObservable()
        .pipe(takeUntil(unsubscribeSubject))
        .subscribe(
            res => {
                console.log(res);
                this.setState({
                    loaded: true,
                    article: res.items[0]
                })
            }
        )
    }

    componentDidMount(){
        let slug = this.props.match.params.slug;
        this.fetchArticle(slug);
    }

    unsubscribe() {
        unsubscribeSubject.next();
        unsubscribeSubject.complete();
      }
    
      componentWillUnmount() {
        this.unsubscribe();
      }

  render() {
      if (this.state.loaded){
          const article = this.state.article;
          const title = article.title.value;
          const bodyCopy = article.body.value;
          console.log(bodyCopy)
          return(
              <div>
                  <Link to="/">Home</Link>
                  <h1>{title}</h1>
                  <div className="article_body" 
                  dangerouslySetInnerHTML={{__html: bodyCopy}} />
              </div>
          );
      }
      else {
          return(
              <div>
                  Loading...
              </div>
          )
      }
  }
}

export default Blog;