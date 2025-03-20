import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { IMG_CDN_URL } from "../constants";
const RestaurantMenu = () => {
  const { resid } = useParams();
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    getRestaurantMenu();
  }, []);

  const getRestaurantMenu = async () => {
    const resdata = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9046136&lng=77.614948&restaurantId=" + resid
    );
    const json = await resdata.json();
    console.log(json);
    setRestaurant(json.data);
  };

  if (restaurant === null) return <Shimmer />;

  const {
    name,
    cuisines,
    costForTwoMessage,
    locality,
    avgRating,
    totalRatingString,
  } = restaurant?.cards?.[2]?.card?.card?.info;

  const { deliveryTime } = restaurant?.cards[2]?.card?.card?.info.sla;

  console.log(restaurant?.cards?.[2]?.card?.card?.info);

  const cards =
  restaurant?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

let itemCards =
  cards.find((c) => c?.card?.card?.itemCards)?.card?.card?.itemCards || [];


  return (
    <div className="menu">
      <div>
        <h1>{name}</h1>
        <h2>{cuisines.join(", ")}</h2>
        <h3>{costForTwoMessage}</h3>
        <h3>{locality}</h3>
        <h3>{avgRating}</h3>
        <h3>{totalRatingString}</h3>
      </div>

      <div>
        <h1>Menu</h1>
        <ul>
          {itemCards.map((item) => (
            <li key={item.card.info.id}>
              <h3>{item.card.info.name}</h3>
              <p>
                {" Rs."}{" "}
                {item.card.info.price / 100 ||
                  item.card.info.defaultPrice / 100}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
