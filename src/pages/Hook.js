import React, { useState, useEffect } from "react"
import styled from "styled-components"

export const useGetWeather = url => {
  const [state, setState] = useState({ loading: true, weather: null })
  useEffect(() => {
    async function fetchApi() {
      const response = await fetch(url)
      const data = await response.json()
      setState({
        ...state,
        loading: false,
        weather: data,
      })
    }
    fetchApi()
  }, [])

  return (
    <WeatherDiv>
      {state.loading ? (
        <div>loading</div>
      ) : (
        <div>
          <div>
            Weather today for {state.weather.name}, {state.weather.sys.country}
          </div>
          <div>
            Current temperature: {(state.weather.main.temp - 273.15).toFixed(1)}{" "}
            °C
          </div>
          <div>
            Max temperature: {(state.weather.main.temp_max - 273.15).toFixed(1)}{" "}
            °C
          </div>
          <div>
            Min temperature: {(state.weather.main.temp_min - 273.15).toFixed(1)}{" "}
            °C
          </div>
          <div>{state.weather.weather[0].description}</div>
        </div>
      )}
    </WeatherDiv>
  )
}

const WeatherDiv = styled.div`
  border-style: solid;
  border-color: black;
  width: 300px;
`
