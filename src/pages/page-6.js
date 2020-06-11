import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import { useGetWeather } from "./Hook.js"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SixthPage = () => {
  return (
    <Layout>
      <SEO title="Weather" />
      <div>
        {useGetWeather(
          "http://api.openweathermap.org/data/2.5/weather?id=3448433&APPID=92a0f139f156286198cf8bac00a51dc6"
        )}
        {useGetWeather(
          "http://api.openweathermap.org/data/2.5/weather?id=4634946&APPID=92a0f139f156286198cf8bac00a51dc6"
        )}
        {useGetWeather(
          "http://api.openweathermap.org/data/2.5/weather?id=2643743&APPID=92a0f139f156286198cf8bac00a51dc6"
        )}
      </div>
    </Layout>
  )
}

export default SixthPage
