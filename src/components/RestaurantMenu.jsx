import { useParams } from "react-router-dom";
import { CLOUDINARY_CDN_URL, MENU_API } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {

    const { resId } = useParams();

    const resInfo = useRestaurantMenu(resId);
    // const [showItems, setShowItems] = useState(null);
    const [showIndex, setShowIndex] = useState(0);

    if (!resInfo) {
        return <h2>Loading...</h2>;
    }

    const { id, name, city, areaName } = resInfo?.cards?.at(0).card?.card?.info || {};
    const resMenu = resInfo?.cards?.at(2)?.groupedCard?.cardGroupMap?.REGULAR?.cards?.at(2).card?.card?.itemCards || [];
    // console.log(resMenu);
    console.log(resInfo);
    const categories = resInfo?.cards?.at(2)?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c =>
        c.card.card["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    )
    // console.log(categories);

    return (
        <div className="w-3/6 m-auto">
            {/* <h1>{resInfo?.cards?.at(0).card?.card?.info.name}</h1>
            <h3>{resInfo?.cards?.at(0).card?.card?.info.city}</h3>
            <h3>{resInfo?.cards?.at(0).card?.card?.info.areaName}</h3> */}
            {/* <h2>{id}</h2> */}
            <div className="text-center">
                <h2 className="font-bold text-xl">{name}</h2>
                <h2>{city}, {areaName}</h2>
                {/* <h2>{areaName}</h2> */}
            </div>
            {/* <img
                src={CLOUDINARY_CDN_URL + resInfo?.cards?.at(0).card?.card?.info.cloudinaryImageId}
            /> */}
            {/* <ul>
                {
                    resMenu.map(item => <li key={item?.card?.info?.id}>{item?.card?.info?.name}</li>)
                }
            </ul> */}
            {categories?.map((category, index) => (
                <RestaurantCategory
                    data={category?.card?.card}
                    showItems={index === showIndex ? true : false}
                    setShowIndex={() => setShowIndex(prev => (prev === index ? -1 : index))}
                />
            ))}
        </div>
    )
}

export default RestaurantMenu;