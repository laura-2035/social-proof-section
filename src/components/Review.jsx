import React from 'react'
import '../components/Card.scss'
export default props => {
    return (
        <div className="reviews">
            <div className="user-info-wrapper">
                <img src={props.imgsource}></img>
                <div className="user-info">
                    <p className="username">{props.username}</p>
                    <p className="verified">{props.userverified}</p>
                </div>
            </div>    
            <blockquote className="review">" {props.review} "</blockquote>
        </div>
    )
}