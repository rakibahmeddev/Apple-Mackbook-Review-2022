import React from "react";
import "./ReviewHome.css";
import useReview from "../../hooks/useReview";
import ReviewCard from "../ReviewCard/ReviewCard";

const ReviewHome = () => {
  const [reviews, setReview] = useReview();
  return (
    <div className="review-container">
      <div className=" review-item grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5 my-10 px-20">
        {reviews.slice(0, 3).map((review) => (
          <ReviewCard key={review.id} review={review}></ReviewCard>
        ))}
      </div>
    </div>
  );
};

export default ReviewHome;
