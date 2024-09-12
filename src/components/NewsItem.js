import React from 'react'

export default function NewsItem(props) {           
  return (
    <>
        <div className="card news-item" >
          <div className='card-thumbnail-img'>
            <img src={props.imgUrl} className="card-img-top " alt="..."/>
          </div>
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.description}</p>
                <a href={props.newsUrl} className="btn btn-primary read-more-btn">Read More</a>
            </div>
        </div>
    </>
  )
}
