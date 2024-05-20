import React from 'react';

export default function Footer() {
  return (
    <footer className="footer_container">
      <div className="footer_section1"></div>
      <div className="navigation_container">
        <div className="link_container">
          <div className="link_container_anchors">
            <a href="#">Who We Are</a>
            <a href="#">Blog</a>
            <a href="#">Work With Us</a>
            <a href="#">Investor Relations</a>
            <a href="#">Report Fraud</a>
            <a href="#">Contact Us</a>
          </div>
        </div>
        <div className="link_container">
          <h5>Movieverse</h5>
          <div className="link_container_anchors">
            <a href="#">Movie</a>
            <a href="#">Tvshows</a>
            <a href="#">IMDB</a>
            <a href="#">Rotten Tomatoes</a>
            <a href="#">Ratify</a>
          </div>
        </div>
        <div className="link_container">
          <h5>For Collaborations</h5>
          <div className="link_container_anchors">
            <a href="#">Partner With Us</a>
            <a href="#">Apps For You</a>
          </div>
          <h5 id="enterprises">For Enterprises</h5>
          <div className="link_container_anchors">
            <a href="#">Movies For Enterprise</a>
          </div>
        </div>
        <div className="link_container">
          <h5>Learn More</h5>
          <div className="link_container_anchors">
            <a href="#">Privacy</a>
            <a href="#">Security</a>
            <a href="#">Terms</a>
            <a href="#">Sitemap</a>
          </div>
        </div>
      </div>
      <div className="disclaimer">
        By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners. 2008-2023 © Movieeee™ Ltd. All rights reserved.
      </div>
    </footer>
  );
}
