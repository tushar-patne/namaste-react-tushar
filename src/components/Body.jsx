import RestaurantCard from "./RestaurantCard";
import ShimmerCardContainer from "./ShimmerCardContainer";
import resList from "../utils/mockData"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus"; 

const Body = () => {

  const [restaurants, setRestaurants] = useState([]);
  const [filteredRest, setFilteredRest] = useState([]);
  const [searchRes, setSearchRes] = useState("");

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    let data = await fetch("https://proxy.cors.sh/https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0480901&lng=72.9319533&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING", {
      headers: {
        'x-cors-api-key': 'temp_84744ea3992cd29b52dc5e14a211ac25',
      }
    });
    data = await data.json();
    console.log(data);
    // console.log(data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setRestaurants(data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRest(data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }

  const filterTopRatedRestau = () => {
    let filtered_res = restaurants.filter((element) => element.info.avgRating > 4.5);
    // console.log(filtered_res);
    setFilteredRest(filtered_res);
  }

  const clearFilter = async () => {
    await fetchData();
  }

  const handleSearchChange = (e) => {
    setSearchRes(e.target.value);
    setFilteredRest(restaurants.filter((element) => element.info.name.toLowerCase().includes(e.target.value.toLowerCase())));
  }

  // if (restaurants.length == 0) {
  //   return (
  //     <div className="body">
  //       <ShimmerCardContainer />
  //     </div>
  //   )
  // }

  const isOnline = useOnlineStatus();

  if (!isOnline) {
    return (
      <div className="body">
        <h2>You are offline 😴, please check your internet connection 🧐.</h2>
      </div>
    )
  }

  return restaurants.length === 0 ?
    <div className="body">
      <ShimmerCardContainer />
    </div>
    : (
      <div className="body w-full sm:w-5/6 mx-auto">
        <div className="searchBox flex flex-col sm:flex-row mx-10 mt-4 mb-2 gap-2">
          <input className="flex-1 border border-black outline-none px-4 py-2" type="search" size="30" placeholder="Search..." name="search" id="search" value={searchRes} onChange={(e) => handleSearchChange(e)} />
          <button className="px-4 py-2 bg-green-200 hover:bg-green-300">Search</button>
        </div>
        <div className="filter mx-10 mb-4">
          <button className="filter-btn px-4 py-2 mr-2 bg-sky-200 hover:bg-sky-300" onClick={filterTopRatedRestau} >Top Rated Restaurants</button>
          <button className="filter-btn px-4 py-2 bg-rose-200 hover:bg-rose-300" onClick={clearFilter} >Clear filter</button>
        </div>
        <div className="res-container flex flex-wrap gap-4 mx-10 justify-between">
          {filteredRest.map((restaurant, index) => (
            <Link to={`/restaurant/${restaurant?.info?.id}`} key={restaurant?.info?.id}>
              {restaurant?.info?.avgRating >= 4.5 && <label className="bg-rose-600 text-white rounded-sm text-xs absolute p-1 z-10 shadow-md shadow-white">promoted</label> }
              <RestaurantCard resData={restaurant} />
            </Link>
          ))}
        </div>
      </div>
    );
};

export default Body;