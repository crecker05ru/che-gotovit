import React, { useRef, useState } from "react"

export const EditableDIV = ({value,onChange,className}: any) => {
  const [localValue, setLocalValue] = useState(value)
  const ref = useRef(null)
  const onLocalChange = (e: any) => {
    let elem: any = ref.current
    onChange(elem.textContent)
    setLocalValue(elem.textContent)
  }
  return (
    <div className={className}
      contentEditable={true}
      suppressContentEditableWarning={true}
      onChange={onLocalChange}
      ref={ref}
    >
      {localValue}
    </div>
  )
}
