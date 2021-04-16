import React from 'react'

export default props => {
    return (
        <div className="reviews">
            <img src={props.imgsource}></img>
            <username>{props.username}</username>
            <userverified>{props.userverified}</userverified>
            <blockquote>"{props.review}"</blockquote>
        </div>
    )
}