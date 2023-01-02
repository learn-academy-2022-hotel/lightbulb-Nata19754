import React, { useState } from "react"


const LightSwitch = () => {

const [lightSwitchStatus, setLightSwitchStatus]= useState("off")
const [lighColor, setLightColor] =useState("white")

const onOff = () => {
  if (lightSwitchStatus==="off"){
    setLightColor("yellow")
    setLightSwitchStatus("on")
  } else {
    setLightColor("white")
    setLightSwitchStatus("off")
  }
}

  return (
    <>
      <div className="lightbulb"
      onClick={onOff}
      style={{backgroundColor:lighColor}}>
        {lightSwitchStatus}
      </div>
    </>
  )
}

export default LightSwitch
