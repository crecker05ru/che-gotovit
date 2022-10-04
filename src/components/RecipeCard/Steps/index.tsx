import React, { useEffect, useState } from 'react'
import Step from './Step'

export default function Steps ({ steps, isEdit, setSteps }: any) {
  const [editSteps, setEditSteps] = useState(steps)

  const updateSteps = (id: number, step: string) => {
    // let newSteps = steps.map((item, index) => index === id ? item = step : item)
    // let newSteps = editSteps.map((item, index) => index === id ? item = step : item)
    const copyArr = [...editSteps]
    copyArr[id] = step
    setEditSteps(copyArr)
    // setEditSteps(newSteps)
    // if(isEdit === false) {
    //   let newSteps = steps.map((item, index) => index === id ? item = step : item)
    //   setEditSteps(newSteps)
    // }
  }
  useEffect(() => {
    setSteps(editSteps)
  }, [editSteps])
  return (
    <ul className="recipe-card__steps">
      {steps.length > 0 &&
        steps.map((step: string, index: number) => (
          <li className="recipe-card__step" key={index}>
            {isEdit
              ? (
              <Step value={step} id={index} updateSteps={updateSteps} />
                )
              : (
              <span>{step}</span>
                )}
          </li>
        ))}
    </ul>
  )
}
