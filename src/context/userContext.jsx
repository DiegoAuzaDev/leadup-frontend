import { createContext, useContext, useState } from "react";

const UserContext = createContext();

function UserContextProvider(props) {
  const [user, setUser] = useState({});
  return <UserContext.Provider value={[user, setUser]} {...props} />;
}

function useUserContext() {
  const context = useContext(UserContext);
  if (!context) throw new Error("No user Context");
  return context;
}

export { UserContextProvider, useUserContext };
