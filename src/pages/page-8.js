import React, { useState } from "react"
import { Link } from "gatsby"
import styled, { createGlobalStyle } from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => {
  const [nav, showNav] = useState(false)
  return (
    <Layout>
      <SEO title="Page two!!!!!!1" />
      <div>
        <Global />
        <MenuIcon nav={nav} onClick={() => showNav(!nav)}>
          <div />
          <div />
          <div />
        </MenuIcon>
        <MenuLinks nav={nav}>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Calculator</a>
            </li>
            <li>
              <a href="#">Weather</a>
            </li>
          </ul>
        </MenuLinks>
      </div>
    </Layout>
  )
}

export default SecondPage

const MenuIcon = styled.button`
  position: fixed;
  top: 2rem;
  right: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 1.5rem;
  height: 1.5rem;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 5;

  div {
    width: 1.5rem;
    height: 0.2rem;
    background: black;
    border-radius: 5px;
    transform-origin: 1px;
    position: relative;
    transition: opacity 300ms, transform 300ms;

    :first-child {
      transform: ${({ nav }) => (nav ? "rotate(45deg)" : "rotate(0)")};
    }

    :nth-child(2) {
      opacity: ${({ nav }) => (nav ? "0" : "1")};
    }

    :nth-child(3) {
      transform: ${({ nav }) => (nav ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`
const Global = createGlobalStyle`
    body {
        margin: 0;
        padding: 0%;
        overflow-x: hidden;
    }
`
const MenuLinks = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100vh;
  width: 25%;
  background: #d7d7d7;
  position: absolute;
  top: 0;
  right: 0;
  transition: transform 300ms;
  transform: ${({ nav }) => (nav ? "translateX(0)" : "translateX(100%)")};
  ul {
    list-style-type: none;
  }

  li {
    margin-top: 1rem;
  }

  a {
    text-decoration: none;
    color: black;
    font-size: 1.5rem;
    transition: color 300ms;
    :hover {
      color: red;
    }
  }
`
