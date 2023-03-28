import "./App.css";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Details from "./Components/Details/Details";
import { ProductContextProvider } from "./Components/ProductContext";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar />
          <Home />
        </>
      ),
    },
    {
      path: "/details/:id",
      element: (
        <>
          <Navbar />
          <Details />
        </>
      ),
    },
  ]);

  return (
    <div className="App">
      <ProductContextProvider>
        <RouterProvider router={router} />
      </ProductContextProvider>
    </div>
  );
}

export default App;
