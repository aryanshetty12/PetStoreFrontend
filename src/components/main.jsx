import { color } from "@mui/system";
import React from "react";
import { Footer, Navbar } from "../components"
import { Link } from 'react-router-dom';
import './main.css';

const Home = () => {
  return (
    <>
     <div className="hero border-3 pb-3">
  <div className="card bg-dark text-white border-3 mx-3 position-relative">
    <img
      className="card-img img-fluid"
      src=".\assets\1.jpg"
      alt="Card"
      height={500}
    />
    <div className="card-img-overlay d-flex flex-column justify-content-center align-items-center">
      <div className="text-overlay text-top">
        <h1>Discover Our Best Quality Pets Commodities</h1>
        <Link
          to="/Product"
          className="btn btn-primary btn-lg mt-9"
          style={{
            backgroundColor: "#FF6347",
            border: "none",
            padding: "10px 24px",
            fontSize: "15px",
            transition: "background-color 0.3s ease",
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#FF4500")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "#FF6347")}
        >
          Shop Now
        </Link>
      </div>
    </div>
  </div>
</div>
      
    </>
  );
};

export default Home;
