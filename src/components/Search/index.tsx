import React, { useEffect, useMemo, useState } from 'react'
import useInput from '../../hooks/useInput'
import {  useParams, useLocation } from 'react-router-dom'
import { useQueryParams } from '../../hooks/useQueryParams'
import { http } from '../../api/http'
// import { URLSearchParams } from 'url'

export default function Search () {
  const query = useQueryParams()
  const search = useInput('')
  const [queryParams, setQueryParams] = useState({})
  const params = useParams()
  const location = useLocation()

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const par = useMemo(() => {
    return {
      ...(search.value && { q: search.value })

    }
  }, [search.value])
  // const routes = useRoutes()

  const onClickSearch = (e: any) => {
    query.updateQueryParam('q', search.value as string)
    setQueryParams(query.query)
    console.log('search', search.value)
    console.log('params', params)
    console.log('location', location)
    // query.addQueryParams({'q': search.value})

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async function getData () {
      // const response = await http.get('',{params: {q: 'pot'}})
      const response = await http.get('', { params: query.query })
      console.log('uery', query)
      // const response = await fetch('https://api.edamam.com/search?app_id=900da95e&app_key=40698503668e0bb3897581f4766d77f9&q=pot&healt=celery-free&diet=high-protein')
      console.log('response', response)
      console.log('process.env.REACT_APP_API_KEY', process.env.REACT_APP_API_KEY)
      console.log('queryParams', queryParams)
    }
    console.log('uery', query)
    // query.updateQueryParam('q',search.value as string)
    // getData()
    search.setValue('')
    !search.value && query.deleteQueryParam('q')
    // query.restore()
    // console.log('routes',routes)
  }

  useEffect(() => {
    // if(search.value){
    //   query.updateQueryParam('q',search.value as string)
    //   setQueryParams(query.query)
    // }

    console.log('queryParams', queryParams)
    // const url = new URLSearchParams('?item=3344&qaz=zaq&zaruba=4444')
    // if(search.value){
    //   params.append('q',search.value as string)
    //   console.log('effect params',params)
    // } else {
    //   params.delete('q')
    // }
    // navigate('/?item=1')

    console.log('search', search.value)
    console.log('params', params)
    console.log('location', location)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query.query])

  return (
    <div className="search">
      <input {...search} type="text" className="search__input" />
      <button type="button" className="search__button" onClick={(e) => onClickSearch(e)}>Submit</button>
    </div>
  )
}
