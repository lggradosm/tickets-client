import { Route, Routes, useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Tickets from "./Tickets";
import Dashboard from "./Dashboard";
import Team from "./Team";
import { useEffect } from "react";
import { LoginService } from "../services/LoginService";
import { UserContextProvider } from "../context/UserContext";
export default function Home() {
  const { verify } = LoginService();
  const navigate = useNavigate();
  const tokenVerified = true;

  const verifyToken = () => {
    if (tokenVerified === null) {
      window.localStorage.removeItem("token");
      navigate("/login");
    }
  };

  useEffect(verifyToken, []);

  if (tokenVerified)
    return (
      <UserContextProvider>
        <section className="w-screen h-screen flex">
          <Sidebar />
          <div className="w-full h-full ">
            <Routes>
              <Route path="/tickets" element={<Tickets />} />
              <Route path="/personal" element={<Team />} />
              <Route path="/*" element={<Dashboard />} />
            </Routes>
          </div>
        </section>
      </UserContextProvider>
    );
}
