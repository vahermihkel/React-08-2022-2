import { useState } from "react";

function Avaleht() {
  const [kogus, uuendaKogus] = useState(30);
  const [tooteNimi, uuendaTooteNimi] = useState("Telefon mudeliga Samsung");
  const [tooteKategooria, uuendaTooteKategooria] = useState("Telefon");

  const v2henda = () => {
    uuendaKogus(kogus - 1);
  }
  
  const suurenda = () => {
    uuendaKogus(kogus + 1);
  }

  const ingliseKeelseks = () => {
    uuendaTooteNimi("Telephone model Samsung");
    uuendaTooteKategooria("Telephone");
  }

  return ( 
  <div>
    <div>{tooteNimi}</div>
    <div>{tooteKategooria}</div>
    <button onClick={ingliseKeelseks}>Muuda</button> <br />
    <button onClick={v2henda}>Vähenda</button>
    <div>{kogus}</div>
    <button onClick={suurenda}>Suurenda</button>
  </div> );
}

export default Avaleht;