import { useState } from 'react';
import menuItems from './data.js';

export default function Menu({currentOrder, setCurrentOrder}){
    let itemList = [];
    
    menuItems.forEach((menuItem)=> {
        itemList.push(
            <tr key={ menuItem.id } onClick={ ()=>addCurrentOrder(menuItem) }>
                <td>
                    { menuItem.image }
                </td>
                <td className="item-name">
                    <span>{ menuItem.name }</span> <br></br>
                    <span>{ spiceLevelIconGen(menuItem.spiceLevel) }</span>
                </td>
                <td>
                    $ { menuItem.price }
                </td>
            </tr>
        )
    })
    return (
       <>
            { itemList }
       </>
    )

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
}