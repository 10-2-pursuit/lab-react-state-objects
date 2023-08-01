// App.js
import React, { useState } from "react";
import menu from "./data";
import Header from "./Header";
import Footer from "./Footer";
import "./App.css"; 

const App = () => {
  const [currentOrder, setCurrentOrder] = useState([]);
  const [totalCost, setTotalCost] = useState(0);
  const [tidyOrder, setTidyOrder] = useState(false);

  const addItemToOrder = (item) => {
    setCurrentOrder([...currentOrder, item]);
    setTotalCost((prevTotal) => prevTotal + item.price);
  };

  const removeItemFromTidyOrder = (itemId) => {
    const updatedOrder = currentOrder.map((item) => {
      if (item.id === itemId && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      } else {
        return item;
      }
    });
  
    setCurrentOrder(updatedOrder.filter((item) => item.quantity > 0));
  };


  const closeOrder = () => {
    setCurrentOrder([]);
    setTotalCost(0);
    setTidyOrder(false);
  };

  const tidyCurrentOrder = () => {
    const orderMap = currentOrder.reduce((acc, item) => {
      if (!acc[item.id]) {
        acc[item.id] = { ...item, quantity: 1 };
      } else {
        acc[item.id].quantity += 1;
      }
      return acc;
    }, {});

    const tidiedOrder = Object.values(orderMap);
    setCurrentOrder(tidiedOrder);
    setTidyOrder(true);
  };


  return (
    <div className="App">
      <Header />

      <div className="content">
  
        <div className="menu">
          <h2>Menu</h2>
          <table className="menu-table">
            <tbody>
              {menu.map((item) => (
                <tr key={item.id} onClick={() => addItemToOrder(item)}>
                  <td>
                    <img src={item.image} alt={item.name} />
                  </td>
                  <td className="item-details">
                    <span>{item.name}</span>
                    <br />
                    <span>
                      {Array(item.spiceLevel)
                        .fill("🌶️")
                        .join("")}
                    </span>
                  </td>
                  <td className="item-price">${item.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="current-order">
          <h2>Current Order</h2>
          <button className="tidy-button" onClick={tidyCurrentOrder}>
            Tidy order
          </button>
          <table className="order-table">
            <tbody>
              {tidyOrder
                ? currentOrder.map((item) => (
                    <tr key={item.id}>
                      <td>
                        <button onClick={() => removeItemFromOrder(item.id)}>❌</button>
                      </td>
                      <td>{item.name} x {item.quantity}</td>
                      <td>${item.price * item.quantity}</td>
                    </tr>
                  ))
                : currentOrder.map((item) => (
                    <tr key={item.id}>
                      <td>
                        <button onClick={() => removeItemFromOrder(item.id)}>❌</button>
                      </td>
                      <td>{item.name}</td>
                      <td>${item.price}</td>
                    </tr>
                  ))}
            </tbody>
          </table>
          <p>Total: ${totalCost}</p>
          <button onClick={closeOrder}>Close order</button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default App;
