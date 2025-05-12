import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Home from "./pages/Home";

import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import React from "react";
import ParticlesComponent from "./components/Particle";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "services", element: <Services /> },
      { path: "contact", element: <Contact /> },
      { path: "*", element: <Home /> },
    ],
  },
]);

function RootLayout() {
  return (
    <div className="App">
      <Header />
      <ParticlesComponent id="tsparticles" className="absolute inset-0" />

      <React.Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </React.Suspense>
      <Footer />
    </div>
  );
}

function App() {
  return <RouterProvider router={router} />;
}

export default App;
