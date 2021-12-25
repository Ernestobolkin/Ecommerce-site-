import React, { useState } from "react";
import { MainPage } from "./mainPage";
import { Products } from "./productsPage/products";
import { BrowserRouter, Route } from "react-router-dom";
import { NavBar } from "./navBar/navbar";
import { CheckOut } from "./checkPage/checkout";
import "./app.scss";

const App = () => {
  const [cartCounter, setCartCounter] = useState(0);
  const [cartCheck, setCartCheck] = useState([]);
  const [sumToPay, setSumToPay] = useState(0);


  return (
    <div className="container">
      <BrowserRouter>
        <NavBar cartCounter={cartCounter} cartCheck={cartCheck} />
        <Route path="/" exact component={MainPage}></Route>
        <Route path="/Products" exact>
          <Products
            cartCounter={cartCounter}
            setCartCounter={setCartCounter}
            cartCheck={cartCheck}
            setCartCheck={setCartCheck}
            sumToPay={sumToPay}
            setSumToPay={setSumToPay}
          />
        </Route>
        <Route path="/checkout" exact>
          <CheckOut
            cartCheck={cartCheck}
            setCartCheck={setCartCheck}
            cartCounter={cartCounter}
            setCartCounter={setCartCounter}
            sumToPay={sumToPay}
            setSumToPay={setSumToPay}
          />
        </Route>
      </BrowserRouter>
    </div>
  );
};
export default App;
