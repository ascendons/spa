import "./App.css";
import { useLenis } from "./hooks/useLenis";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import WhatsAppAutomation from "./pages/WhatsAppAutomation";
import FundraisingPlatforms from "./pages/FundraisingPlatforms";
import OurWork from "./pages/OurWork";
import Products from "./pages/Products";
import JParticlesEffect from "./components/JParticlesEffect";
import CookieConsent from "./components/CookieConsent";
import { initializeAnalytics } from "./utils/userAnalytics";

import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import React, { useEffect } from "react";
import QrGenerator from "./components/QRGenerator";
import BalanceSheet from "./components/BalanceSheet";
import Privacy from "./pages/Privacy";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "services", element: <Services /> },
      { path: "contact", element: <Contact /> },
      { path: "our-work", element: <OurWork /> },
      { path: "products", element: <Products /> },
      {
        path: "solutions/whatsapp-business-automation",
        element: <WhatsAppAutomation />,
      },
      {
        path: "solutions/fundraising-workflow-platforms",
        element: <FundraisingPlatforms />,
      },
      { path: "qr", element: <QrGenerator /> },
      { path: "balancesheet", element: <BalanceSheet /> },
      { path: "privacy", element: <Privacy /> },
      { path: "*", element: <Navigate to="/" replace /> },
    ],
  },
]);

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

// Google Analytics loads with consent denied (see index.html); grant it only after the visitor accepts.
const grantAnalyticsConsent = () => {
  window.gtag?.("consent", "update", { analytics_storage: "granted" });
  initializeAnalytics();
};

function RootLayout() {
  useLenis();

  const handleCookieConsent = (consent: boolean) => {
    if (consent) {
      grantAnalyticsConsent();
    }
  };

  useEffect(() => {
    // Initialize analytics if consent was already given
    const consent = localStorage.getItem("cookieConsent");
    if (consent === "accepted") {
      grantAnalyticsConsent();
    }
  }, []);

  return (
    <div className="App">
      <JParticlesEffect />
      <Header />
      <React.Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </React.Suspense>
      {/* site-wide privacy banner */}
      <Footer />
      <CookieConsent onAccept={handleCookieConsent} />
    </div>
  );
}

function App() {
  return <RouterProvider router={router} />;
}

export default App;
