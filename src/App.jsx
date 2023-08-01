import Footer from "./Footer";
import Header from "./Header";
import PastOrders from "./PastOrders";
import { useState } from "react";
import Menu from "./menu";
import CurrentOrder from "./CurrentOrder";

function App() {
  let [currentOrder, setCurrentOrder] = useState([]);

  return (
    <div className="App">
      <Header />
      <main>
        <aside>
          <table>
            <tbody>
              <Menu currentOrder={currentOrder} setCurrentOrder={setCurrentOrder}/>
            </tbody>
          </table>
        </aside>
        <section>
          <CurrentOrder currentOrder={currentOrder} setCurrentOrder={setCurrentOrder}/>
        </section>
      </main>
      <Footer />
    </div>
  );
}


export default App;
