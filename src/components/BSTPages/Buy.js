import React from "react";
import BuyInventory from "../BuyComponents/BuyInventory";
import BuyCart from "../BuyComponents/BuyCart";
import "../../Style/FishMarket.css"


const Buy = () =>

    <div>
        <div className="row">
            <div className="col s8">
                <h5>Buy Fish and Accoutrement</h5>
            </div>
            <div className="col s4">   
                <h5>Your Shopping Cart</h5>
            </div>
        </div>
        
        <div className="row">
            <div className="col s8">
                <BuyInventory />                
            </div>

            <div className="col s4">
                <BuyCart />
            </div>
        </div>
    </div>

    

export default Buy;