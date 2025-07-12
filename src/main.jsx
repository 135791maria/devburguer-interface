
import {Elements} from "@stripe/react-stripe-js";
import { StrictMode } from "react"
import { createRoot } from "react-dom/client";
import { ToastContainer } from "react-toastify";


import { RouterProvider } from "react-router-dom";
import stripePromise from  "./config/stripeConfig";
import AppProvider from  "./hooks";
import GlobalStyles from  "./styles/globalStyles";
import { router } from   "./routes";



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppProvider>
    <Elements stripe={stripePromise}>
    <RouterProvider router={router}/>
    </Elements>
    <GlobalStyles/>
    <ToastContainer autoClose={2000} theme="colored" />
    </AppProvider>
  </StrictMode>,
);
