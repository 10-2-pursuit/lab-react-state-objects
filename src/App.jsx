
import React, { useState } from 'react';
import Footer from './Footer';
import Header from './Header';
import MenuList from './MenuList'; 
import data from './data';

function App() {
  const [currentOrder, setCurrentOrder] = useState([]);
  const [totalCost, setTotalCost] = useState(0);

  const addToOrder = (item) => {
    setCurrentOrder([...currentOrder, item]);
    setTotalCost((prevTotal) => prevTotal + item.price);
  };

  const removeFromOrder = (index) => {
    const removedItem = currentOrder[index];
    setCurrentOrder(currentOrder.filter((_, i) => i !== index));
    setTotalCost((prevTotal) => prevTotal - removedItem.price);
  };

  const tidyOrder = () => {
    const tidiedOrder = currentOrder.reduce((acc, item) => {
      const existingItem = acc.find((el) => el.id === item.id);
      existingItem
        ? (existingItem.quantity += 1)
        : acc.push({ ...item, quantity: 1 });
      return acc;
    }, []);
    setCurrentOrder(tidiedOrder);
    setTotalCost(tidiedOrder.reduce((total, item) => total + item.price * item.quantity, 0));
  };

  const closeOrder = () => {
    setCurrentOrder([]);
    setTotalCost(0);
  };

  return (
    <div className="App">
      <Header />
      <main>
        <aside>
          <table>
            <tbody>
              {data.map((item) => (
                <MenuList key={item.id} item={item} onAddToOrder={addToOrder} /> 
              ))}
            </tbody>
          </table>
        </aside>
        <section>
          <div>
            <h2>Current Order</h2>
            <ul>
              {currentOrder.map((item, index) => (
                <li key={item.id}>
                  {item.name} - ${item.price} x {item.quantity}{' '}
                  <button onClick={() => removeFromOrder(index)}>❌</button>
                </li>
              ))}
            </ul>
            <h4>Total: ${totalCost}</h4>
            <div>
              <button onClick={tidyOrder}>Tidy order</button>
              <button onClick={closeOrder}>Close order</button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
