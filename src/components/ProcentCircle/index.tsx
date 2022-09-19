import React from "react"
import { ReactComponent as Circle } from "../../assets/svg/circle-svg.svg"
import { roundNumber } from "../../helpers/roundNumber"

export default function ProcentCircle({ procent = 0, stroke = '#00ff5e' }) {
  const [fillCircle, setFillCircle] = React.useState(316)
  let currentProcent = roundNumber(procent)
  const currentFill = React.useMemo(() => {
    return  currentProcent > 100 ? 0 :fillCircle - fillCircle * (currentProcent / 100)
  }, [procent])

  const pathStyle = {
    stroke,
    strokeWidth: "4px",
    strokeDashoffset: `${currentFill}`,
    fill: "none",
  }
  return (
    <div className="procent-circle">
      <svg
        className="circle-svg"
        id="svg-circle"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 110 110"
        preserveAspectRatio="none"
      >
        <circle
          className="circle-svg__circle"
          cx="55"
          cy="55"
          r="50"
          // style="stroke: #ffffff;stroke-width: 10px; fill: none;"
          style={{ stroke: "#dedede", strokeWidth: "10px", fill: "none" }}
        ></circle>
        <text className="procent-circle__value" textAnchor="middle" x="55" y="60">{procent}%</text>
        <path
          className="circle-svg__path"
          d="M55 5 
          A50,50 0 1,1 54,5 Z"
          // style={"stroke: #fff000;stroke-width: 4px; fill: none;"ы}
          style={pathStyle}
        ></path>
      </svg>
    </div>
  )
}
