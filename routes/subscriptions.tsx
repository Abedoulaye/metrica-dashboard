import { useNavigate } from "react-router";
import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer } from "recharts";
import { useState } from "react";

const revenueSparkline = [
  { name: "Day 1", value: 15 },
  { name: "Day 2", value: 25 },
  { name: "Day 3", value: 20 },
  { name: "Day 4", value: 35 },
  { name: "Day 5", value: 40 },
  { name: "Day 6", value: 60 },
];

const churnSparkline = [
  { name: "Day 1", value: 60 },
  { name: "Day 2", value: 50 },
  { name: "Day 3", value: 40 },
  { name: "Day 4", value: 35 },
  { name: "Day 5", value: 20 },
  { name: "Day 6", value: 10 },
];

const usersSparkline = [
  { name: "Day 1", value: 10 },
  { name: "Day 2", value: 35 },
  { name: "Day 3", value: 15 },
  { name: "Day 4", value: 45 },
  { name: "Day 5", value: 25 },
  { name: "Day 6", value: 45 },
];

const signupsSparkline = [
  { name: "Day 1", value: 5 },
  { name: "Day 2", value: 8 },
  { name: "Day 3", value: 10 },
  { name: "Day 4", value: 6 },
  { name: "Day 5", value: 20 },
  { name: "Day 6", value: 35 },
];

const sessionsSparkline = [
  { name: "Day 1", value: 10 },
  { name: "Day 2", value: 12 },
  { name: "Day 3", value: 8 },
  { name: "Day 4", value: 15 },
  { name: "Day 5", value: 18 },
  { name: "Day 6", value: 36 },
];

const subscriptionData = [
  {
    id: 1,
    name: "Sentry Analytics",
    email: "hello@sentry.com",
    plan: "Enterprise",
    mrr: "$12,000",
    status: "Active",
    billingCycle: "Yearly",
    nextBilling: "Dec 15, 2024",
    joined: "May 12, 2023",
  },
  {
    id: 2,
    name: "Globex Corporation",
    email: "billing@globex.com",
    plan: "Pro",
    mrr: "$8,500",
    status: "Active",
    billingCycle: "Monthly",
    nextBilling: "Oct 03, 2024",
    joined: "Apr 3, 2023",
  },
  {
    id: 3,
    name: "Initech",
    email: "contact@initech.com",
    plan: "Business",
    mrr: "$6,250",
    status: "Past Due",
    billingCycle: "Quarterly",
    nextBilling: "Sep 18, 2024",
    joined: "Jan 18, 2023",
  },
  {
    id: 4,
    name: "Soylent Corp.",
    email: "admin@soylent.com",
    plan: "Pro",
    mrr: "$4,800",
    status: "Active",
    billingCycle: "Monthly",
    nextBilling: "Nov 07, 2024",
    joined: "Feb 7, 2023",
  },
  {
    id: 5,
    name: "Hooli",
    email: "team@hooli.com",
    plan: "Business",
    mrr: "$4,200",
    status: "Active",
    billingCycle: "Yearly",
    nextBilling: "Mar 21, 2025",
    joined: "Mar 21, 2023",
  },
  {
    id: 6,
    name: "Aperture Science",
    email: "support@aperture.com",
    plan: "Pro",
    mrr: "$3,600",
    status: "Canceled",
    billingCycle: "Monthly",
    nextBilling: "N/A",
    joined: "Apr 28, 2023",
  },
  {
    id: 7,
    name: "Vandelay Industries",
    email: "info@vandelay.com",
    plan: "Starter",
    mrr: "$1,200",
    status: "Trial",
    billingCycle: "Monthly",
    nextBilling: "Dec 20, 2024",
    joined: "May 20, 2024",
  },
];

