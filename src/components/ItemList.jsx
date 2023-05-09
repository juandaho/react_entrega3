import React from 'react'
import Item from './Item'
import './ItemList.css'



export const ItemList = ({products}) => {
  return (
    <div className="ListGroup"> 
    
    {products.map(prod =>  <Item key={prod.id} {...prod} />)}
    
    </div>
  )
}

export default ItemList
