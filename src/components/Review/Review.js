import React from "react";
import useReview from "../../hooks/useReview";
import ReviewCardPage from "../ReviewCard/ReviewCardPage";

const Review = () => {
  const [reviews, setReviews] = useReview();
  return (
    <div className="my-20 px-20">
      <h2 className="text-5xl font-medium my-8">Customer Reviews</h2>
      <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-5  ">
        {reviews.map((review) => (
          <ReviewCardPage key={review.id} review={review}></ReviewCardPage>
        ))}
      </div>
    </div>
  );
};

export default Review;
