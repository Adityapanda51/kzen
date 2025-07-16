import React from 'react';
import FreeCaseReviewCard from '../components/FreeCaseReviewCard/FreeCaseReviewCard';
import MesotheliomaInfoCard from '../components/MesotheliomaInfoCard/MesotheliomaInfoCard';
import ClaimForm from '../components/claimform/ClaimForm';

export default function HomePage() {
  return (
    <div className="app-root">
      <div className="main-content">
        <div className="left-panel">
          <FreeCaseReviewCard />
          <MesotheliomaInfoCard />
        </div>
        <div className="right-panel">
          <ClaimForm />
        </div>
      </div>
    </div>
  );
} 