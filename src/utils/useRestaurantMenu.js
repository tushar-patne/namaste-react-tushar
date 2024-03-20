import React from "react";
import { useEffect, useState } from "react";
import { MENU_API } from "../utils/constants";

const useRestaurantMenu = (resId) => {
    
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchRestMenu();
  }, []);

  const fetchRestMenu = async () => {
    let data = await fetch(MENU_API + resId, {
      headers: {
        "x-cors-api-key": "temp_84744ea3992cd29b52dc5e14a211ac25",
      },
    });
    data = await data.json();
    // console.log(JSON.stringify(data));
    setResInfo(data?.data);
  };

  return resInfo;
};

export default useRestaurantMenu;
