import { Navigate, useRoutes } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";

// layouts
import MainLayout from "./layout";

// pages
import Home from "./pages/Home";
import Page404 from "./pages/Page404";

///////////////////////////////////////////////

const Router = () => {
  return useRoutes([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { path: "/", element: <Navigate to="/home" /> },
        { path: "home", element: <Home /> },
        { path: "404", element: <Page404 /> },
        { path: "*", element: <Navigate to="/404" /> },
      ],
    },
    { path: "*", element: <Navigate to="/404" replace /> },
  ]);
};

function App() {
  return (
    <>
      <CssBaseline />
      <Router />
    </>
  );
}

export default App;
