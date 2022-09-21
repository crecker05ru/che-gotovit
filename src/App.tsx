import React from "react"
import "./styles/App.scss"
import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"
import { Routes, Route } from "react-router-dom"
import ItemInfo from "./components/ItemInfo"
import Items from "./components/Items"
import FoodPage from "./pages/Food"
import WherePage from "./pages/Where"
import ServicePage from "./pages/Service"
import JobsPage from "./pages/Job"
import ContactsPage from "./pages/Contacts"
import AboutUsPage from "./pages/AboutUs"
import MyRecipes from "./pages/MyRecipes"

function App() {
  return (
    <div className="App">
      <Header />
      <div className="App__body">
        <Routes>
          <Route path="/" element={<Main />}>
            {/* <Route path="item-info/:title" element={<ItemInfo />} /> */}
            <Route path="/" element={<Items />} />
            <Route
              path="*"
              element={
                <main style={{ padding: "1rem" }}>
                  <p>There's nothing here!</p>
                </main>
              }
            />
          </Route>
          <Route path="my-recipes" element={<MyRecipes />} />
          <Route path="food" element={<FoodPage />} />
          <Route path="where" element={<WherePage />} />
          <Route path="service" element={<ServicePage />} />
          <Route path="job" element={<JobsPage />} />
          <Route path="contacts" element={<ContactsPage />} />
          <Route path="about" element={<AboutUsPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
