import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rgba(50, 200, 200, 0.6)`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `black`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <br />
      <nav>
        <ul
          style={{
            display: `flex`,
          }}
        >
          <ListItem>
            <Link
              style={{
                color: `black`,
                textDecoration: `none`,
                fontWeight: `bold`,
              }}
              activeStyle={activeStyle}
              to="/"
            >
              Home
            </Link>
          </ListItem>
          <ListItem>
            <Link
              style={{
                color: `black`,
                textDecoration: `none`,
                fontWeight: `bold`,
              }}
              activeStyle={activeStyle}
              to="/about"
            >
              About
            </Link>
          </ListItem>
          <ListItem>
            <Link
              activeStyle={activeStyle}
              style={{
                color: `black`,
                textDecoration: `none`,
                fontWeight: `bold`,
              }}
              to="/page-3"
            >
              Calculator
            </Link>
          </ListItem>
          <ListItem>
            <Link
              activeStyle={activeStyle}
              style={{
                color: `black`,
                textDecoration: `none`,
                fontWeight: `bold`,
              }}
              to="/page-4"
            >
              Showing keyPress/clicky counter
            </Link>
          </ListItem>
          <ListItem>
            <Link
              activeStyle={activeStyle}
              style={{
                color: `black`,
                textDecoration: `none`,
                fontWeight: `bold`,
              }}
              to="/page-5"
            >
              Fetching data from an API
            </Link>
          </ListItem>
          <ListItem>
            <Link
              activeStyle={activeStyle}
              style={{
                color: `black`,
                textDecoration: `none`,
                fontWeight: `bold`,
              }}
              to="/page-6"
            >
              Weather
            </Link>
          </ListItem>
          <ListItem>
            <Link
              activeStyle={activeStyle}
              style={{
                color: `black`,
                textDecoration: `none`,
                fontWeight: `bold`,
              }}
              to="/page-7"
            >
              idk yet
            </Link>
          </ListItem>
        </ul>
      </nav>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

const ListItem = styled.li`
  display: block;
  float: right;
  margin: 10px;
`

const activeStyle = {
  textDecoration: `none`,
  color: `black`,
  borderStyle: `double`,
}
