import React from "react"
import CreateReceipt from "../../components/CreateReceipt"
import ReceiptCard from "../../components/ReceiptCard"

export default function MyRecipes() {
  return (
    <div className="my-recipes">
      <h1>MyRecipes</h1>
      <div className="my-recipes__body">
        <div className='my-recipes__create-receipt'><CreateReceipt /></div>
        <div className='my-recipes__receipts'><ReceiptCard /></div>
      </div>
    </div>
  )
}
