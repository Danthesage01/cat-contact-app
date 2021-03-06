import React from "react";
import Contact from "./component/Contact"
import whiskerson from "./component/assets/mr-whiskerson.png"
import fluffykins from "./component/assets/fluffykins.png"
import felix from "./component/assets/felix.png"
import pumpkin from "./component/assets/pumpkin.png"

function App() {
  return (
    <div className="contacts">
      <Contact
        img={whiskerson}
        name="Mr. Whiskerson"
        phone="(212) 555-1234"
        email="mr.whiskaz@catnap.meow"
      />
      <Contact
        img={fluffykins}
        name="Fluffykins"
        phone="(212) 555-2345"
        email="fluff@me.com"
      />
      <Contact
        img={felix}
        name="Felix"
        phone="(212) 555-4567"
        email="thecat@hotmail.com"
      />
      <Contact
        img={pumpkin}
        name="Pumpkin"
        phone="(0800) 555-4569"
        email="pumpkin@scrimba.com"
      />
    </div>
  )
}

export default App;
