import { useCallback, useMemo } from 'react'

import { useNavigate, useLocation } from 'react-router-dom'

export const useQueryParams = () => {
  const replace = useNavigate()
  const location = useLocation()
  const url = new URL(window.location.href)
  const params = new URLSearchParams(url.search)
  let currentUrl = url.href
  const pathname = url.origin
  let query = useMemo(() => {
    let result = {}
    for (const [key, val] of params.entries()) {
      result = { ...result, [key]: val }
    }
    return result
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params, pathname, replace])

  const queryParams: string[][] = useMemo(() => {
    return Object.entries<any>(query)
  }, [query])

  const addQueryParams = useCallback(
    (paramsToAdd: Record<string, any>) => {
      for (const name in paramsToAdd) {
        if (query.hasOwnProperty(name)) {
          return `${paramsToAdd} already exist`
        }

        const searchParams = [...queryParams, ...Object.entries(paramsToAdd)]
        const newParams = new URLSearchParams(searchParams)

        replace(`?${newParams}`)

        return newParams
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [query, queryParams, pathname, replace]
  )

  const updateQueryParam = useCallback(
    (key: string, value: string) => {
      const currentParams = new URLSearchParams(queryParams)
      currentParams.set(key, value)
      replace(`?${currentParams.toString()}`)
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [pathname, queryParams, replace]
  )

  const deleteQueryParam = useCallback(
    (key: string) => {
      const currentParams = new URLSearchParams(queryParams)
      currentParams.delete(key)
      replace('')
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [pathname, queryParams, replace]
  )

  const restore = useCallback(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    query = {}
    // eslint-disable-next-line react-hooks/exhaustive-deps
    currentUrl = pathname
    replace('')
  }, [pathname, queryParams, query])

  return {
    currentUrl,
    pathname,
    query,
    replace,
    restore,
    location,
    queryParams,
    addQueryParams,
    updateQueryParam,
    deleteQueryParam
  }
}
