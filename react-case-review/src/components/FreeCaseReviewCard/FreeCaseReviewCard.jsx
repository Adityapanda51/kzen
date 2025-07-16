import React from 'react';
import './FreeCaseReviewCard.css';
import groupImage from '../../assets/xyz.png'; 

export default function FreeCaseReviewCard() {
  const handleClick = (e) => {
    e.preventDefault();
    alert('Contact us clicked!');
  };

  return (
    <div className="free-case-card-outer">
      <img
        src={groupImage}
        alt="Free Case Review"
        className="free-case-card-image"
      />

      <a
        href="#"
        className="contact-us-hotspot"
        aria-label="Contact us"
        onClick={handleClick}
      />
    </div>
  );
}