function KpiSparkline({ data }: { data: { name: string; value: number }[] }) {
  return (
    <div style={{ width: "100%", height: "100%", minHeight: "30px" }}>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <XAxis dataKey="name" hide />
          <YAxis hide />
          <Area
            type="linear"
            dataKey="value"
            stroke="#818cf8"
            strokeWidth={2}
            fill="#818cf8"
            fillOpacity={0.15}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export function Subscriptions() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const filteredData = subscriptionData.filter((customer) =>
    customer.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );
  return (
    <div className="app-container">
      <aside className="sidebar">
        <div className="logo-area">
          <div className="logo-icon">M</div>
          <span className="logo-text">Metrica</span>
        </div>

        <nav className="nav-menu">
          <div className="nav-item" onClick={() => navigate("/")}>
            <span className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="currentColor"
              >
                <path d="M200-160v-366L88-440l-48-64 440-336 160 122v-82h120v174l160 122-48 64-112-86v366H520v-240h-80v240H200Zm80-80h80v-240h240v240h80v-347L480-739 280-587v347Zm120-319h160q0-32-24-52.5T480-632q-32 0-56 20.5T400-559Zm-40 319v-240h240v240-240H360v240Z" />
              </svg>
            </span>{" "}
            Overview
          </div>
          <div className="nav-item" onClick={() => navigate("/analytics")}>
            <span className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="currentColor"
              >
                <path d="M280-280h80v-200h-80v200Zm320 0h80v-400h-80v400Zm-160 0h80v-120h-80v120Zm0-200h80v-80h-80v80ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z" />
              </svg>
            </span>
            Analytics
          </div>
          <div className="nav-item" onClick={() => navigate("/customers")}>
            <span className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="currentColor"
              >
                <path d="M40-160v-112q0-34 17.5-62.5T104-378q62-31 126-46.5T360-440q66 0 130 15.5T616-378q29 15 46.5 43.5T680-272v112H40Zm720 0v-120q0-44-24.5-84.5T666-434q51 6 96 20.5t84 35.5q36 20 55 44.5t19 53.5v120H760ZM247-527q-47-47-47-113t47-113q47-47 113-47t113 47q47 47 47 113t-47 113q-47 47-113 47t-113-47Zm466 0q-47 47-113 47-11 0-28-2.5t-28-5.5q27-32 41.5-71t14.5-81q0-42-14.5-81T544-792q14-5 28-6.5t28-1.5q66 0 113 47t47 113q0 66-47 113ZM120-240h480v-32q0-11-5.5-20T580-306q-54-27-109-40.5T360-360q-56 0-111 13.5T140-306q-9 5-14.5 14t-5.5 20v32Zm296.5-343.5Q440-607 440-640t-23.5-56.5Q393-720 360-720t-56.5 23.5Q280-673 280-640t23.5 56.5Q327-560 360-560t56.5-23.5ZM360-240Zm0-400Z" />
              </svg>
            </span>{" "}
            Customers
          </div>
          <div className="nav-item active">
            <span className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="currentColor"
              >
                <path d="M160-80q-33 0-56.5-23.5T80-160v-400q0-33 23.5-56.5T160-640h640q33 0 56.5 23.5T880-560v400q0 33-23.5 56.5T800-80H160Zm0-80h640v-400H160v400Zm240-40 240-160-240-160v320ZM160-680v-80h640v80H160Zm120-120v-80h400v80H280ZM160-160v-400 400Z" />
              </svg>
            </span>
            Subscriptions
          </div>
          <div className="nav-item" onClick={() => navigate("/invoices")}>
            <span className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="currentColor"
              >
                <path d="M120-80v-800l60 60 60-60 60 60 60-60 60 60 60-60 60 60 60-60 60 60 60-60 60 60 60-60v800l-60-60-60 60-60-60-60 60-60-60-60 60-60-60-60 60-60-60-60 60-60-60-60 60Zm120-200h480v-80H240v80Zm0-160h480v-80H240v80Zm0-160h480v-80H240v80Zm-40 404h560v-568H200v568Zm0-568v568-568Z" />
              </svg>
            </span>
            Invoices
          </div>
          <div className="nav-item" onClick={() => navigate("/products")}>
            <span className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="currentColor"
              >
                <path d="M440-183v-274L200-596v274l240 139Zm80 0 240-139v-274L520-457v274Zm-80 92L160-252q-19-11-29.5-29T120-321v-318q0-22 10.5-40t29.5-29l280-161q19-11 40-11t40 11l280 161q19 11 29.5 29t10.5 40v318q0 22-10.5 40T800-252L520-91q-19 11-40 11t-40-11Zm200-528 77-44-237-137-78 45 238 136Zm-160 93 78-45-237-137-78 45 237 137Z" />
              </svg>
            </span>
            Products
          </div>
          <div className="nav-item" onClick={() => navigate("/reports")}>
            <span className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="currentColor"
              >
                <path d="M640-160v-280h160v280H640Zm-240 0v-640h160v640H400Zm-240 0v-440h160v440H160Z" />
              </svg>
            </span>
            Reports
          </div>
          <div className="nav-item" onClick={() => navigate("/settings")}>
            <span className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="currentColor"
              >
                <path d="m370-80-16-128q-13-5-24.5-12T307-235l-119 50L78-375l103-78q-1-7-1-13.5v-27q0-6.5 1-13.5L78-585l110-190 119 50q11-8 23-15t24-12l16-128h220l16 128q13 5 24.5 12t22.5 15l119-50 110 190-103 78q1 7 1 13.5v27q0 6.5-2 13.5l103 78-110 190-118-50q-11 8-23 15t-24 12L590-80H370Zm70-80h79l14-106q31-8 57.5-23.5T639-327l99 41 39-68-86-65q5-14 7-29.5t2-31.5q0-16-2-31.5t-7-29.5l86-65-39-68-99 42q-22-23-48.5-38.5T533-694l-13-106h-79l-14 106q-31 8-57.5 23.5T321-633l-99-41-39 68 86 64q-5 15-7 30t-2 32q0 16 2 31t7 30l-86 65 39 68 99-42q22 23 48.5 38.5T427-266l13 106Zm42-180q58 0 99-41t41-99q0-58-41-99t-99-41q-59 0-99.5 41T342-480q0 58 40.5 99t99.5 41Zm-2-140Z" />
              </svg>
            </span>
            Settings
          </div>
        </nav>

        <div className="sidebar-bottom">
          <div className="upgrade-card">
            <div className="upgrade-icon">✨</div>
            <div className="upgrade-title">Upgrade to Pro</div>
            <div className="upgrade-desc">
              Unlock advanced analytics, custom reports, and more.
            </div>
            <button className="upgrade-btn">Upgrade Now</button>
          </div>
          <div className="user-profile">
            <div className="avatar">JD</div>
            <div className="user-info">
              <div className="user-name">John Doe</div>
              <div className="user-email">john@metrica.com</div>
            </div>
          </div>
        </div>
      </aside>

      <main className="main-content">
        <header className="header-row">
          <div className="header-left">
            <h1 className="page-title">Overview</h1>
            <p className="page-subtitle">Track your SaaS metrics and growth</p>
          </div>
          <div className="header-right">
            <div className="date-picker">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="20px"
                viewBox="0 -960 960 960"
                width="20px"
                fill="currentColor"
              >
                <path d="M200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Zm280 240q-17 0-28.5-11.5T440-440q0-17 11.5-28.5T480-480q17 0 28.5 11.5T520-440q0 17-11.5 28.5T480-400Zm-188.5-11.5Q280-423 280-440t11.5-28.5Q303-480 320-480t28.5 11.5Q360-457 360-440t-11.5 28.5Q337-400 320-400t-28.5-11.5ZM640-400q-17 0-28.5-11.5T600-440q0-17 11.5-28.5T640-480q17 0 28.5 11.5T680-440q0-17-11.5 28.5T640-400ZM480-240q-17 0-28.5-11.5T440-280q0-17 11.5-28.5T480-320q17 0 28.5 11.5T520-280q0 17-11.5 28.5T480-240Zm-188.5-11.5Q280-263 280-280t11.5-28.5Q303-320 320-320t28.5 11.5Q360-297 360-280t-11.5 28.5Q337-240 320-240t-28.5-11.5ZM640-240q-17 0-28.5-11.5T600-280q0-17 11.5-28.5T640-320q17 0 28.5 11.5T680-280q0 17-11.5 28.5T640-240Z" />
              </svg>
              May 1 - May 31, 2026
            </div>
            <button className="export-btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="20px"
                viewBox="0 -960 960 960"
                width="20px"
                fill="currentColor"
              >
                <path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z" />
              </svg>
              Export
            </button>
          </div>
        </header>

        <section className="kpi-grid-analytics">
          {[
            {
              title: "MRR",
              value: "$128,340",
              change: "+12.5%",
              type: "positive",
              data: revenueSparkline,
            },
            {
              title: "Active Subscriptions",
              value: "1,845",
              change: "+8.4%",
              type: "positive",
              data: usersSparkline,
            },
            {
              title: "Net New MRR",
              value: "$15,680",
              change: "+15.3%",
              type: "positive",
              data: signupsSparkline,
            },
            {
              title: "Churn Rate",
              value: "2.43%",
              change: "-0.8pp",
              type: "negative",
              data: churnSparkline,
            },
            {
              title: "Revenue Retention",
              value: "97.6%",
              change: "+1.2pp",
              type: "positive",
              data: sessionsSparkline,
            },
          ].map((card, i) => (
            <div key={i} className="kpi-card">
              <div className="kpi-header">
                <span className="kpi-title">{card.title}</span>
                <span className="kpi-icon-badge">$</span>
              </div>
              <div className="kpi-value">{card.value}</div>
              <div className={`kpi-change ${card.type}`}>{card.change}</div>
              <div className="kpi-sparkline">
                <KpiSparkline data={card.data} />
              </div>
            </div>
          ))}
        </section>

        <div className="customer-page-container">
          <div className="customer-controls">
            <div className="search-wrapper">
              <input
                type="text"
                placeholder="Search customers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="customer-search"
              />
            </div>

            <div className="filter-wrapper">
              <select className="filter-select">
                <option>All Plans</option>
              </select>
              <select className="filter-select">
                <option>All Statuses</option>
              </select>
              <button className="sort-btn">Sort: Recently Added</button>
            </div>
          </div>

          <div className="customer-table-wrapper">
            <table className="pro-customer-table">
              <thead>
                <tr>
                  <th>Customer</th>
                  <th>Plan</th>
                  <th>MRR</th>
                  <th>Status</th>
                  <th>Billing Cycle</th>
                  <th>Next Billing</th>
                  <th>Started</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((row) => (
                  <tr key={row.id}>
                    <td>
                      <div className="cust-info">
                        <div className="cust-avatar-table">
                          {row.name.charAt(0)}
                        </div>
                        <div>
                          <div className="cust-name">{row.name}</div>
                          <div className="cust-email">{row.email}</div>
                        </div>
                      </div>
                    </td>
                    <td>{row.plan}</td>
                    <td>{row.mrr}</td>
                    <td>
                      <span
                        className={`status-pill ${row.status.toLowerCase()}`}
                      >
                        <span className="status-dot"></span>
                        {row.status}
                      </span>
                    </td>
                    <td>{row.billingCycle}</td>
                    <td>{row.nextBilling}</td>
                    <td>{row.joined}</td>
                    <td className="actions-cell">⋮</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="pagination-footer">
            <span className="pagination-text">
              Showing 1 to {filteredData.length} of 2,045 customers
            </span>
            <div className="pagination-controls">
              <button className="page-btn disabled">‹</button>
              <button className="page-btn active">1</button>
              <button className="page-btn">2</button>
              <button className="page-btn">3</button>
              <span className="page-dots">...</span>
              <button className="page-btn">285</button>
              <button className="page-btn">›</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
