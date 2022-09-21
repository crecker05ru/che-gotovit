import React from 'react'

export default function ReceiptCard({title,image,ingredients,weight,totalTime,steps}: any) {
  return (
    <div className='receipt-card'>
      <h2 className="receipt-card__header">ReceiptCard</h2>
      <div className="receipt-card__body">
        {title}
        {image}
        {weight}
        {totalTime}
        {ingredients}
        {steps}
      </div>
    </div>
  )
}
