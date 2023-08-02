import Footer from "./Footer";
import Header from "./Header";
import { useState } from "react";
import menuItems from "./data";

function App() {
  const [order, setOrder] = useState([]);
  function addToOrder(item) {
    setOrder([...order, item]);
  }
  function removeFromOrder(index) {
    let temp = order.slice();
    console.log(temp.splice(index, 1));
    console.log(temp);
    setOrder(temp);
  }
  return (
    <div className="App">
      <Header />
      <main>
        <aside>
          <table>
            {menuItems.map((item) => {
              return (
                <tr onClick={() => addToOrder(item)}>
                  <td>{item.image}</td>
                  <td className="item-name">
                    <span>{item.name}</span> <br />
                    <span>{"🌶️".repeat(item.spiceLevel)}</span>
                  </td>
                  <td>${item.price}</td>
                </tr>
              );
            })}
          </table>
        </aside>
        <section>
          <div>
            <h2>Current Order</h2>
            <ul>
              {order.map((item, index) => {
                return (
                  <li>
                    <span onClick={() => removeFromOrder(index)}>❌</span>
                    <span>{item.name}</span>
                    <span>{item.price}</span>
                  </li>
                );
              })}
            </ul>
            <h4>Total:{order.reduce((sum, li) => sum + li.price, 0)}</h4>
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
