import { useState } from "react";

import Header from "./components/Header.jsx"
import Results from "./components/Results.jsx"
import UserInput from "./components/UserInput.jsx"

function App() {

  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1000,
    expectedReturn: 5,
    duration: 10
});

function handleInputChange(key, newValue) {
    setUserInput((prevValues) => {
        return {
            ...prevValues,
            [key]: +newValue
        };
    });
}

let isInputValid = userInput.annualInvestment > 0 && 
userInput.duration > 0 &&
userInput.expectedReturn > 0 &&
userInput.initialInvestment > 0;

  return (
    <main>
      <Header />
      <UserInput userInput={userInput} onChange={handleInputChange}/>
      {isInputValid && <Results userInput={userInput}/>}
      {!isInputValid && <p className="center">Please, enter valid input data.</p>}
    </main>
  )
}

export default App
