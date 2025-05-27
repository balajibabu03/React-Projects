import { useState } from "react";
import Header from "./components/Header"
import UserInput from "./components/UserInput"
import Result from "./components/Results";

function App() {

  const [userInput, setUserInput] = useState({
    "initialInvestment" : 1000,
    "annualInvestment" : 15000,
    "expectedReturn": 6,
    "duration" : 10 
  });

  const userInputisValid = userInput.duration >=1

  function handleChange(initialIdentifier, newValue){
    setUserInput((prevUserInput)=>{
      return {
        ...prevUserInput,
        [initialIdentifier] : +newValue
      }
    })
  }

  return (
    <>
    <Header/>
    <UserInput userInput={userInput} onChange={handleChange} />
    {!userInputisValid && <p className="center">Please enter a valid duration</p>}
    {userInputisValid && <Result input={userInput} />}
    </>
  )
}

export default App
