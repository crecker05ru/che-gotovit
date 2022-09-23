import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import CreateReceipt from "../../components/CreateReceipt";
import ReceiptCard from "../../components/ReceiptCard";
import { useActions } from "../../hooks/useActions";
import { RootState } from "../../store/store";

export default function MyRecipes() {
  const { myRecipes } = useSelector((state: RootState) => state.myRecipes);
  const {setMyRecipes} = useActions()

  useEffect(() => {
    setMyRecipes()
  },[])
  return (
    <div className="my-recipes wrapper">
      <h1>MyRecipes</h1>
      <div className="my-recipes__body">
        <div className="my-recipes__create-receipt">
          <CreateReceipt />
        </div>
        <div className="my-recipes__receipts">
          <ul className="my-recipes__receipts-lists row">
            {myRecipes.length > 0 &&
              myRecipes.map((myRecipe) => (
                <li className="my-recipes__receipts-item" key={myRecipe.title}>
                  <ReceiptCard {...myRecipe}/>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
