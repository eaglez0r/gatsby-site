import React, { useState, useEffect } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import Button from "@material-ui/core/Button"

const FifthPage = () => {
  const [state, setState] = useState({
    loading: true,
    person: null,
    counter: 0,
  })
  const handleClick = () => {
    let newCounter = state.counter
    newCounter += 1
    setState({ ...state, counter: newCounter })
    console.log(state.counter)
  }
  useEffect(() => {
    async function fetchApi() {
      const url = "https://api.randomuser.me/"
      const response = await fetch(url)
      const data = await response.json()
      setState({ ...state, loading: false, person: data.results[0] })
    }
    fetchApi()
  }, [state.counter])

  return (
    <Layout>
      <SEO title="Fetching data from an API!!" />
      <p>
        Getting data from{" "}
        <a target="_blank" href="http://www.randomuser.me">
          randomuser.me
        </a>{" "}
        just so I could learn how to fetch data from an API. Pretty cool.
      </p>
      <p>It generates a new person every time you refresh the page</p>
      {state.loading ? (
        <div>loading</div>
      ) : (
        <div>
          {state.person.name.first} {state.person.name.last}
          <div>
            <img src={state.person.picture.large} />
          </div>
          <Button variant="contained" color="secondary" onClick={handleClick}>
            new person
          </Button>
          <br />
          <br />
          <p>
            After making this, I added this button to make another API call on
            click.
          </p>
          <p>
            It seems to break if you click too fast, though. Don't click too
            fast. Pls
          </p>
        </div>
      )}
    </Layout>
  )
}

export default FifthPage
