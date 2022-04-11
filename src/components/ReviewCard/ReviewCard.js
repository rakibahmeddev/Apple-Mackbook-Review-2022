import React from "react";

const ReviewCard = (props) => {
  const { review, picture, name, rating } = props.review;
  //   console.log(review.name);
  return (
    <div>
      <div className="bg-white text-black rounded-lg py-5 px-5">
        <p>{review}</p>

        <div className="flex justify-between items-center">
          <div className="flex items-center mt-5">
            <img className="rounded-full" width="60px" src={picture} alt="" />
            <div>
              <h4 className="text-black font-medium mx-3">{name}</h4>
            </div>
          </div>
          <div className="rating">
            <p className="font-medium mt-5">
              Ratting: <span>{rating}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
