import "./App.css";
import Navbar from "./components/navbar";
import Home from "./components/home";
import Explore from "./components/explore";
import Create from "./components/create";
import Login from "./components/login";
import Signup from "./components/signup";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";

function App() {
  let currentPath = window.location.pathname;
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/explore",
      element: <Explore />,
    },
    {
      path: "/create",
      element: <Create />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
  ]);

  return (
    <AuthProvider>
      <div>
        {currentPath === "/signup" || currentPath === "/login" ? (
          <div></div>
        ) : (
          <Navbar />
        )}
        <RouterProvider router={router} />
      </div>
    </AuthProvider>
  );
}

export default App;
