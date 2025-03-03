import { Child } from "./components/Child";
import Fetched from "./components/Fetched";

function App() {
  return (
    <>
      <Child name="Johhny" lastName="Johner" textColor="white" bc="black" />
      <Fetched/>
    </>
  );
}

export default App;
