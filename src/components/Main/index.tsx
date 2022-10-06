import React, { useEffect, useState } from 'react'
import Items from '../Items'
import Search from '../Search'
import { useQueryParams } from '../../hooks/useQueryParams'
import { useSelector } from 'react-redux'
import { useActions } from '../../hooks/useActions'
import { RootState } from '../../store/store'
import Loader from '../app/Loader'

export default function Main () {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [data, setData] = useState()
  const query = useQueryParams()
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [que, setQue] = useState({ ...query.query })
  const { recipes, status } = useSelector((state: RootState) => state.recipes)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { setRecipes, fetchRecipes } = useActions()
  const transformedRecipes = recipes && recipes.map((item) => item = { ...item.recipe } as any)

  useEffect(() => {
    if (!que) {
      return
    }
    async function getData () {
      // const response = await http.get('',{params: {q: 'pot'}})
      // const response = await http.get("", { params: query.query });
      const response = await fetchRecipes({ url: '', options: query.query })
      console.log('uery', query)
      // const response = await fetch('https://api.edamam.com/search?app_id=900da95e&app_key=40698503668e0bb3897581f4766d77f9&q=pot&healt=celery-free&diet=high-protein')
      console.log('response', response)
      console.log(
        'process.env.REACT_APP_API_KEY',
        process.env.REACT_APP_API_KEY
      )
      // setData(response.data.hits);
      // setData(recipes)
      // setRecipes(response.data.hits)
      console.log('store', recipes)
      console.log('data', data)
    }
    console.log('query', query)
    console.log('query.location', query.location)
    console.log('que', que)
    getData()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query.currentUrl])

  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (status === 'idle') {
      setIsLoading(false)
    } else if (status === 'loading') {
      setIsLoading(true)
    } else {
      setIsLoading(false)
    }
    console.log('recipes', recipes)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status])
  return (
    <main className="main">
      <div className="main__wrapper wrapper">
        <h1 className="main__title">What do you want to cook?</h1>

        <div className="main__search">
          <Search />
        </div>
        {/* <div className="main__circle-svg">
        <ProcentCircle />
        </div> */}
      <div className={isLoading ? 'items__loader loader-in' : 'items__loader loader-out'}>
      {<Loader />}
      </div>
        <div className="main__items">
          {/* <Outlet /> */}
          {transformedRecipes?.length < 1 && <h4>No recipes found</h4>}
          <Items recipes={transformedRecipes}/>
        </div>
      </div>
    </main>
  )
}
