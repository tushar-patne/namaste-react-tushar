import React, {useState} from 'react'
import { CLOUDINARY_CDN_URL } from '../utils/constants';
import nonvegImg from "../images/icons8-non-vegetarian-food-symbol-48.png"
import vegImg from "../images/icons8-vegetarian-food-symbol-48.png"
import { useDispatch } from 'react-redux';
import { addItem } from "../utils/cartSlice"

const ItemList = ({itemCards}) => {
    const dispatch = useDispatch();
    return (
        <div>
            {itemCards.map(x => (
                <div key={x.card.info.id} className='flex flex-col-reverse sm:flex-row border-b-2 p-2 m-2'>
                    <div className='sm:w-9/12'>
                        <p className='w-5'><img src={x.card.info.isVeg ? vegImg : nonvegImg} alt="nonveg" /></p>
                        <p className='font-semibold'>{x.card.info.name} - ₹{x.card.info.price ? x.card.info.price / 100 : x.card.info.defaultPrice / 100}</p>
                        <p className='text-sm text-slate-600'>{x.card.info.description}</p>
                    </div>
                    <div className='sm:w-3/12 flex flex-col'>
                        <img src={CLOUDINARY_CDN_URL + x.card.info.imageId} alt="image" />
                        <button className='p-1 text-sm rounded-sm bg-sky-600 hover:bg-opacity-80 transition-all ease-in-out text-white' onClick={() => dispatch(addItem(x))}>Add +</button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ItemList