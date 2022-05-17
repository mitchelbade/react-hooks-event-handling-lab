import React, { useState } from "react";

function Keypad() {
	const [password, setPassword] = useState("");

	function input() {
		console.log("Entering password...")
	}

  return (
		<input type="password" value={password} onChange={input}/>
  )
}

export default Keypad;