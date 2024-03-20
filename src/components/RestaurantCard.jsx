  import { CLOUDINARY_CDN_URL } from "../utils/constants";
  
  const RestaurantCard = ({ resData: { info } }) => {
    return (
      <div className="res-card w-full sm:w-64 p-2 bg-yellow-200 hover:bg-yellow-300 border transition-all shadow-md">
        <div className="card-img overflow-hidden">
          <img className="object-cover transition-all hover:scale-110"
            src={ CLOUDINARY_CDN_URL + info?.cloudinaryImageId }
          />
        </div>
        <div className="dish-desc flex justify-between items-center mt-1">
          <p className="dish-name font-semibold text-lg">{info?.name}</p>
          <p className="dish-rating min-w-12 text-sm bg-lime-600 px-1 font-semibold text-white border rounded-sm text-center">{info?.avgRatingString} &#9733;</p>
        </div>
        <div className="dish-footer text-sm text-gray-700 flex justify-between">
          <p className="dish-cuisine flex-1">
            {info?.cuisines.join(", ").slice(0, 30) + "..."}
          </p>
          <p className="dish-price">{info?.costForTwo}</p>
        </div>
      </div>
    );
  };

  export default RestaurantCard;