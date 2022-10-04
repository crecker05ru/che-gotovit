import React, { useEffect, useState } from 'react'

export default function Step ({ id, value, updateSteps }: any) {
  const [editStep, setEditStep] = useState(value)

  const editStepHandler = (val: any) => {
    setEditStep(val)
    updateSteps(id, val)
  }
  // useEffect(() => {

  //   updateSteps(id, editStep)
  // },[id,editStep])

  return (
    <input onChange={e => editStepHandler(e.target.value)} value={editStep}/>
  )
}
