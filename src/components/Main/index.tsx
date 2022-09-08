import React, { useEffect, useState } from "react";
import { http } from "../../api/http";
import Items from "../Items";
import Search from "../Search";
import { Outlet, Link } from "react-router-dom";
import { useQueryParams } from "../../hooks/useQueryParams";

export default function Main() {
  const [data, setData] = useState();
  const query = useQueryParams();
  const [que, setQue] = useState({ ...query.query });

  useEffect(() => {
    if (!que) {
      return;
    }
    async function getData() {
      // const response = await http.get('',{params: {q: 'pot'}})
      const response = await http.get("", { params: query.query });
      console.log("uery", query);
      // const response = await fetch('https://api.edamam.com/search?app_id=900da95e&app_key=40698503668e0bb3897581f4766d77f9&q=pot&healt=celery-free&diet=high-protein')
      console.log("response", response);
      console.log(
        "process.env.REACT_APP_API_KEY",
        process.env.REACT_APP_API_KEY
      );
      setData(response.data.hits);
      console.log("data", data);
    }
    console.log("query", query);
    console.log("query.location", query.location);
    console.log("que", que);
    getData();
  }, [query.currentUrl]);

  return (
    <main className="main">
      <div className="main__wrapper wrapper">
        <h1 className="main__title">Что готовим?</h1>

        <div className="main__search">
          <Search />
        </div>
        <div className="main__items">
          <Outlet />
          <Items itemData={data} />
        </div>
      </div>
    </main>
  );
}
