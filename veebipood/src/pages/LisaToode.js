import { useRef, useState } from "react";

function LisaToode() {
  // useState -> numbri või sõna muutmiseks 
  // nupuvajutuse või mingi sisestuse järel
  const [s6num, uuendaS6num] = useState("LISA UUS TOODE!");
  // ref läheb input sisse
  const nimiRef = useRef();

  const sisesta = () => {
    if (nimiRef.current.value === "") {
      uuendaS6num("Pead sisestama toote nime!");
    } else {
      uuendaS6num("Toode lisatud: " + nimiRef.current.value);
    }
  }

  return ( 
  <div>
    <div>{s6num}</div>
    <label>Toote nimi</label>
    <input ref={nimiRef} type="text" />
    <button onClick={sisesta}>Lisa</button>
  </div> );
}

export default LisaToode;