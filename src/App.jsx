import { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import menuItems from "./data" ;


function App() {
const [currentOrder, setCurrentOrder]= useState([]);
const [totalCost, setTotalCost] = useState(0);

const renderSpiceLevel = (spiceLevel) => {
  return '🌶️'.repeat(spiceLevel);
}; 
const addToOrder = (menuItem) => {
  setCurrentOrder([...currentOrder, menuItem]);
  setTotalCost(totalCost + menuItem.price);
};
const removeFromOrder = (menuItem) => {
  setCurrentOrder(currentOrder.filter((item) => item.id !== menuItem.id));
  setTotalCost(totalCost - menuItem.price);
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
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
        
            {menuItems.map((menuItem) => (
              <tr key={menuItem.id} onClick={() => addToOrder(menuItem)}>
                <td>
                  <span role="img" aria-label={menuItem.name}>
                    {menuItem.image}
                  </span>
                </td>
                <td className="item-name">
                  <span>{menuItem.name}</span> <br />
                  <span>{renderSpiceLevel(menuItem.spiceLevel)}</span>
                </td>
                <td>${menuItem.price}</td>
              </tr>
            ))}
         
        </table>
      </aside>
      <section>
        <div>
          <h2>Current Order</h2>
          <ul>
            {currentOrder.map((menuItem) => (
              <li key={menuItem.id}>
                <span>{menuItem.name}</span> - ${menuItem.price}{' '}
                <span role="img" aria-label={menuItem.name} onClick={() => removeFromOrder(menuItem)}>
                  ❌
                </span>
              </li>
            ))}
          </ul>
          <h4>Total: ${totalCost}</h4>
          <div>
            <button onClick={closeOrder}>Tidy order</button>
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