import { useCallback, useMemo } from "react";

import { useNavigate, useLocation } from "react-router-dom";

export const useQueryParams = () => {
  const replace = useNavigate();
  const location = useLocation();
  const url = new URL(window.location.href);
  const params = new URLSearchParams(url.search);
  let currentUrl = url.href;
  let pathname = url.origin;
  let query = useMemo(() => {
    let result = {};
    for (let [key, val] of params.entries()) {
      result = { ...result, [key]: val };
    }
    return result;
  }, [params, pathname, replace]);

  const queryParams: string[][] = useMemo(() => {
    return Object.entries<any>(query);
  }, [query]);

  const addQueryParams = useCallback(
    (paramsToAdd: Record<string, any>) => {
      for (var name in paramsToAdd) {
        if (query.hasOwnProperty(name)) {
          return `${paramsToAdd} already exist`;
        }

        const searchParams = [...queryParams, ...Object.entries(paramsToAdd)];
        const newParams = new URLSearchParams(searchParams);

        replace(`?${newParams}`);

        return newParams;
      }
    },
    [query, queryParams, pathname, replace]
  );

  const updateQueryParam = useCallback(
    (key: string, value: string) => {
      let currentParams = new URLSearchParams(queryParams);
      currentParams.set(key, value);
      replace(`?${currentParams.toString()}`);
    },
    [pathname, queryParams, replace]
  );

  const deleteQueryParam = useCallback(
    (key: string) => {
      let currentParams = new URLSearchParams(queryParams);
      currentParams.delete(key);
      replace(``);
    },
    [pathname, queryParams, replace]
  );

  const restore = useCallback(() => {
    query = {};
    currentUrl = pathname;
    replace("");
  }, [pathname, queryParams, query]);

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
    deleteQueryParam,
  };
};
