import React, { useState, useEffect } from "react"
import { Link } from "gatsby"

import cityData from "../../city-list.json"
import WeatherComponent from "../components/weather"
import Layout from "../components/layout"
import SEO from "../components/seo"
import MakesBox from "../components/MakesBox"

const SeventhPage = () => {
  const [city, setCity] = useState({
    weatherIds: [],
  })

  let cityInput = React.createRef()
  let countryInput = React.createRef()

  const handleSubmit = e => {
    e.preventDefault()
    try {
      cityInput = cityInput.current.value
      countryInput = countryInput.current.value
    } catch (err) {
      console.log(err)
    }
    for (let i = 0; i < cityData.length; i++) {
      if (
        cityInput === cityData[i].name &&
        countryInput === cityData[i].country
      ) {
        setCity({
          ...city,
          city: cityData[i].id,
          weatherIds: [...city.weatherIds, cityData[i].id],
        })
      }
    }
  }

  return (
    <Layout>
      <SEO title="pepega" />
      <div>
        <form onSubmit={handleSubmit}>
          <input required placeholder="city" ref={cityInput} type="text" />
          <input
            required
            placeholder="country"
            ref={countryInput}
            type="text"
          />
          <button type="submit">Search</button>
        </form>
        <MakesBox weatherIds={city.weatherIds} />
      </div>
    </Layout>
  )
}
export default SeventhPage
