import React, { useEffect, useMemo, useState } from 'react'
import Item from '../Item'
import { Routes, Route } from "react-router-dom";
import ItemInfo from '../ItemInfo';
import { useAppSelector } from '../../store/hooks';
import { Recipe, RecipeInfo } from '../../types/recipes';
import Loader from '../app/Loader';

export default function Items() {
  const { recipes: itemData,status } = useAppSelector(state => state.recipes)
  const [currentItem, setCurrentItem] = useState<Recipe | undefined>(undefined)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if(status === 'idle'){
      setIsLoading(false)
  }else if(status === 'loading'){
    setIsLoading(true)
  }else{
    setIsLoading(false)
  }
  },[status])

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


  return (
    <div className='items wrapper'>
        {/* <Routes>
        <Route path="item-info/:title"  >
        <ItemInfo data={itemData} />
        </Route>
      </Routes> */}
      <div className={isLoading ? 'items__loader loader-in' : 'items__loader loader-out'}>
      {<Loader />}
      </div>

        <div className="items__content">
            {!currentItem && (itemData && itemData.map( (item : any,index: any) => 
                <div className='items__item' key={item.label}>
                    <Item data={item} openInfoCallback={openInfo} />
                </div>
            ))}
            {itemData?.length === 0 && <h4>No recipes found</h4>}
            {currentItem && <ItemInfo info={currentItem} closeInfoCallback={closeInfo}/>}
        </div>
    </div>
  )
}
