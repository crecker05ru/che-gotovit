import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import Item from '../../components/Item'
import Items from '../../components/Items'
import { useActions } from '../../hooks/useActions'
import { RootState } from '../../store/store'

export default function MyFavorites() {
  const {setMyFavorites,deleteFromMyFavorites} = useActions()
  const{ myFavorites } = useSelector((state: RootState) => state.myFavorites)
useEffect(() => {
  setMyFavorites()
  console.log('myFavorites',myFavorites)
},[])
  return (
    <div className='favorites wrapper'>
      <h1>MyFavorites</h1>
      <section className='favorites__body'>
        {/* <ul className="favorites__list">
    {myFavorites.length > 0 && myFavorites.map((favorite, index) => <li key={index}><Item data={favorite} /></li>)}
        </ul> */}
        <Items recipes={myFavorites}/>
      </section>
    </div>
  )
}
