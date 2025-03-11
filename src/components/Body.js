import { restaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

function filterData(searchTxt, restaurants){
  return restaurants.filter((restaurant) => restaurant.info.name.includes(searchTxt));
  
    
}
const Body = () => {
  const [restaurants, setRestaurants] = useState(restaurantList);
  const [searchTxt, setSearchTxt] = useState(""); // returns = [variable name, function to update the variable], can pass the dafault value. 
  
  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchTxt}
          onChange={(e) =>{
            // e.target.value = whatever we write in input.
             setSearchTxt(e.target.value);
          }}
        />
        <button className="search-btn" onClick={() =>{
         // need to filter the data
         const data = filterData(searchTxt, restaurants);
         // update the state - restaurants
         setRestaurants(data);
          
        } }>Search</button>
      </div>


      <div className="Restaurant-list">
        {
          // map() - traversing the info.
          // <RestaurantCard {...restaurantList[0].info} />
          restaurants.map((restaurant) => {
            return (
              <RestaurantCard {...restaurant.info} key={restaurant.info.id} />
            );
          })
        }
      </div>
    </>
  );
};

export default Body;
