import { BrowserRouter, Routes, Route } from "react-router";
import {Overview} from "../routes/overview"; 
import {Analytics} from "../routes/analytics"
import {Customers} from "../routes/customers"
import {Subscriptions} from "../routes/subscriptions"


export default function Dashboard() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Overview />} /> 
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/subscriptions" element={<Subscriptions />} /> 
      </Routes>
    </BrowserRouter>
  );
}