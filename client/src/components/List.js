import React from 'react'

const List = ({name, data}) => {
  return (
    <div>
        <h2>{name}</h2>
        {data.map((item, index) => {
            return (
                <div key={index} className='list-item'>
                    <span className="number">{index + 1}</span>
                    <p>{item}</p>
                </div>
            )
        })}
    </div>
  )
}

export default List
