import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { ToastContainer, toast } from "react-toastify";

import DrawerContextProvider from "./ContextApi/DrawerContext";
import Router from "./router";
import "./App.css";
import { store, persistor } from "./redux/store";
import { handleFirebaseError } from "./utils/firebaseErrorHandler";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false, // Disable retries for testing
        onError: (error) => {
          console.log("Query Error:", error);
          handleFirebaseError(error);
        },
      },
      mutations: {
        retry: false, // Disable retries for mutations as well
        onError: (error) => {
          console.log("Mutation Error:", error);
          handleFirebaseError(error);
        },
      },
    },
  });

  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <QueryClientProvider client={queryClient}>
            <DrawerContextProvider>
              <ToastContainer />
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
