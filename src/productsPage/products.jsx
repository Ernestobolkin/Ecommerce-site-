import React from "react";
import { MoackApi } from "../api/mockApi";
import "./products.scss";

export class Products extends React.Component {
  state = {
    data: [],
  };
  exportData = async () => {
    const data = await MoackApi.getUsersData();
    this.setState({ data });
    console.log(data);
  };

  componentDidMount() {
    this.exportData();
  }

  addToCart = (id, title, img, price, quantity) => {
    this.props.setCartCounter(this.props.cartCounter + 1);
    let tempArr = [];
    let bool = this.props.cartCheck.findIndex((item) => {
      return item.id === id;
    });
    if (this.props.cartCheck.length === 0 || bool === -1) {
      console.log("hello world");
      quantity = quantity + 1;
      // this.props.setSumToPay((prevState) => {
      //   return prevState + +price * quantity;
      // });
      tempArr.push({ id, title, img, price, quantity });
      this.props.setCartCheck([...this.props.cartCheck, ...tempArr]);
    } else {
      tempArr = this.props.cartCheck.map((item) => {
        if (item.id === id) {
          item.quantity = item.quantity + 1;
          return item;
        } else {
          return item;
        }
      });
      this.props.setCartCheck([...tempArr]);
    }

    // console.log(this.props.sumToPay);
  };

  renderItems = () => {
    return this.state.data.map((item) => {
      return (
        <div key={item.id} className="itemContainer">
          <div className="imgContainer">
            <img src={item.img} alt="product" />
          </div>
          <div className="titleContainer">{item.title}</div>
          <div className="priceContainer">
            Price: <span>${item.price}</span>
          </div>
          <div className="description">{item.description}</div>
          <button
            className="btn"
            onClick={() =>
              this.addToCart(
                item.id,
                item.title,
                item.img,
                item.price,
                item.quantity
              )
            }
          >
            Add to Cart
          </button>
        </div>
      );
    });
  };

  render() {
    return <div className="wholeItemsContainer">{this.renderItems()}</div>;
  }
}
