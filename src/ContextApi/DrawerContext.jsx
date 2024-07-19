import { createContext, useContext, useState } from "react";

const DrawerContext = createContext({
  drawerState: false,
  setDrawerState: () => {},
});

const DrawerContextProvider = ({ children }) => {
  const [drawerState , setDrawerState] = useState();

  return (
    <DrawerContext.Provider value={{ drawerState, setDrawerState }}>
      {children}
    </DrawerContext.Provider>
  );
};

export const useDrawer = () => useContext(DrawerContext)

export default DrawerContextProvider;
