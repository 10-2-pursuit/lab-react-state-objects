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
          {menuItems.map((menu)=>{
              return (
                <tr className={menu.name} >
                  <td>{menu.image}</td>
                  <td>
                    <span onClick={() => {addToOrder(menu)}}>{menu.name}</span> <br />
                    <span>Spice level: {menu.spiceLevel}</span>
                  </td> 
                  <td>${menu.price}</td>
                </tr>
              )
            })}
          </table>
        </aside>
        <section>
          <div>
            <h2>Current Order</h2>
           <ul>
           {currentOrder.map((item) => (
                  <li key={item.id}>
                    <button onClick={()=> {removeItem(item.id)}}>❌</button> 
                    {item.name} ${item.price}
                  </li>
                ))}
            </ul>
            <h4>Total: ${total}</h4>
            <div>
              <button>Tidy order</button>
              <button onClick={() => {clearOrder()}}>Close order</button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
