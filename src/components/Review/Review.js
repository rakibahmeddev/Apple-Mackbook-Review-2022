import React from "react";
import useReview from "../../hooks/useReview";
import ReviewCardPage from "../ReviewCard/ReviewCardPage";

const Review = () => {
  const [reviews, setReviews] = useReview();
  return (
    <div>
      <div class=" flex items-center justify-center bg-gradient-to-b from-blue-800 to-blue-600 h-64">
        <h2 className="md:text-5xl text-3xl text-white text-center font-medium">
          Customer Reviews
        </h2>
      </div>

      <div className="py-20 px-20 bg-slate-50">
        <div className=" grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-5  ">
          {reviews.map((review) => (
            <ReviewCardPage key={review.id} review={review}></ReviewCardPage>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Review;
