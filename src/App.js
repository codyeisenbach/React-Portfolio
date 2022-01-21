import React, { useState, useMemo } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";
import Navie from "./components/Navbar";
import PortfolioContext from "./utils/PortfolioContext";
import "./App.css";

/* two functions needed, one passed down to <Navie> from this component that sets the state to what is clicked
 and one that's inside of <Portfolio> that sets the query based on the state 
 */

function App() {
  const [choice, setChoiceState] = useState("");
  const value = useMemo(() => ({ choice, setChoiceState }), [choice]);

  // console.log(choiceState.choice);
  return (
    <HashRouter basename="/">
      <PortfolioContext.Provider value={value}>
        <Navie />
        <Routes>
          <Route exact path="/" element={Portfolio(choice)} />
          <Route path="/Resume" element={<Resume />} />
          <Route path="/Portfolio" element={Portfolio(choice)} />
        </Routes>
      </PortfolioContext.Provider>
    </HashRouter>
  );
}

export default App;
