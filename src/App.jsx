import Footer from "./Footer";
import Header from "./Header";
import  menuItems  from "./data";
import { useState } from 'react';
// import ReactTable from "react-table";
import './index.css';

function App() {
  const [currentOrder, setOrder] = useState([]);
  const [total, setTotal] = useState(0);

  const addToOrder = (menuItems) => {
    setOrder((prevItems) => [...prevItems, menuItems]);
    setTotal((prevTotal) => prevTotal + menuItems.price);
  }

  const clearOrder = () => {
    setOrder([]);
    setTotal(0)
  }

  const removeItem = (itemId) => {
    const filteredItem = currentOrder.findIndex((item) => item.id === itemId)
    const deletedItem = currentOrder[filteredItem];

    const newTotal = total - deletedItem.price;

    const updateOrder = [...currentOrder]
    updateOrder.splice(filteredItem, 1)

    setTotal(newTotal)
    setOrder(updateOrder)
  }
  return (
    <div className="App">
      <Header />
      <main>
        <aside>
          <table>
            <tr>
              <td className="item-name">
  <span>ITEM NAME</span> <br></br>
  <span>Correct number of 🌶️, based on Spice level</span>
</td>
              <td>Price</td>
              <td>Image</td>
            </tr>
          </table>
        </aside>
        <section>
          <div>
            <h2>Current Order</h2>
            <ul></ul>
            <h4>Total:</h4>
            <div>
              <button>Tidy order</button>
              <button>Close order</button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
