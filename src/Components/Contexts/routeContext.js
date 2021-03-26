import React, { useState, useContext } from "react";

const routeContext = React.createContext();

export function RouteProvider({ children }) {
  const [route, setRoute] = useState("home");
  return (
    <routeContext.Provider value={{ route, setRoute }}>
      {children}
    </routeContext.Provider>
  );
}

export function useRoute() {
  return useContext(routeContext);
}
