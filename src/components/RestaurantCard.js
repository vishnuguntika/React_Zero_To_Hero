import { IMG_CDN_URL } from "../constants";
const RestaurantCard = ({
  // props - passing an arguments
  name,
  cuisines,
  deliveryTime,
  cloudinaryImageId,
}) => {
  return (
    <div className="card">
      <img
        src={
          IMG_CDN_URL +
          cloudinaryImageId
        }
      />
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{deliveryTime} minutes</h4>
    </div>
  );
};

export default RestaurantCard;