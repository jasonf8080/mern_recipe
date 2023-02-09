import React, { useEffect } from 'react'
import { IoMdStar } from 'react-icons/io';
import { useSelector } from 'react-redux';

const GraphItem = ({number}) => {
   const {groupedRatings, totalReviews} = useSelector((store) => store.review);
    
   const amount = groupedRatings.find((item) => item._id === number) || 0;
   //console.log('amount', amount.count / totalReviews || 0)
  

  
   

   
   //amount = (amount.count / totalReviews)
   //console.log(amount)
  
  return (
    <div className="graph-item-container">
        <h3>{number} <span className='small-star'><IoMdStar/></span></h3>
        <div className={`graph-item`}>
           <span className='graph-item-amount' style={{width: `${(amount.count / totalReviews || 0) * 100}%`}}></span>
        </div>
    </div>
  )
}

export default GraphItem
