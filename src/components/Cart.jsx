import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
    const itemCards = useSelector(store => store.cart.items)
    let totalBill = 0;
    itemCards.forEach(x => {
        totalBill += x.card.info.price ? x.card.info.price / 100 : x.card.info.defaultPrice / 100;
    });
    const dispatch = useDispatch();
    return (
        <div className="m-4 p-4 w-1/2">
            <div className="flex justify-between m-4">
                <h2 className="text-center text-2xl font-bold">Cart 🛒</h2>
                {itemCards.length > 0 && <button className="py-0.5 px-1 bg-white text-rose-700 font-semibold text-md border-2 border-rose-700 rounded hover:bg-rose-100 transition-all" onClick={() => dispatch(clearCart())}>Clear ❌</button>}
            </div>
            <ItemList itemCards={itemCards} />
            {
                itemCards.length > 0 
                ?
                <div className="flex justify-between mx-4 my-2 font-bold text-xl">
                    <div>Total bill:</div>
                    <div>₹ {totalBill}</div>
                </div> 
                :
                <div className="font-semibold flex flex-col justify-center text-center my-10">
                    <h1>Nothing in your cart.</h1>
                    <h1>Add delicious items to your cart <span className="text-xl">😋</span></h1>
                </div>
            }
        </div>
    )
}

export default Cart;