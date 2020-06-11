import React from "react"
import { Link } from "gatsby"
import { useGetWeather } from "./Hook.js"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SeventhPage = () => {
  return (
    <Layout>
      <SEO title="Page two!!!!!!1" />
      <div>
        <div>
          <p>something new soon</p>
        </div>
      </div>
    </Layout>
  )
}

export default SeventhPage
