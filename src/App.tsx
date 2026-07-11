import { BrowserRouter, Routes, Route } from "react-router";
import { Overview } from "../routes/overview";
import { Analytics } from "../routes/analytics";
import { Customers } from "../routes/customers";
import { Subscriptions } from "../routes/subscriptions";
import { Invoices } from "../routes/invoices";
import { Products } from "../routes/products";
import { Settings } from "../routes/settings";

export default function Dashboard() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Overview />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/subscriptions" element={<Subscriptions />} />
        <Route path="/invoices" element={<Invoices />} />
        <Route path="/products" element={<Products />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </BrowserRouter>
  );
}
