import Footer from "./Footer";
import Header from "./Header";
import PastOrders from "./PastOrders";
import menuItems from './data.js';
import { useState } from "react";

function App() {
  let itemList = [];
  let [currentOrder, setCurrentOrder] = useState([]);
    
  menuItems.forEach((menuItem)=> {
      itemList.push(
          <tr key={ menuItem.id } onClick={(e) => addCurrentOrder(menuItem) }>
              <td>
                  { menuItem.image }
              </td>
              <td className="item-name" onClick={(e) => addCurrentOrder(menuItem)}>
                  <span>{ menuItem.name }</span> <br></br>
                  <span>{ spiceLevelIconGen(menuItem.spiceLevel) }</span>
              </td>
              <td>
                  $ { menuItem.price }
              </td>
          </tr>
      )
  });

  return (
    <div className="App">
      <Header />
      <main>
        <aside>
          <table>
            { itemList }
          </table>
        </aside>
        <section>
          <div>
            <h2>Current Order</h2>
            <ul>{ currentOrder.map((itemCurrentOrder,index) => {
              return(
                <li key={index}>
                  <button onClick={()=>removeItem(index)}>❌</button>
                  <span>{itemCurrentOrder.name}</span>
                  <span>${itemCurrentOrder.price}</span>
                </li>
              )
            })}</ul>
            <h4>Total: ${currentOrder.reduce((total, item)=> total + item.price, 0)}</h4>
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

  function spiceLevelIconGen(spice){
    let strSpiceIcon = "";

    for(let index = 0; index < spice; index++){
        strSpiceIcon += "🌶️";
    }

    return strSpiceIcon;
  }

  function addCurrentOrder(newItem){
    setCurrentOrder([...currentOrder,newItem]);
  }

  function removeItem(index){
    const addCurrentOrder = [...currentOrder];
    addCurrentOrder.splice(index,1);
    setCurrentOrder(addCurrentOrder);
  }

}


export default App;
