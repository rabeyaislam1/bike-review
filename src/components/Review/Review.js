import React from 'react';
import useReview from '../../hook/useReview';
import './Review.css';

const Review = () => {
    let [reviews, setReviews] = useReview();
    let { name, id, body, ratting, userImg } = reviews;
    return (
        <div>
            <div className='reviews-container'>
                {
                    reviews.map(review => <div className='per-review'>
                        <div className='review-container'>
                            <div>
                                <img src={review.userImg} alt="" />
                            </div>
                            <div>
                                <h2>{review.name}</h2>
                                <p> Comments:- {review.body} </p>
                                <p className='ratting'> Ratting: {review.ratting} </p> 
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Review;