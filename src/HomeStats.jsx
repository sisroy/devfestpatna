import React from 'react';
import './HomeStats.css';

const HomeStats = () => {
  const stats = [
    { value: '23+', name: 'Speakers', color: 'blue.png' },
    { value: '200+', name: 'Participants', color: 'pink.png' },
    { value: '10+', name: 'Sessions', color: 'green.png' },
    { value: '2+', name: 'Workshops', color: 'yellow.png' }
  ];

  return (
    <div className="homestats-wrapper">
      {/* Decorative element on the left side, outside the container */}
      <div className="decorative-element">
        <img src="assets/img/element1.svg" alt="Decorative Icon" />
      </div>

      {/* Main Stats inside colored puzzle-piece-like frames */}
      <div className="homestats-container">
        {stats.map((stat, index) => (
          <div key={index} className="stat-card">
            {/* Dynamically select the frame color */}
            <img 
              src={`assets/img/${stat.color}`} 
              alt={`${stat.name} Frame`} 
              className="frame-image" 
            />
            <div className="stat-content">
              <h1>{stat.value}</h1>
              <p>{stat.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeStats;
