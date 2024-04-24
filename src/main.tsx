import App from "./App.tsx";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Users from "./users.tsx";
import Transactions from "./transactions.tsx";
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import Dashboard from "./dashboard.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <header>
        {/*   <h1 className="mb-10 w-full bg-gradient-to-b from-yellow-400 via-orange-500 to-red-500 p-7 text-center">
          <Link to="/">My Payment Application</Link>
        </h1> */}
        <App />
      </header>
      <Routes>
        <Route path="/users" element={<Users />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
