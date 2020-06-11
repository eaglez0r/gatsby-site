import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import useGetWeather from "./Hook.js"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SixthPage = () => {
  return (
    <Layout>
      <SEO title="Weather" />
      <div>
        {useGetWeather(3448433)}
        {useGetWeather(4634946)}
        {useGetWeather(2643743)}
        {useGetWeather(6173331)}
        {useGetWeather(5128581)}
        {useGetWeather(2800866)}
        {useGetWeather(2013159)}
      </div>
    </Layout>
  )
}

export default SixthPage
