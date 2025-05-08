import Header from "./components/Header/Header";
import CoreConcepts from "./components/CoreConcepts"
import Examples from "./components/Examples";

function Somemore(){
  return <header>
      <p>Here I'm adding some text for learning</p></header>
}

function App() {
  return (
    //Fragments are simply used as a html tag without any key word <> childrens can be wrapped here </>
    <>
      <Header></Header>
      {/* <Somemore/> */}
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </>
  );
}

export default App;
