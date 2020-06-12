import React, { useState, useEffect } from "react"
import { Link } from "gatsby"

import cityData from "../../public/static/d/city.list.json"
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
    cityInput = cityInput.current.value
    countryInput = countryInput.current.value
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
          <input placeholder="city" ref={cityInput} type="text" />
          <input placeholder="country" ref={countryInput} type="text" />
          <button type="submit">Search</button>
        </form>
        <MakesBox weatherIds={city.weatherIds} />
      </div>
    </Layout>
  )
}
export default SeventhPage
