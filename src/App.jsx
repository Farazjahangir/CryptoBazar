import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import DrawerContextProvider from "./ContextApi/DrawerContext";
import Router from "./router";
import "./App.css";
import { store, persistor } from "./redux/store";

function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <QueryClientProvider client={queryClient}>
            <DrawerContextProvider>
              <BrowserRouter>
                <Router />
              </BrowserRouter>
            </DrawerContextProvider>
          </QueryClientProvider>
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;
