import React from 'react';
import { Link } from 'react-router-dom';
import useReview from '../../hook/useReview';
import './Home.css'

const Home = () => {
    let [reviews, setReviews] = useReview();
    let { name, id, body, ratting, userImg } = reviews;
    let homeReviewId = 3
    let homeReview = reviews.filter(review => review.postId === homeReviewId);
    console.log(homeReview);
    // console.log(homeReview[1].name);
    return (
        <div >
            <div className='home-container'>
                <div className='bike-details'>
                    <h1>  BUY AS YOUR NEXT BIKE  </h1>
                    <h2> BEST BIKE FOR YOU </h2>
                    <p>  Riding a bike is healthy, fun and a low-impact form of exercise for all ages. Cycling is easy to fit into your daily routine by riding to the shops, park, school or work. </p>
                    <button> BUY NOW </button>
                </div>
                <div>
                    <img src="bike.png" alt="" />
                </div>
            </div>
            <div className='home-review-container'>
                <h1> Customer Reviews:- {homeReview.length} </h1>
                <div className='reviews-container'>
                    {
                        homeReview.map(rev => <div className='per-review'>
                            <div className='review-container'>
                                <div>
                                    <img src={rev.userImg} alt="" />
                                </div>
                                <div>
                                    <h2>{rev.name}</h2>
                                    <p> Comments:- {rev.body} </p>
                                    <p className='ratting'> Ratting: {rev.ratting} </p>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
                <Link to='/review'> <button > See all Reviews  </button> </Link>
            </div>
        </div>
    );
};

export default Home;