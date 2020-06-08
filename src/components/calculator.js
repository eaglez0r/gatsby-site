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
    <div className="theonecalc">
      <h2 className="results">{digits}</h2>
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
      <button className="mathbuttonReturn" onClick={removeLast}>
        Return
      </button>
      <MathButton className="mathbutton" onClick={resetButton}>
        Reset
      </MathButton>
    </div>
  )
}

export default Calculator

const MathButton = styled.button`
  text-decoration: none;
  color: rgba(255, 255, 255, 0.8);
  background: rgb(145, 92, 182);
  padding: 15px 40px;
  border-radius: 4px;
  font-weight: normal;
  text-transform: uppercase;
  transition: all 0.2s ease-in-out;
  &:hover {
    color: rgba(255, 255, 255, 1);
    box-shadow: 0 5px 15px rgba(145, 92, 182, 0.4);
  }
`
