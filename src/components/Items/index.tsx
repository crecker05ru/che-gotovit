import React from 'react'
import Item from '../Item'
import { Routes, Route } from "react-router-dom";
import ItemInfo from '../ItemInfo';
export default function Items({itemData} : any) {

    if(!itemData){
        return <div>Loading</div>
    }

  return (
    <div className='items wrapper'>
        {/* <Routes>
        <Route path="item-info/:title"  >
        <ItemInfo data={itemData} />
        </Route>
      </Routes> */}
        <div className="items__content">
            {itemData.map( (item : any,index: any) => 
                <div className='items__item' key={index}>
                    <Item data={item} />
                </div>
            )}
        </div>
    </div>
  )
}
