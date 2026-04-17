import "./App.css";
import React from "react";
import { useRoutes } from "react-router";
import ReadGroups from "./pages/ReadGroups";
import CreateGroups from "./pages/CreateGroups";
import { Link } from "react-router";

const App = () => {
  const descr =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.";

  // Sets up routes
  let element = useRoutes([
    {
      path: "/view",
      element: <ReadGroups />,
    },
    {
      path: "/create",
      element: <CreateGroups />,
    },
  ]);

  return (
    <div className="App">
      <div className="header">
        <h1>Group Mates 🫂</h1>
        <Link to="/view">
          <button className="headerBtn"> View Groups 🔍 </button>
        </Link>
        <Link to="/create">
          <button className="headerBtn"> Create a Group 🫱🏻‍🫲🏿 </button>
        </Link>
      </div>
      {element}
    </div>
  );
};

export default App;
