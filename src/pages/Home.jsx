import { Route, Routes } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Tickets from "./Tickets";
import Dashboard from "./Dashboard";
import Team from "./Team";

export default function Home() {
  return (
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
  );
}
