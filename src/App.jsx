import Footer from "./Footer";
import Header from "./Header";
import { menuItems } from "./data";
import { useState } from "react";

function App() {
    //  const [menuItems, setMenuItems] = useState(menuItems);

  function addSpice(menuItems, index) {

  }
  return (
    <div className="App">
      <Header />
      <main>
        <aside>
          <table>
            <tr>
            <td>{ menuItems[0].image }</td>
            <td className="item-name">
  <span>{menuItems[0].name}</span> <br></br>
  <span> {(&#128512) * menuItems[0].spiceLevel}</span>
</td>
            <td>{ menuItems[0].price }</td>
            
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
