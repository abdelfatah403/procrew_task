import { createHashRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Register from "./components/register/Register";
import Layout from "./components/Layout/Layout";
import Home from "./home/Home";
import Login from "./components/login/Login";
import { ProtectedRoute } from "./components/ProtectedRoute";
import Dashboard from "./components/Dashboard/Dashboard";
import { CartProvider } from "./context/CartContext";
import Cart from "./components/Cart/Cart";

let router = createHashRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element:<ProtectedRoute><Home /></ProtectedRoute> },
      { path: "register", element: <Register /> },
      { path: "login", element: <Login /> },
      { path: "dashboard", element: <Dashboard /> },
      { path: "cart", element:<ProtectedRoute><Cart /></ProtectedRoute>  },
    ],
  },
]);

function App() {
  

  return <CartProvider><RouterProvider router={router}></RouterProvider></CartProvider>;
}

export default App;
