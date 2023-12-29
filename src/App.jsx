import { useState } from "react";
import menuItems from "./data";
import Footer from "./Footer";
import Header from "./Header";

function App() {
  //create a useState to change state of menu 
  const [menu, setMenu] = useState(menuItems);
  //create useState to change state of Current Order array 
  const [currentOrder, setCurrentOrder] = useState([]); 
  //create a function to add menu items 
  const [total, setTotal] = useState(0);

const AddItemTooOrder = (item) => {
  setCurrentOrder([...currentOrder, item]);
  setTotal(total + item.price); 
}

function RemoveItem(item) {
  const orderWithOutItem = currentOrder.filter((orders) => orders.id !== item.id);
  setCurrentOrder(orderWithOutItem);
  setTotal(total - item.price) 
}

function Reset() {
  setCurrentOrder([]);
  setTotal(0); 
}

const chilliGenerator = (spiceLevel) => {
  const scovilleScale = "🌶️".repeat(spiceLevel);
  return <span>{scovilleScale}</span>
}

  return (
    <div className="App">
      <Header />
      <main>
        <aside> 
          <table> 
            <tbody>
              {menu.map((item) => (
              <tr key={item.id} onClick={() => AddItemTooOrder(item)}>
                <td>{item.image}</td>
                <td className="item-name">
                <span>{item.name}</span> 
                <br></br>
                <span>{chilliGenerator(item.spiceLevel)}</span>
                </td>
                <td>{item.price}</td>
              </tr>
              ))}
            </tbody>
          </table>
        </aside>
        <section>
          <div>
            <h2>Current Order</h2>
            <ul>
             {/* call state prop to render  */}
             {currentOrder.map((item, index) => (
              <li key={index}>
                <span onClick={()=> RemoveItem(item)}>❌
                </span>
                <span>{item.name}</span>
                <span>{item.price}</span>
              </li>
             ))}
            </ul> 
            <h4>Total: $ {total}</h4>
            <div>
              <button>Tidy order</button>
              <button onClick={()=> Reset()}>Close order</button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
