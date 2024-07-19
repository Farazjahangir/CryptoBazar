import { BrowserRouter } from "react-router-dom";

import DrawerContextProvider from "./ContextApi/DrawerContext";
import Router from "./router";
import "./App.css";

function App() {
  return (
    <>
      <DrawerContextProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </DrawerContextProvider>
    </>
  );
}

export default App;
