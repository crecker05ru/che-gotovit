import React from 'react'
import { useParams } from 'react-router-dom'

export default function ItemInfo(props:any) {
  const params = useParams()
  return (
    <div className='item-info'>
        <div className="item-info__content">
            ItemInfo
            {params.title}
        </div>
    </div>
  )
}
