import "./checkOut.scss";

export const CheckOut = (props) => {
  const updateQuantity = (id, text, price, quantity) => {
    if (text === "+") {
      props.setSumToPay(props.sumToPay + +price);
      props.setCartCheck(
        props.cartCheck.map((item) => {
          return item.id === id
            ? { ...item, quantity: item.quantity + 1 }
            : item;
        })
      );
      props.setCartCounter(props.cartCounter + 1);
    } else {
      props.setSumToPay(props.sumToPay - +price);
      props.setCartCheck(
        props.cartCheck.map((item) => {
          return item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item;
        })
      );
      props.setCartCounter(props.cartCounter - 1);
      if (quantity <= 1) {
        let tempArr = props.cartCheck.filter((item) => {
          if (item.id !== id) {
            return item;
          }
        });
        props.setCartCheck(tempArr);
      }
    }
  };
  const renderCheckOut = () => {
    return props.cartCheck.map((item) => {
      return (
        <div key={item.id} className="checkOutCard">
          <div>
            <img src={item.img} alt="CheckOut" />
          </div>
          <div>{item.title}</div>
          <div>
            <span> Price: {item.price}</span>
          </div>
          <div>quantity: {item.quantity}</div>
          <div className="buttons">
            <button
              className="btn"
              onClick={() =>
                updateQuantity(item.id, "+", item.price, item.quantity)
              }
            >
              +
            </button>
            <button
              className="btn"
              onClick={() =>
                updateQuantity(item.id, "-", item.price, item.quantity)
              }
            >
              -
            </button>
          </div>
          <hr />
        </div>
      );
    });
  };

  const payMethod = () => {
    props.setCartCheck([]);
    props.setCartCounter(0);
    props.setSumToPay(0);
  };

  return (
    <div className="checkOutContainer">
      <div className="payContainer">
        <button className="btn" onClick={() => payMethod()}>
          Pay
        </button>{" "}
        <p className="total">
          Total:<span> {props.sumToPay}</span>
        </p>
      </div>
      <div className="cartContainer">{renderCheckOut()}</div>
    </div>
  );
};
