import Footer from "./Footer";
import Header from "./Header";
import menuItems from "./data";
import { useState } from "react";

function App() {
  const [order, setOrder] = useState([])
  const [total, setTotal] = useState(0)


  function addOrder(item) {
    const newOrder = {
      name: item.name,
      price: item.price,
      id: order.length-1
    }

    setOrder([...order, newOrder])
    setTotal(total+item.price)
  }

  function removeItem({id, price}){
    const filteredOrders = order.filter((item) => item.id !== id)
    setOrder(filteredOrders)
    setTotal(total-price)
  }

  return (
    <div className="App">
      <Header />
      <main>
        <aside>
          <table>
            <tbody>
            {menuItems.map((item) => {
              return (
                <tr key={item.id} onClick={() => addOrder(item)}>
                  <td>{item.image}</td>
                  <td className="item-name">
                    <span>{item.name}</span><br/>
                    <span>{"🌶️".repeat(item.spiceLevel)}</span>
                  </td>
                  <td>${item.price}</td>
                </tr>
              )  
            }
            )}
            </tbody>
          </table>
        </aside>
        <section>
          <div>
            <h2>Current Order</h2>
            <ul>
              {order.map((item) => {
                return (
                  <li key={item.id}>
                    <span onClick={() => removeItem(item)}>❌</span>
                    <span>{item.name}</span>
                    <span>{item.price}</span>
                  </li>
                )
              })}
            </ul>
            <h4>Total: {total}</h4>
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
