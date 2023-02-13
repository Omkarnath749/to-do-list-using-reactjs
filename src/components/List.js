import React from 'react'

const List = ({items, removeItem, editItem}) => {
  return (
    <div className='container'>
      {items.map((item) => {
        const {id, title} = item;
        return (
            <ul className='list-group list-group-flush' key={id}>
                <li className='list-group-item d-flex justify-content-between align-items-center'>{title}
                <div style={{float: "right"}}>
                    <button type='button' className='edit-btn' onClick={() => editItem(id)}>Edit</button>
                    <button type='button' className='delete-btn' onClick={() => removeItem(id)}>Delete</button>
                </div>
                </li>
            </ul>
        )
      })}
    </div>
  )
}

export default List;
