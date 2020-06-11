import React, { useState, useEffect } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

import SEO from "../components/seo"
import Button from "@material-ui/core/Button"
import styled from "styled-components"

const Page4 = () => {
  const [message, setMessage] = useState("")
  const [counter, setCounter] = useState(0)

  const handleClick = () => {
    setCounter(counter + 1)
  }

  const handleKeyPress = e => {
    setMessage(`${e.key}`)
  }

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress)
  })

  return (
    <Layout>
      <SEO title="keys and clicks" />
      <h1>Showing whatever key you have pressed. teehee I'm watching u</h1>

      {message == "" ? (
        <p>Please press any key.</p>
      ) : (
        <p>You've pressed the "{message}" key.</p>
      )}

      <ClickyDiv>
        <p>Clicky counter: {counter}</p>
        <Button variant="contained" color="primary" onClick={handleClick}>
          Clicky
        </Button>
      </ClickyDiv>
    </Layout>
  )
}

export default Page4

const ClickyDiv = styled.div`
  border-style: solid;
  border-color: black;
  background-color: rgba(50, 50, 50, 0.2);
  width: 170px;
`
