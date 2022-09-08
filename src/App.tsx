import React from "react";
import "./styles/App.scss";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import ItemInfo from "./components/ItemInfo";
import Items from "./components/Items";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="item-info/:title" element={<ItemInfo />} />
          {/* <Route path="/" element={<Items />} /> */}
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
