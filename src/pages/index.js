import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import FoxImage from "../images/fox2.jpg"

import Layout from "../components/layout"

import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div>
      <img src={FoxImage} />
      <DarkOpacity>
        <div>
          <HeroText>THIS IS SOME TEXT</HeroText>
          <HeroText2>This is some text</HeroText2>
          <HeroButton>Button</HeroButton>
        </div>
      </DarkOpacity>
    </div>
  </Layout>
)

export default IndexPage

const HeroText = styled.h1`
  position: absolute;
  font-size: 60px;
  top: 20%;
  left: 350px;
  color: white;
`

const HeroText2 = styled.h1`
  position: absolute;
  font-size: 25px;
  top: 30%;
  left: 500px;
  color: white;
`

const HeroButton = styled.button`
  position: absolute;
  top: 40%;
  left: 580px;
`

const DarkOpacity = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 33.5%;
  &:hover {
    background: rgba(0, 0, 0, 0.6);
    transition: ease-in 0.2s;
  }
`
