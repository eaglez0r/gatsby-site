import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Calculator from "../components/calculator"

export default () => (
  <Layout>
    <SEO title="Calculator" />
    <h1>Calculator! </h1>
    <Calculator />
    <br />
  </Layout>
)
