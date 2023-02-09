import React from 'react'
import { useSelector } from 'react-redux';
const Pagination = ({numberOfPages, page, handlePage}) => {
    

  
    const pages = Array.from({length: numberOfPages}, (_, index) => {
        return index + 1
    })

    console.log(pages)
  return (
    <div className='pagination'>
      {pages.map((item) => {
        return <span onClick={handlePage} data-id={item} className={page === item && 'active'}>{item}</span>
      })}
    </div>
  )
}

export default Pagination
