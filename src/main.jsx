
import {Elements} from "@stripe/react-stripe-js";
import { BrowserRouter } from "react-router-dom";
import { StrictMode } from "react"
import { createRoot } from "react-dom/client";

import { ToastContainer } from "react-toastify";
import {Router} from "./routes";

import { RouterProvider } from "react-router-dom";
import stripePromise from  "./config/stripeConfig";
import AppProvider from  "./hooks";
import GlobalStyles from  "./styles/globalStyles";




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppProvider>
    <Elements stripe={stripePromise}>
   <BrowserRouter>
   <Router/>
   </BrowserRouter>
    </Elements>
    <GlobalStyles/>
    <ToastContainer autoClose={2000} theme="colored" />
    </AppProvider>
  </StrictMode>
);
