import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";
import Portfolio from "./components/Protfolio/Portfolio";
import About from "./components/About/About";
import Layout from "./components/Layout/Layout";

function App() {
  const routes = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      errorElement: <h1 className="text-center text-black">404 not found</h1>,
      children: [
        { index: true, element: <Home /> },
        { path: "about", element: <About /> },
        { path: "contact", element: <Contact /> },
        { path: "portfolio", element: <Portfolio /> },
        { errorElement: <h1>404 not found</h1> },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={routes}></RouterProvider>
    </>
  );
}

export default App;
