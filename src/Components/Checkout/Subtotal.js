import React from 'react';
import './Subtotal.css';
import CurrencyFormat from "react-currency-format";

function SubTotal() {
    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => {
                    <div>
                        <p>
                            Subtotal ({/*basket.length*/}0 items);
                            <strong>{/*`${value}`*/0}</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" /> This order contains a gift
                        </small>
                    </div>
                }}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"€"}
            />
        </div>
    )
}

export default SubTotal
