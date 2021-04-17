import React from 'react'
import './Card.scss'
import Review from './Review.jsx'
import anne from '../assets/img/image-anne.jpg'
import colton from '../assets/img/image-colton.jpg'
import irene from '../assets/img/image-irene.jpg'
import star from '../assets/img/icon-star.svg'

export default () => {
    return (
        <section className="social-proof-section">
            <article className="social-proof-article">
                <h2>10,000+ of our users love our products.</h2>
                <p>We only provide great products combined with excellent customer service.
                See what our satisfied customers are saying about our services.</p>
            </article>
            <div className="ratings-wrapper">
                <div className="ratings">
                    <span className="rating"><img src={star} alt=""></img><img src={star} alt=""></img><img src={star} alt=""></img><img src={star} alt=""></img><img src={star} alt=""></img>
                    </span><p>Rated 5 Stars in Reviews</p>
                </div>
                <div className="ratings">
                    <span className="rating"><img src={star} alt=""></img><img src={star} alt=""></img><img src={star} alt=""></img><img src={star} alt=""></img><img src={star} alt=""></img>
                    </span><p>Rated 5 Stars in Report Guru</p>
                </div>
                <div className="ratings">
                    <span className="rating"><img src={star} alt=""></img><img src={star} alt=""></img><img src={star} alt=""></img><img src={star} alt=""></img><img src={star} alt=""></img>
                    </span><p>Rated 5 Stars in BestTech</p>
                </div>
                
            </div>
            <div className="review-wrapper">
                <Review imgsource={colton} username="Colton Smith" userverified="Verified Buyer"
                    review="We needed the same printed design as the one we had ordered a week prior.
                Not only did they find the original order, but we also received it in time.
                Excellent!">
                </Review>
                <Review imgsource={irene} username="Irene Roberts" userverified="Verified Buyer"
                    review="Customer service is always excellent and very quick turn around. Completely
                delighted with the simplicity of the purchase and the speed of delivery.">
                </Review>
                <Review imgsource={anne} username="Anne Wallace" userverified="Verified Buyer" review='Put an order with this company and can only praise them for the very high
                standard. Will definitely use them again and recommend them to everyone!'>
                </Review>
            </div>
        </section>
    )
}