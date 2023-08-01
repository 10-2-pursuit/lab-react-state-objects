import Footer from "./Footer";
import Header from "./Header";
import { menuItems } from "./data";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <aside>
          <table></table>
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
