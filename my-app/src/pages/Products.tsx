import React from "react";
import "./Home.css";
import { Link } from "react-router-dom"; // Ensure you're using react-router

const Products: React.FC = () => {
  return (
    <>
      <section className="home-section">
        <div className="home-content">
          <div className="home-heading">Products</div>
        </div>
      </section>

      {/* Our Products Section */}
      <section className="text-section">
        <div className="max-w-5xl mx-auto px-4">
          <h2
            className="subpart2 text-center mb-4"
            style={{ fontSize: "2.5rem" }}
          >
            Our Products
          </h2>
          <p
            className="subpart3 text-center mb-12"
            style={{ maxWidth: "1200px", margin: "0 auto 3rem" }}
          >
            Explore our innovative solutions designed to streamline your
            workflow and boost productivity.
          </p>
          {/* Card Grid */}
          <div className="grid-3-col">
            {/* Card 1 - QR Generator */}
            <Link to="/" className="product-card">
              <div style={{ marginBottom: "1.5rem" }}>
                <div
                  style={{
                    width: "80px",
                    height: "80px",
                    margin: "0 auto 1.5rem",
                    borderRadius: "20px",
                    background:
                      "linear-gradient(135deg, #e0f2fe 0%, #bae6fd 100%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 4px 15px rgba(59, 130, 246, 0.2)",
                  }}
                >
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#3b82f6"
                    strokeWidth="2"
                  >
                    <rect x="3" y="3" width="5" height="5"></rect>
                    <rect x="16" y="3" width="5" height="5"></rect>
                    <rect x="3" y="16" width="5" height="5"></rect>
                    <path d="M21 16h-3"></path>
                    <path d="M9 21v-3"></path>
                    <path d="M21 12v-1"></path>
                    <path d="M12 21h-1"></path>
                    <path d="M21 8V7"></path>
                    <path d="M16 21h-1"></path>
                    <path d="M21 3h-3"></path>
                    <path d="M9 3v3"></path>
                  </svg>
                </div>
              </div>
              <h3
                className="solution-title mb-2"
                style={{ fontSize: "1.5rem" }}
              >
                QR Session for Vault
              </h3>
              <p
                className="solution-description"
                style={{ fontSize: "1.125rem", marginBottom: 0 }}
              >
                Coming Soon
              </p>
            </Link>

            {/* Card 2 - Balance Sheet Generator */}
            <Link to="/" className="product-card">
              <div style={{ marginBottom: "1.5rem" }}>
                <div
                  style={{
                    width: "80px",
                    height: "80px",
                    margin: "0 auto 1.5rem",
                    borderRadius: "20px",
                    background:
                      "linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 4px 15px rgba(59, 130, 246, 0.2)",
                  }}
                >
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#2563eb"
                    strokeWidth="2"
                  >
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                    <polyline points="10 9 9 9 8 9"></polyline>
                  </svg>
                </div>
              </div>
              <h3
                className="solution-title mb-2"
                style={{ fontSize: "1.5rem" }}
              >
                Balance Sheet Generator
              </h3>
              <p
                className="solution-description"
                style={{ fontSize: "1.125rem", marginBottom: 0 }}
              >
                Coming soon
              </p>
            </Link>

            {/* Card 3 - ClassMate */}
            <Link to="/" className="product-card">
              <div style={{ marginBottom: "1.5rem" }}>
                <div
                  style={{
                    width: "80px",
                    height: "80px",
                    margin: "0 auto 1.5rem",
                    borderRadius: "20px",
                    background:
                      "linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 4px 15px rgba(59, 130, 246, 0.2)",
                  }}
                >
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#1e40af"
                    strokeWidth="2"
                  >
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
              </div>
              <h3
                className="solution-title mb-2"
                style={{ fontSize: "1.5rem" }}
              >
                ClassMate
              </h3>
              <p
                className="solution-description"
                style={{ fontSize: "1.125rem", marginBottom: 0 }}
              >
                Coming Soon
              </p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
