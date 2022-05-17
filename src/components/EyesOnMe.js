import React, { useState } from "react"

function EyesOnMe() {
  const [focus, setFocus] = useState("");
  const [blur, setBlur] = useState("");

  function focusButton() {
    console.log("Good!")
  }

  function blurButton() {
    console.log("Hey! Eyes on me!")
  }


  return (
    <button onFocus={focusButton} onBlur={blurButton}>Eyes on me</button>
  )
}

export default EyesOnMe;