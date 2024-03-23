import React, { useState } from 'react'
import { CLOUDINARY_CDN_URL } from '../utils/constants';
import nonvegImg from "../images/icons8-non-vegetarian-food-symbol-48.png"
import vegImg from "../images/icons8-vegetarian-food-symbol-48.png"
import { useDispatch } from 'react-redux';
import { addItem } from "../utils/cartSlice"
import ItemList from './ItemList';

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  // console.log(data);
  // const [isOpen, setIsOpen] = useState(true);
  const clickHandler = () => {
    setShowIndex();
    // showItems = showItems ? false : true;
  }
  const dispatch = useDispatch();
  return (
    <div className='my-2 p-2 shadow-md bg-slate-100'>
      {/* accordion header */}
      <div className='flex justify-between font-semibold cursor-pointer my-3' onClick={clickHandler} >
        <span>{data.title} ({data.itemCards.length})</span>
        <span>{showItems ? '🔽' : '🔼'}</span>
      </div>
      {/* accordion body */}
      {
        showItems && <ItemList itemCards={data.itemCards} />
      }
    </div>
  )
}

export default RestaurantCategory