import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Calculator from "../components/calculator"

export default () => (
  <Layout>
    <SEO title="brand new page, pog." />
    <h1>Calculator that kind of works</h1>
    <Calculator />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)
