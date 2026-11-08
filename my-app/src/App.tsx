import "./App.css";
import { lazy, Suspense, useEffect, useLayoutEffect } from "react";
import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
  useLocation,
} from "react-router-dom";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLenis, scrollToTarget } from "./hooks/useLenis";
import Footer from "./components/Footer";
import Header from "./components/Header";
import CookieConsent from "./components/CookieConsent";
import { initializeAnalytics } from "./utils/userAnalytics";
import Home from "./pages/Home";

// Home ships in the main bundle; every other route is split out.
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const Contact = lazy(() => import("./pages/Contact"));
const OurWork = lazy(() => import("./pages/OurWork"));
const Products = lazy(() => import("./pages/Products"));
const WhatsAppAutomation = lazy(() => import("./pages/WhatsAppAutomation"));
const FundraisingPlatforms = lazy(() => import("./pages/FundraisingPlatforms"));
const Privacy = lazy(() => import("./pages/Privacy"));
const QrGenerator = lazy(() => import("./components/QRGenerator"));
const BalanceSheet = lazy(() => import("./components/BalanceSheet"));

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

/** Resets scroll on navigation (or jumps to a #hash) and refreshes scroll triggers. */
function RouteScroll() {
  const { pathname, hash } = useLocation();
  useLayoutEffect(() => {
    if (hash) {
      const t = window.setTimeout(() => scrollToTarget(hash), 120);
      return () => window.clearTimeout(t);
    }
    scrollToTarget(0, true);
  }, [pathname, hash]);
  useEffect(() => {
    const t = window.setTimeout(() => ScrollTrigger.refresh(), 300);
    return () => window.clearTimeout(t);
  }, [pathname]);
  return null;
}

function RootLayout() {
  useLenis();
  const { pathname } = useLocation();

  useEffect(() => {
    if (localStorage.getItem("cookieConsent") === "accepted")
      grantAnalyticsConsent();
  }, []);

  return (
    <div className="App">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <RouteScroll />
      <Header />
      <main id="main" key={pathname} className="x-route">
        <Suspense
          fallback={
            <div className="x-loader" role="status" aria-label="Loading">
              <span />
            </div>
          }
        >
          <Outlet />
        </Suspense>
      </main>
      <Footer />
      <CookieConsent onAccept={(ok) => ok && grantAnalyticsConsent()} />
    </div>
  );
}

function App() {
  return <RouterProvider router={router} />;
}

export default App;
