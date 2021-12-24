import "./checkOut.scss";

export const CheckOut = (props) => {
  const updateQuantity = (id, text) => {
    if (text === "+") {
      props.setCartCheck(
        props.cartCheck.map((item) => {
          return item.id === id
            ? { ...item, quantity: item.quantity + 1 }
            : item;
        })
      );
      props.setCartCounter(props.cartCounter + 1);
    } else {
      props.setCartCheck(
        props.cartCheck.map((item) => {
          return item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item;
        })
      );
      props.setCartCounter(props.cartCounter - 1);
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
            <button className="btn" onClick={() => updateQuantity(item.id, "+")}>+</button>
            <button className="btn" onClick={() => updateQuantity(item.id, "-")}>-</button>
          </div>
          <hr />
        </div>
      );
    });
  };

  const payMethod=()=>{
    props.setCartCheck([])
    props.setCartCounter(0)
  }

  return (
    <div className="checkOutContainer">
      <button className="btn" onClick={()=> payMethod()}>Pay</button>
      <div className="cartContainer">{renderCheckOut()}</div>
    </div>
  );
};
