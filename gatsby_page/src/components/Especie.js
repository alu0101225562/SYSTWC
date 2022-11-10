import React, { useState } from "react"

function Especie({ specie }) {
  const [showTax, setShowTax] = useState(false)
  const [showRef, setShowRef] = useState(false)
  return (
    <div style={{ marginLeft: "1rem" }}>
      <p style={{ color: "red", fontSize: "1.5rem" }}>{specie.n}</p>
      <p>{specie.nc}</p>
      <img src={specie.img}></img>
      <p style={showTax ? { display: "block" } : { display: "none" }}>
        {specie.referencias}
      </p>
      <p style={showRef ? { display: "block" } : { display: "none" }}>
        {specie.taxonomia}
      </p>
      <button onClick={() => setShowTax(current => !current)}>Tax</button>
      <button onClick={() => setShowRef(current => !current)}>Ref</button>
    </div>
  )
}

export default Especie
