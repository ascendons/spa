import React from "react";
import "./Home.css";
import JParticlesEffect from "../components/JParticlesEffect";
import { Link } from "react-router-dom"; // Ensure you're using react-router

const Products: React.FC = () => {
  return (
    <>
      <section className="home-section">
        <JParticlesEffect />
        <div className="home-content">
          <div className="home-heading">Products</div>
        </div>
      </section>

      {/* Our Products Section */}
      <section className="relative w-full bg-white py-20">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-gray-800 text-left text-3xl font-semibold mb-8">
            Our Products
          </h2>

          {/* Card Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 - QR Generator */}
            <Link
              to="/qr"
              className="border rounded-lg shadow hover:shadow-lg transition p-6 bg-white text-center"
            >
              <h3 className="text-xl font-bold mb-2">QR Generator</h3>
              <p className="text-gray-600 text-sm">
                Generate a QR code linked to a secure session.
              </p>
            </Link>

            {/* Card 2 - Placeholder */}
            <div className="border rounded-lg shadow p-6 bg-white text-center">
              <h3 className="text-xl font-bold mb-2">Product 2</h3>
              <p className="text-gray-600 text-sm">Coming soon.</p>
            </div>

            {/* Card 3 - Placeholder */}
            <div className="border rounded-lg shadow p-6 bg-white text-center">
              <h3 className="text-xl font-bold mb-2">Product 3</h3>
              <p className="text-gray-600 text-sm">Coming soon.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
