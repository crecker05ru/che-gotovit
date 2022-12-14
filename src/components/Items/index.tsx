import React, { useState } from 'react'
import Item from '../Item'
import ItemInfo from '../ItemInfo'
import {  RecipeInfo } from '../../types/recipes'

export default function Items ({ recipes }: any) {
  const [currentItem, setCurrentItem] = useState<RecipeInfo | undefined>(undefined)

  const openInfo = (label: string) => {
    const current = recipes.find((item: any) => item.label === label)
    console.log('recipes', recipes)
    console.log('current', current)
    setCurrentItem(current)
    console.log('current', current)
    console.log('label', label)
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
            {(currentItem == null) && (recipes && recipes.map((item: any, index: any) =>
                <div className='items__item' key={item.label}>
                    <Item data={item} openInfoCallback={openInfo} />
                </div>
            ))}
            {(currentItem != null) && <ItemInfo info={currentItem} closeInfoCallback={closeInfo}/>}
        </div>
    </div>
  )
}
