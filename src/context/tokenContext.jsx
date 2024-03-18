import { useContext, createContext } from "react";
import { useSessionStorage } from "../hooks/useSessionStorage";

const TokenContext = createContext();

function TokenProvider(props) {
  const [token, setToken] = useSessionStorage("LeadUp", "");
  return <TokenContext.Provider value={[token, setToken]} {...props} />;
}

function useToken() {
  const context = useContext(TokenContext);
  if (!context) throw new Error("No Token Context");
  return context;
}

export { TokenProvider, useToken };
