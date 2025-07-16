import React from 'react';
import './ClaimForm.css';

export default function ClaimForm() {
  return (
    <form className="claim-form">
      <h2 className="claim-form-title">Claim Form</h2>
      <div className="claim-form-row">
        <div className="claim-form-group">
          <input type="text" required placeholder="First Name *" />
        </div>
        <div className="claim-form-group">
          <input type="text" required placeholder="Last Name *" />
        </div>
      </div>
      <div className="claim-form-row">
        <div className="claim-form-group">
          <input type="tel" required placeholder="Phone Number *" />
        </div>
        <div className="claim-form-group">
          <input type="email" required placeholder="Email ID *" />
        </div>
      </div>
      <div className="claim-form-row">
        <div className="claim-form-group">
          <div className="input-icon-group">

            <input type="text" placeholder="Date of birth *" onFocus={(e) => (e.target.type = 'date')} />

            <span className="icon-calendar" />
          </div>
        </div>
        <div className="claim-form-group">
          <input type="text" required placeholder="Job Title *" />
        </div>
      </div>
      <div className="claim-form-row">
        <div className="claim-form-group">
          <div className="input-icon-group">
            <input type="text" placeholder="Date of Diagnosis *" onFocus={(e) => (e.target.type = 'date')} />

            <span className="icon-calendar" />
          </div>
        </div>
        <div className="claim-form-group">
          <div className="input-icon-group">

            <label htmlFor="diagnosis" className="visually-hidden">Type of Diagnosis *</label>

            <select id="diagnosis" name="diagnosis" required defaultValue="">
              <option value="" disabled> Type of Diagnosis * </option>
              <option value="mesothelioma">Mesothelioma</option>
              <option value="other">Other</option>
            </select>

            <span className="icon-dropdown" />
          </div>
        </div>
      </div>
      <div className="claim-form-group full-width">
        <textarea rows="2" placeholder="Tell us your story (optional)" />
      </div>
      <div className="claim-form-checkboxes">
        <label className="checkbox-label">
          <input type="checkbox" required />
          <span>
            I agree to the <a href="#" className="plain-link"><u>privacy policy</u></a> and <a href="#" className="plain-link">disclaimer</a> and give my express written consent to be contacted regarding my case options. I understand that I may be contacted using automatic dialing equipment. Message and data rates may apply. My consent does not require purchase. This is Legal advertising.
          </span>
        </label>
        <label className="checkbox-label">
          <input type="checkbox" required />
          <span>Please check this box to verify you're a person.</span>
        </label>
      </div>
      <button className="claim-form-btn" type="submit">
        <span className="btn-label-desktop">Start your claim now</span>
        <span className="btn-label-mobile">Submit <span className="arrow">→</span></span>
      </button>

    </form>
  );
}





