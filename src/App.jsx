import Footer from "./Footer";
import Header from "./Header";
import  menuItems  from "./data";
import { useState } from 'react';
import ReactTable from "react-table";
import './index.css';

function App() {
  const [items, setItems] =  useState(menuItems);
  console.log(menuItems)

  function setMenuItems (){

  }

  function updateItems(menuItemsId){
    const updatedItems = [...menuItems];
  }
  return (
    <div className="App">
      <Header />
      <main>
        <aside>
          <table>
            <tr>
              <td>image: {items.image}</td>
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
