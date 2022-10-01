import React from 'react'
import { useSelector } from 'react-redux'
import { useActions } from '../../hooks/useActions'
import { RootState } from '../../store/store'

export default function MyFavorites() {
  const {deleteFromMyFavorites} = useActions()
  const {myFavorites} = useSelector((state: RootState) => state.myFavorites)

  return (
    <div className='favorites wrapper'>
      <h1>MyFavorites</h1>
      <section className='favorites__body'>
        <ul className="favorites__list">
    {myFavorites.length > 0 && myFavorites.map((favorite, index) => <li key={index}>{favorite.title}</li>)}
        </ul>
      </section>
    </div>
  )
}
