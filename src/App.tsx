import { useState } from "react";

function App() {
  return (
    <div className="min-h-full">
      <nav className="bg-gradient-to-b from-yellow-400 via-orange-500 to-red-500">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <div className=" flex items-baseline space-x-4">
                <a
                  href="/"
                  className="rounded-md px-3 py-2 text-sm font-medium  text-black hover:bg-gray-700  hover:text-white"
                >
                  Dashboard
                </a>
                <a
                  href="/users"
                  className="rounded-md px-3 py-2 text-sm font-medium text-black hover:bg-gray-700 hover:text-white"
                >
                  Users
                </a>
                <a
                  href="/transactions"
                  className="rounded-md px-3 py-2 text-sm font-medium text-black hover:bg-gray-700 hover:text-white"
                >
                  Transactions
                </a>
              </div>
            </div>
            <div className=" flex  items-baseline space-x-4">
              <div className="rounded-md  px-3 py-2 text-lg font-medium text-black">
              Transactions Management System
              </div>
            </div>
            <div className="hidden md:block"></div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default App;
