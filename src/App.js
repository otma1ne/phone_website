import "./App.css";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Details from "./Components/Details/Details";
import { ProductContextProvider } from "./store/ProductContext";
import Cart from "./Components/Cart/Cart";
import NotFound from "./Components/NotFound/NotFound";

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
      errorElement: (
        <>
          <Navbar />
          <NotFound />
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
      errorElement: (
        <>
          <Navbar />
          <NotFound />
        </>
      ),
    },
    {
      path: "/cart",
      element: (
        <>
          <Navbar />
          <Cart />
        </>
      ),
      errorElement: (
        <>
          <Navbar />
          <NotFound />
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
