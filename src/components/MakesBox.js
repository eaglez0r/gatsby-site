import React from "react"
import WeatherComponent from "./weather"

function MakesBox(props) {
  const { weatherIds } = props
  return (
    <ul>
      {weatherIds.map((item, index) => (
        <WeatherComponent key={index} id={weatherIds[index]} />
      ))}
    </ul>
  )
}

export default MakesBox
