import React, { useEffect, useMemo, useState } from 'react'
import Item from '../Item'
import { Routes, Route } from "react-router-dom";
import ItemInfo from '../ItemInfo';
import { useAppSelector } from '../../store/hooks';
import { Recipe, RecipeInfo } from '../../types/recipes';
import Loader from '../app/Loader';

export default function Items({recipes}: any) {

  const [currentItem, setCurrentItem] = useState<RecipeInfo | undefined>(undefined)


  const openInfo = (label: string) => {
    let current = recipes.find((item: any) => item.label === label) 
    console.log('recipes',recipes)
    console.log('current',current)
    setCurrentItem(current)
    console.log('current',current)
    console.log('label',label)
  }

  const closeInfo = () => {
    setCurrentItem(undefined)
  }


  return (
    <div className='items wrapper'>
        {/* <Routes>
        <Route path="item-info/:title"  >
        <ItemInfo data={recipes} />
        </Route>
      </Routes> */}


        <div className="items__content">
            {!currentItem && (recipes && recipes.map( (item : any,index: any) => 
                <div className='items__item' key={item.label}>
                    <Item data={item} openInfoCallback={openInfo} />
                </div>
            ))}
            {currentItem && <ItemInfo info={currentItem} closeInfoCallback={closeInfo}/>}
        </div>
    </div>
  )
}
