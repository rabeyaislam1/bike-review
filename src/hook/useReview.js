import { useEffect, useState } from "react"

let useReview = () => {
    let [review, setReview] = useState([]);
    useEffect(() => {
        fetch('reviews.json')
        .then(res => res.json())
        .then(data => setReview(data));
    },[]);
    return [review, setReview];
}

export default useReview;