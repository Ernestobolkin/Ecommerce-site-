import React from "react";
import { Link } from "react-router-dom";
import "./navBar.scss"

export class NavBar extends React.Component {
  render() {
    return (
      <div className="navBar">
        <Link className="home link" to="/">Home Page</Link>
        <Link className="product link" to="/Products">Products</Link>
        <Link className="link right" to="/checkout"><i className="fas fa-shopping-cart"></i> <span>{this.props.cartCounter}</span></Link>
      </div>
    );
  }
}
