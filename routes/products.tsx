import { useNavigate } from "react-router";

const productsData = [
  {
    id: 1,
    name: "Starter",
    price: "$1,200",
    interval: "/month",
    description: "For small teams just getting started.",
    features: ["Up to 10 users", "Basic analytics", "Email support"],
    subscribers: 14,
    status: "Active",
    color: "#c7d2fe",
  },
  {
    id: 2,
    name: "Business",
    price: "$6,250",
    interval: "/month",
    description: "For growing businesses with real needs.",
    features: [
      "Up to 50 users",
      "Advanced analytics",
      "Priority support",
      "Custom integrations",
    ],
    subscribers: 38,
    status: "Active",
    color: "#a78bfa",
  },
  {
    id: 3,
    name: "Pro",
    price: "$8,500",
    interval: "/month",
    description: "For power users and scaling teams.",
    features: [
      "Unlimited users",
      "Full API access",
      "Dedicated support",
      "Advanced reporting",
    ],
    subscribers: 52,
    status: "Active",
    color: "#8b5cf6",
  },
  {
    id: 4,
    name: "Enterprise",
    price: "$12,000",
    interval: "/month",
    description: "For large organizations with enterprise needs.",
    features: [
      "Unlimited everything",
      "SLA guarantees",
      "Custom development",
      "Onboarding specialist",
    ],
    subscribers: 72,
    status: "Active",
    color: "#4f46e5",
    featured: "yes",
  },
];

export function Products() {
  const navigate = useNavigate();

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
            </span>{" "}
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
          <div className="nav-item" onClick={() => navigate("/subscriptions")}>
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
            </span>{" "}
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
            </span>{" "}
            Invoices
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
                <path d="M440-183v-274L200-596v274l240 139Zm80 0 240-139v-274L520-457v274Zm-80 92L160-252q-19-11-29.5-29T120-321v-318q0-22 10.5-40t29.5-29l280-161q19-11 40-11t40 11l280 161q19 11 29.5 29t10.5 40v318q0 22-10.5 40T800-252L520-91q-19 11-40 11t-40-11Zm200-528 77-44-237-137-78 45 238 136Zm-160 93 78-45-237-137-78 45 237 137Z" />
              </svg>
            </span>{" "}
            Products
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
            </span>{" "}
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
            <h1 className="page-title">Products</h1>
            <p className="page-subtitle">
              Manage your subscription plans and pricing
            </p>
          </div>
          <div className="header-right">
            <button
              className="export-btn"
              style={{
                fontWeight: "600",
                color: "#4f46e5",
                borderColor: "#4f46e5",
              }}
            >
              + Add New Plan
            </button>
          </div>
        </header>

        <section className="products-grid">
          {productsData.map((product) => (
            <div
              key={product.id}
              className={`product-card ${product.featured ? "product-card-featured" : ""}`}
            >
              {product.featured && (
                <div className="popular-tag">Most Popular</div>
              )}

              <div className="product-header">
                <div className="product-name-row">
                  <span
                    className="product-icon"
                    style={{ backgroundColor: product.color }}
                  >
                    {product.name.charAt(0)}
                  </span>
                  <h3 className="product-name">{product.name}</h3>
                </div>
                <div className="product-price">
                  {product.price}{" "}
                  <span className="product-interval">{product.interval}</span>
                </div>
                <p className="product-desc">{product.description}</p>
              </div>

              <div className="product-features">
                {product.features.map((feature, idx) => (
                  <div key={idx} className="feature-item">
                    <span className="feature-check">✓</span>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <div className="product-footer">
                <div className="product-stats">
                  <span className="stat-label">Active Subscribers</span>
                  <span className="stat-number">{product.subscribers}</span>
                </div>
                <div className="product-actions">
                  <button className="product-btn-edit">Edit</button>
                  <button className="product-btn-view">Details</button>
                </div>
              </div>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}
