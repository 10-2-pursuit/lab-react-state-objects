import Footer from "./Footer";
import Header from "./Header";
import menuItems from "./data";
import { useState } from "react";

function App() {
  const [closeOrder, setClose] = useState(null);
  const [currentOrder, setOrder] = useState([]);
  const [total, setTotal] = useState(0);

  const addToOrder = (menuItems) => {
    setOrder((prevOrder) => [...prevOrder, menuItems]);
    setTotal((prevTotal) => prevTotal + menuItems.price);
  }

  return (
    <div className="App">
      <Header />
      <main>
        <aside>
          <table>
            {menuItems.map((menu)=>{
              return (
                <tr className={menu.name}>
                  <td>{menu.image}</td>
                  <td>
                    <span onClick={() => {addToOrder(menu)}}>{menu.name}</span> <br />
                    <span>Spice level: {menu.spiceLevel}</span>
                  </td> 
                  <td>${menu.price}</td>
                  {/* &#127798; */}
                  {/* &#x1F336; */}
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
                  <li key={item.id}>{item.name}</li>
                ))}
            </ul>
            <h4>Total: ${total}</h4>
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
