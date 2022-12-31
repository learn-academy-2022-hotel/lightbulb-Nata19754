import React, { useState } from "react"
import lightOff from "../assets/lightOff.png"
import lightOn from "../assets/lightOn.png"
import switchOff from "../assets/switchOff.png"
import switchOn from "../assets/switchOn.png"

const LightSwitch = () => {

const [lightSwitchStatus, setLightSwitchStatus]= useState("off")
// const [lighColor, setLightColor] =useState("white")

const onOff = () => {
 setLightSwitchStatus(lightSwitchStatus === "off"? "on" : "off");
 
}

  return (
    <>
      {/* <div className="lightbulb"
      onClick={onOff}
      style={{backgroundColor:lightColor}}>
        {lightSwitchStatus}
      </div> */}

      <div>

        <img src={lightSwitchStatus === "off" ? switchOff : switchOn} onClick={onOff} />
        <img src={lightSwitchStatus == "off" ? lightOff : lightOn} />
        
      </div>
    </>
  )
}

export default LightSwitch
