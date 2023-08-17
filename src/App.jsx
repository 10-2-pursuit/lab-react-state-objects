import Footer from "./Footer";
import Header from "./Header";
import { menuItems } from "./data";
import { useState } from "react";

function App() {
    const spiceEmoji = "🌶️"
      const [menuDisplay, setMenuDisplay ] = useState(menuItems);
    const [currentOrder, setCurrentOrder] = useState([]);
    const [total,setTotal]=useState(0)
  
  function updateCurrentOrder(foodId,item) {
    
    const index = currentOrder.findIndex((menuItem) => menuItem.id == foodId);
   console.log(index)
    if(index==-1){
      setTotal(total*1+item.price*1)
      setCurrentOrder([...currentOrder,item])
    }

    //setCurrentOrder(updatedOrder)

   /// console.log(currentOrder)
  }
  return (
    <div className="App">
      <Header />
      <main>
        <aside>
          <table>
            {menuDisplay.map((menuItem) => {
            return (
              <tr onClick={ () => {
                updateCurrentOrder(menuItem.id,menuItem) }}  key = {menuItem.id} >
                
                 <td> { menuItem.image } </td>
                <td className="item-name"> { menuItem.name } </td>
                 <td> { '$' + menuItem.price } </td>
              </tr>
            )  
            })}
          </table>
        </aside>
        <section>
          <div>
            <h2>Current Order</h2>
            <ul>
              {currentOrder.map(item=>{
                return <li>{item.name}</li>
              })}
            </ul>
            <h4>Total:{'$' + total}</h4>
            <div>
              <button>Tidy order</button>
              <button onClick={()=>{
                setCurrentOrder([])
                setTotal('$0')
              }}>Close order</button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
 }

export default App;
