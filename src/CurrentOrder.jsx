export default function CurrentOrder({currentOrder, setCurrentOrder}){
    return(
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
            })}
            </ul>
            <h4>Total: ${currentOrder.reduce((total, item)=> total + item.price, 0)}</h4>
            <div>
              <button>Tidy order</button>
              <button onClick={()=>closeOrder()}>Close order</button>
            </div>
        </div>
    )

    function removeItem(index){
        const addCurrentOrder = [...currentOrder];
        addCurrentOrder.splice(index,1);
        setCurrentOrder(addCurrentOrder);
    }

    function closeOrder(){
        setCurrentOrder([]);
    }
}