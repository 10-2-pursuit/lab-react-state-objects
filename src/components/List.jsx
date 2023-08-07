import React from 'react';

const List = ({item, onAddToOrder}) => { 
    const {name,price,spiceLevel,image}=item
    
    const addToOrder = () => {
        onAddToOrder(item)
    }
    return (
        <tr>
            <td>
               <span role='img' aria-label={name}>
                {image}
                </span> 
            </td>
            <td className='item-name'>
                <span>{name}</span> <br/>
                <span>{"🌶️".repeat(spiceLevel)}</span>

            </td>
            <td>{price}</td>
            <td>
                <button onClick={addToOrder}>add to order</button>
            </td>
        </tr>
    );
}

export default List;
