import React from "react";
import "./InventoryCards.css"

//Props--pulling price from item stored in the database

const InventoryCards = props => (
    
    <div>         
        <div class="row">
            <div class="col s3">
                <div class="card">
                    <div class="card-image">
                        <img src="http://via.placeholder.com/140x100" />
                        
                        <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add</i></a>
                    </div>
                    <div class="card-content">
                        <p>Item Name</p>
                        <p>{props.price}</p>
                        </div>
                    </div>
                </div>
            </div>
    </div>    
);
    

export default InventoryCards;