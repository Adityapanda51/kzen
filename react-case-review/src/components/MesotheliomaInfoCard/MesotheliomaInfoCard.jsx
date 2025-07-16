import React from 'react';
import './MesotheliomaInfoCard.css';

export default function MesotheliomaInfoCard() {
  return (
    <div className="meso-info-card">
      <h3 className="meso-info-title">Have you or a loved one been affected by Mesothelioma?</h3>
      <p className="meso-info-desc">
        As a woman, you've carried the weight of care, love, and resilience. Now it's time someone stands with you.
      </p>
      <ul className="meso-info-list">
        <li>Secondary Asbestos exposure is common</li>
        <li>Misdiagnosis delays are more frequent in women</li>
        <li>Women have won significant legal settlements</li>
      </ul>
    </div>
  );
} 