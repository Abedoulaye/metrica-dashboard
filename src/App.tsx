import { BrowserRouter, Routes, Route } from "react-router";
import {Overview} from "../routes/overview"; 
import {Analytics} from "../routes/analytics"

export default function Dashboard() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Overview />} /> 
        <Route path="/analytics" element={<Analytics />} />
      </Routes>
    </BrowserRouter>
  );
}