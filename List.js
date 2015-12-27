import React from 'react';
import Item from './Item';

export default function List({items}) {
  return (
    <div>
      <p>Number in List: <span>{items.length}</span></p>
      {items.map(item => <Item item={item} key={item.id}/>)}
    </div>
  )
}
