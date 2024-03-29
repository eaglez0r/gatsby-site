/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import BurgerMenu from "./BurgerMenu"
import styled from "styled-components"

const Layout = ({ children }) => {
  return (
    <>
      <Header siteTitle={"Random things with GatsbyJS"} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960, // used to be 960, not sure about this spaghetti now
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <BurgerMenu />
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}
          {` `}
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

const Wrapper = styled.div`
  position: relative;
  overflow-x: hidden;
  overflow-y: auto;
`
