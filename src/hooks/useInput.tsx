import React, { useState } from "react"

export default function useInput(initialValue: string | number | undefined = undefined) {
  const [value, setValue] = useState(initialValue)
  const onChange = (e: any) => {
    setValue(e.target.value)
  }

  return {
    value,
    onChange,
    setValue,
  }
}
