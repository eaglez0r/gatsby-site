import React, { useState, useEffect } from "react"
import { Link } from "gatsby"

import cityData from "../city-list.json"
import WeatherComponent from "../components/weather"
import Layout from "../components/layout"
import SEO from "../components/seo"
import MakesBox from "../components/MakesBox"
import TextField from "@material-ui/core/TextField"

const SeventhPage = () => {
  const [city, setCity] = useState({
    weatherIds: [],
    cityInput: "",
    countryInput: "",
  })

  const handleChange = e => {
    setCity({
      ...city,
      cityInput: e.target.value,
    })
  }

  const handleChange2 = e => {
    setCity({
      ...city,
      countryInput: e.target.value,
    })
  }

  const handleSubmit = e => {
    e.preventDefault()

    for (let i = 0; i < cityData.length; i++) {
      if (
        city.cityInput.toUpperCase().trim() ===
          cityData[i].name.toUpperCase() &&
        city.countryInput.toUpperCase().trim() ===
          cityData[i].country.toUpperCase()
      ) {
        setCity({
          ...city,
          weatherIds: [...city.weatherIds, cityData[i].id],
        })
        break
      } else if (i == cityData.length - 1) {
        alert("City not found.")
      }
    }
  }

  return (
    <Layout>
      <SEO title="Weather" />
      <div>
        <form onSubmit={handleSubmit}>
          <TextField
            variant="filled"
            required
            placeholder="city"
            value={city.cityInput}
            onChange={handleChange}
            type="text"
          />
          <br />
          <TextField
            variant="filled"
            required
            placeholder="country"
            onChange={handleChange2}
            value={city.countryInput}
            type="text"
            inputProps={{ maxLength: 2 }}
            size="small"
          />
          <button type="submit">Search</button>
        </form>
        <MakesBox weatherIds={city.weatherIds} />
      </div>
    </Layout>
  )
}
export default SeventhPage
