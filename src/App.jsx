// App.js
import React, { useState } from "react";
import menu from "./data";
import Header from "./Header";
import Footer from "./Footer";
import "./App.css";

const App = () => {
  // State for storing the current order items
  const [currentOrder, setCurrentOrder] = useState([]);
  const [totalCost, setTotalCost] = useState(0);
  const [tidyOrder, setTidyOrder] = useState(false);

  // Function to add an item to the current order
  const addItemToOrder = (item) => {
    setCurrentOrder([...currentOrder, item]);
    setTotalCost((prevTotal) => prevTotal + item.price);
  };

  // Function to remove an item from the current order
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

  // Function to reset the current order and total cost
  const closeOrder = () => {
    setCurrentOrder([]);
    setTotalCost(0);
    setTidyOrder(false);
  };

  // Function to tidy the order
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
        {/* Menu */}
        <div className="menu">
          <h2>Menu</h2>
          <table>
            <tbody>
            {menu.map((item) => (
            <tr key={item.id} onClick={() => addItemToOrder(item)}>
              <td>
                <img src={item.image} alt={item.name} />
              </td>
              <td className="item-name">
                <span>{item.name}</span>
                <br />
                <span>
                  {Array(item.spiceLevel)
                    .fill("🌶️")
                    .join("")}
                </span>
              </td>
              <td>${item.price}</td>
            </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Current Order */}
        <div>
  <h2>Current Order</h2>
  {tidyOrder && (
    <ul>
      {currentOrder.map((item) => (
        <li key={item.id}>
          {item.name} x {item.quantity} - ${item.price * item.quantity}{" "}
          <button onClick={() => removeItemFromTidyOrder(item.id)}>❌</button>
        </li>
      ))}
    </ul>
  )}
  <p>Total: ${totalCost}</p>
          <button onClick={closeOrder}>Close order</button>
          <button className="tidy-button" onClick={tidyCurrentOrder}> Tidy Order</button>
          </div>
          </div>
      <div>
      <Footer />
    </div>
    </div>
  );
  }


export default App;