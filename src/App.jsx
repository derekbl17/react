import { useState } from "react";

import { Child } from "./components/Child";
import Fetched from "./components/Fetched";
import FirstFuncional from "./components/FirstFuncional";
import { dogsArray } from "./assets/functions/data.js";
import Auto from "./components/Auto";
import Helloer from "./components/Helloer";
import TextDisplayer from "./components/TextDisplayer";
import Zebras from "./components/Zebras";
import TrippleProp from "./components/TrippleProp";
import { propsObject } from "./assets/functions/propsObject";
import OutsideFile from "./components/OutsideFile";
import DogDisplayer from "./components/DogDisplayer";
import DogDisplayer3 from "./components/DogDisplayer3";
import DogNumDisplayer from "./components/DogNumDisplayer";
import First from "./components/First";
import Second from "./components/Second";
import Drill1 from "./components/Drill1";

function App() {
  return (
    <>
      {/* <Child name="Johhny" lastName="Johner" textColor="white" bc="black" />
      <Fetched/> */}
      <FirstFuncional dogs={dogsArray} name="name1" color="red" />
      <FirstFuncional dogs={dogsArray} name="name2" color="cyan" />
      <FirstFuncional dogs={dogsArray} name="name3" color="gray" />
      <Auto marks={["bmw", "audi", "toyota"]} />
      <Helloer color="pink" weight="bold" />
      <TextDisplayer text="Display me" />
      <Zebras num="1" />
      <Zebras num="2" />
      <Zebras num="3" />
      <TrippleProp txtH1="H1 text" txtH2="H2 text" color="green" />
      <OutsideFile file={propsObject} />
      <DogDisplayer />
      <DogDisplayer3 />
      <DogNumDisplayer />
      <First give="1st" />
      <Second give="2nd" />
      <Drill1
        msg1="first drill"
        msg2="second drill"
        msg3="third drill"
        msg4="Oil"
      />
    </>
  );
}

export default App;
