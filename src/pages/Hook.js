import React, { useState, useEffect } from "react"
import styled from "styled-components"
import Button from "@material-ui/core/Button"
import CircularProgress from "@material-ui/core/CircularProgress"

export default id => {
  const [state, setState] = useState({
    temperature: "C",
    loading: true,
    weather: null,
    tempInC: 0,
    tempInF: 0,
    tempMaxC: 0,
    tempMaxF: 0,
  })
  useEffect(() => {
    async function fetchApi() {
      let url = `https://api.openweathermap.org/data/2.5/weather?id=${id}&APPID=92a0f139f156286198cf8bac00a51dc6`
      const response = await fetch(url)
      const data = await response.json()
      const tempInC = (data.main.temp - 273.15).toFixed(1) + " °C"
      const tempInF = (data.main.temp * 1.8 - 459.67).toFixed(1) + " °F"
      const tempMaxC = (data.main.temp_max - 273.15).toFixed(1) + " °C"
      const tempMaxF = (data.main.temp_max * 1.8 - 459.67).toFixed(1) + " °F"
      const tempMinC = (data.main.temp_min - 273.15).toFixed(1) + " °C"
      const tempMinF = (data.main.temp_min * 1.8 - 459).toFixed(1) + " °F"

      setState({
        ...state,
        loading: false,
        weather: data,
        tempInC: tempInC,
        tempInF: tempInF,
        tempMaxC: tempMaxC,
        tempMaxF: tempMaxF,
        tempMinC: tempMinC,
        tempMinF: tempMinF,
      })
    }
    fetchApi()
  }, [])

  const handleClick = () => {
    if (state.temperature == "C") {
      setState({
        ...state,
        temperature: "F",
      })
    } else {
      setState({
        ...state,
        temperature: "C",
      })
    }
  }

  return (
    <WeatherDiv>
      {state.loading ? (
        <div>
          <CircularProgress color="secondary" />
        </div>
      ) : (
        <div>
          <div>
            Weather today for {state.weather.name}, {state.weather.sys.country}
          </div>
          <div>
            Current temperature:{" "}
            {state.temperature == "C"
              ? `${state.tempInC + " "}`
              : `${state.tempInF + " "}`}
            {state.temperature == "C" ? (
              <Button variant="contained" color="primary" onClick={handleClick}>
                F
              </Button>
            ) : (
              <Button
                variant="contained"
                color="secondary"
                onClick={handleClick}
              >
                C
              </Button>
            )}
            <div>
              Max temperature:{" "}
              {state.temperature == "C"
                ? `${state.tempMaxC}`
                : `${state.tempMaxF}`}
            </div>
            <div>
              Min temperature:{" "}
              {state.temperature == "C"
                ? `${state.tempMinC}`
                : `${state.tempMinF}`}
            </div>
            <div>{state.weather.weather[0].description}</div>
          </div>
        </div>
      )}
    </WeatherDiv>
  )
}

const WeatherDiv = styled.div`
  border-style: solid;
  border-color: black;
  display: inline-grid;
  grid-template-columns: 310px;
  grid-auto-rows: 150px;
  background-color: rgba(0, 0, 0, 0.1);
  box-shadow: 0px 0px 10px turquoise;
`
