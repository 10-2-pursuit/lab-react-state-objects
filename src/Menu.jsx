
import menuItems from "./data";

import  "./Menu.css"



function Menu({handleOrder}) {



    return (
        <div>
            <h2 className= "header">Welcome here is our menu, Enjoy !</h2>
            <table>
                <tbody>
                {menuItems.map((item) => 
                
        <tr key= {item.id} onClick={() => handleOrder(item)}>
            
            <td>{item.image}</td>
            <td className= "item-name"> <span>{item.name}</span> <br/> 
            <span>
                { "🌶️".repeat(item.spiceLevel)}
                </span></td>
            <td> $ {item.price}</td> 
        </tr>
    )}
                </tbody>
            </table>
        </div>
    )
}



export default Menu