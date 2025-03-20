import { restaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom";

function filterData(searchTxt, restaurants) {
  return restaurants.filter((restaurant) =>
    restaurant?.info?.name?.toLowerCase()?.includes(searchTxt.toLowerCase())
  );
}
const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  // const [restaurants, setRestaurants] = useState(restaurantList);
  const [searchTxt, setSearchTxt] = useState(""); // returns = [variable name, function to update the variable], can pass the dafault value.

  // useEffect has two things callback function and dependency.
  // we need to call useEffect only on when searchTxt is called.

  // empty dependency array => once after render
  // dependency array [searchTxt] => once after initial render + everytime ater render (my searchTxt changes)
  useEffect(() => {
    // API call
    getRestaurants();
  }, []); // here, there is no dependency so it renders after the render.
  // If there, is no dependency as no array itself, then it calls for every render.

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9046136&lng=77.614948&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    // console.log(json);
    //Optional Chaining
    setAllRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }

  console.log("render");

  //conditional Rendering

  // if restaurant is empty ==> shimmer UI
  // if restaurant has data ==> actual data UI

  // early return (not render component) - when there is no allRestaurants
  if (!allRestaurants) return null;

  // if(filteredRestaurant?.length === 0) return <h1>No Restaurant match your filter</h1> -- Done, implemented.

  return allRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchTxt}
          onChange={(e) => {
            // e.target.value = whatever we write in input.
            setSearchTxt(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            // need to filter the data
            const data = filterData(searchTxt, allRestaurants);
            // update the state - restaurants
            setFilteredRestaurant(data);
          }}
        >
          Search
        </button>
      </div>

      <div className="Restaurant-list">
        {
          // Ternary operator.
          filteredRestaurant.length === 0 ? (
            <h1>No Restaurant matches your filter</h1>
          ) : (
            /**You have to write the logic, when the filtered Restaurant not there. */
            filteredRestaurant.map((restaurant) => {
              return (
                <Link to={"/restaurant/" + restaurant.info.id} 
                key={restaurant.info.id}>
                <RestaurantCard {...restaurant.info}  />
                </Link>
              );
            })
          )
        }
      </div>
    </>
  );
};

export default Body;
