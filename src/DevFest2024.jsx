// src/DevFest2024.jsx
import React from 'react';
import HomeStats from './HomeStats';
import './DevFest2024.css';  // Import your CSS file

const DevFest2024 = ({ mainData }) => {
  const isRegistrationOpen = mainData.eventInfo && 
    mainData.eventInfo.registeration.link.length > 0 && 
    new Date(mainData.eventInfo.registeration.end_date) > new Date();

  return (
    <div>
      {/* Hero Section */}
      <div className="devfest-container">
        <div className="devfest-content">
          <div className="devfest-text">
            <h1 className="responsive-h1 my-4">
              DevFest <br />
              {mainData.communityLocation.city} 2024
            </h1>
            
            <p className="description">
              {mainData.eventInfo.description.short}
            </p>

            <p className="event-details my-5">
              <span className="mr-4">
                <img 
                  src="assets/img/calender.svg" 
                  alt="Calendar Icon" 
                  style={{   borderRadius: '5px', width: '20px', marginRight: '8px', verticalAlign: 'middle'}} 
                />
                {mainData.eventInfo.date}
              </span>
              <span className="mr-4">
                <img 
                  src="assets/img/map.svg" 
                  alt="Map Icon" 
                  style={{   borderRadius: '5px',width: '20px', marginRight: '8px', verticalAlign: 'middle' }} 
                />
                <a href={mainData.eventInfo.venue.map_link} target="_blank" className="event-location" rel="noopener noreferrer">
                  {mainData.eventInfo.venue.address}
                </a>
              </span>
            </p>

            {isRegistrationOpen && (
              <a
                href={mainData.eventInfo.registeration.link}
                target="_blank"
                className="register-button"
                rel="noopener noreferrer"
              >
                Register Now
              </a>
            )}
          </div>

          <div className="devfest-image">
            <img 
              src="assets/img/hero-image.svg" 
              alt="DevFest 2024" 
              className="img-fluid"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      {/* HomeStats Section */}
      <HomeStats mainData={mainData} />
    </div>
  );
};

export default DevFest2024;
