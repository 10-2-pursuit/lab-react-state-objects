import { useState } from "react";

import Footer from "./Footer";
import Header from "./Header";
import Menu from "./Menu";



function App() {

const [currentOrder, setCurrentOrder] = useState([])
const [total, setTotal] = useState(0)

const handleOrder = (item) => {
  setCurrentOrder([...currentOrder, item])
  setTotal(total + item.price)
}

const removeOrder = (index, price) => {
  const updatedOrder = [...currentOrder];
  updatedOrder.splice(index, 1);
  setCurrentOrder(updatedOrder);
  setTotal(total - price)
 
}

 const closeOrder = () => {
  setTotal(0)
  setCurrentOrder([])
 }


  return (
    <div className="App">
      <Header />
      <main>
        <aside>
          <Menu handleOrder = {handleOrder}/>
        </aside>
        <section>
          <div>
            <h2>Current Order</h2>
            <ul>
              {currentOrder.map((item, i) => 
              <li key={i}>
               <span onClick={() => {removeOrder(i, item.price)}}>❌</span>
               <span>{item.name}</span>
               <span>${item.price}</span>
              </li>

              )}
            </ul>
            <h4>Total:${total}</h4>
            <div>
              <button>Tidy order</button>
              <button onClick= {closeOrder}>Close order</button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;

