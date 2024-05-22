import React from 'react';
import { Footer, Navbar } from '../components';

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className="container-fluid">
        <div className="row">
          {/* Left Side - About Us */}
          <div className="col-md-6">
            <div className="card">
              <img
                className="card-img img-fluid"
                src="./assets/about1.jpg"
                alt="About Us"
                height={1000}
              />
              <div className="card-body">
                <h2>About Us</h2>
                <p>
                  Welcome to our pet store! We are a start-up based business
                  dedicated to providing high-quality products and exceptional
                  customer service. Our mission is to ensure the well-being and
                  happiness of your beloved pets.
                </p>
                <p>
                  With years of experience in the pet industry, we have carefully
                  curated a diverse range of pet supplies, from food and toys to
                  grooming essentials and accessories. Our team of passionate
                  animal lovers is committed to helping you find the perfect
                  products for your furry, feathered, or scaled companions.
                </p>
                <p>
                  Visit us today and let us be your trusted partner in caring for
                  your pet. We look forward to serving you and your beloved
                  animals.
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Animal Image and Description */}
          <div className="col-md-6">
            <div className="card">
              <img
                className="card-img img-fluid"
                src="./assets/pet-image.jpg"
                alt="Pet"
                height={1000}
              />
              <div className="card-body">
                <h2>Why Our Pet Store Matters</h2>
                <p>
                  Our pet store is more than just a place to buy supplies for
                  your furry, feathered, or scaly friends. It's a hub of
                  compassion, education, and community support for all animal
                  lovers.
                </p>
                <p>
                  We believe that providing high-quality pet products and
                  services is essential for the health and well-being of our
                  animal companions. By offering a wide range of carefully
                  selected items, we aim to ensure that your pets receive the
                  best possible care and attention.
                </p>
                <p>
                  Beyond just selling products, we strive to be a resource for
                  pet owners, offering advice, guidance, and a supportive
                  community. Our knowledgeable staff is always eager to share
                  their expertise and help you navigate the sometimes
                  overwhelming world of pet ownership.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default AboutPage;