import React from "react";
import "./Subtotal.css";
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";
import { useHistory } from "react-router-dom";


function Subtotal() {
  const history = useHistory();
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" />
              This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₹"}
      />
      

      {/* history.push will keep the style of the button and it will also push to the page we want.  We can also do it using '<Link>' but it will give the style of link which we don't want. 'history.push() taked the user to another page we want progamitically'*/}
      <button onClick={e => history.push("/payment")}>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
