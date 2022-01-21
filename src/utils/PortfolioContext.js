import { createContext } from "react";

const PortfolioContext = createContext({
  choice: "",
  setChoiceState: () => {},
});

export default PortfolioContext;
