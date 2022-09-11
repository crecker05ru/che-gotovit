import React, { useState } from 'react'
import Item from '../Item'
import { Routes, Route } from "react-router-dom";
import ItemInfo from '../ItemInfo';
import { useAppSelector } from '../../store/hooks';
import { Recipe, RecipeInfo } from '../../types/recipes';

export default function Items() {
  const { recipes: itemData } = useAppSelector(state => state.recipes)
  const [currentItem, setCurrentItem] = useState<Recipe | undefined>(undefined)

  const openInfo = (label: string) => {
    let current = itemData.find(item => item.recipe.label === label) 
    console.log('itemData',itemData)
    console.log('current',current)
    setCurrentItem(current)
    console.log('current',current)
    console.log('label',label)
  }

  const closeInfo = () => {
    setCurrentItem(undefined)
  }
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
            {!currentItem && itemData.map( (item : any,index: any) => 
                <div className='items__item' key={item.label}>
                    <Item data={item} openInfoCallback={openInfo} />
                </div>
            )}
            {currentItem && <ItemInfo info={currentItem} closeInfoCallback={closeInfo}/>}
        </div>
    </div>
  )
}
