import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

import SEO from "../components/seo"

const AboutMe = () => (
  <Layout>
    <SEO title="About me" />
    <h1>eaglez0r</h1>
    <p>wannabe programmer, idk anything yet</p>
    <p style={{ fontSize: `10px` }}>i made a calculator from scratch though</p>
    <a target="_blank" href="http://www.github.com/eaglez0r">
      eaglez0r on github
    </a>
  </Layout>
)

export default AboutMe
