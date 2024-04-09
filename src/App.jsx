import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserContextProvider } from "./context/UserContext";

import Login from "./pages/Login";
import Home from "./pages/Home";
import { useEffect } from "react"

function App() {
  return (
    <main className="w-full h-screen">
            <UserContextProvider>

      <BrowserRouter>
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
      </UserContextProvider>
    </main>
  );
}

export default App;
