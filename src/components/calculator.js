import React, { useState } from "react"
import styled from "styled-components"

const Calculator = () => {
  const [digits, setDigits] = useState("")

  const handleClick = e => {
    setDigits(`${digits}${e.target.value}`)
  }

  const calculate = () => {
    let result = eval(digits)
    setDigits(result.toString())
  }

  const removeLast = () => {
    setDigits(digits.substr(0, digits.length - 1))
  }

  const resetButton = () => {
    setDigits("")
  }

  return (
    <CalcWrapper>
      <Results>{digits}</Results>
      <MathButton className="mathbutton" value={1} onClick={handleClick}>
        1
      </MathButton>

      <MathButton className="mathbutton" value={2} onClick={handleClick}>
        2
      </MathButton>
      <MathButton className="mathbutton" value={3} onClick={handleClick}>
        3
      </MathButton>
      <MathButton className="mathbutton" value={4} onClick={handleClick}>
        4
      </MathButton>
      <MathButton className="mathbutton" value={5} onClick={handleClick}>
        5
      </MathButton>
      <MathButton className="mathbutton" value={6} onClick={handleClick}>
        6
      </MathButton>
      <MathButton className="mathbutton" value={7} onClick={handleClick}>
        7
      </MathButton>
      <MathButton className="mathbutton" value={8} onClick={handleClick}>
        8
      </MathButton>
      <MathButton className="mathbutton" value={9} onClick={handleClick}>
        9
      </MathButton>
      <MathButton className="mathbutton" value={0} onClick={handleClick}>
        0
      </MathButton>
      <MathButton className="mathbutton" value="." onClick={handleClick}>
        .
      </MathButton>
      <MathButton className="mathbutton" value="+" onClick={handleClick}>
        +
      </MathButton>
      <MathButton className="mathbutton" value="-" onClick={handleClick}>
        -
      </MathButton>
      <MathButton className="mathbutton" value="/" onClick={handleClick}>
        ÷
      </MathButton>
      <MathButton className="mathbutton" value="*" onClick={handleClick}>
        *
      </MathButton>
      <MathButton className="mathbutton" onClick={calculate}>
        =
      </MathButton>
      <MathButton onClick={removeLast}>Backspace</MathButton>
      <MathButton className="mathbutton" onClick={resetButton}>
        Reset
      </MathButton>
    </CalcWrapper>
  )
}

export default Calculator

const MathButton = styled.button`
  width: 120px;
  height: 60px;
  background: lightgray;
  margin: 15px;
  font-size: 20px;
  border-radius: 15%;
  &:hover {
    text-decoration: none;
    background: rgba(255, 0, 0, 0.1);
    border-radius: 4px;
    font-weight: normal;
    transition: all 0.2s ease-in-out;
    color: black;
    box-shadow: 0 5px 15px rgb(0, 0, 0);
  }
`

const Backspace = styled.button`
  color: red;
`

const Results = styled.h2`
  border-style: solid;
  border-color: black;
  height: 50px;
  background-color: rgba(0, 0, 0, 0.2);
`

const CalcWrapper = styled.div`
  border-color: black;
  border-style: solid;
`
