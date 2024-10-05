// src/App.js
import React from 'react';
import DevFest2024 from './DevFest2024';

function App() {
  const mainData = {
    communityLocation: {
      city: 'Patna',
    },
    eventInfo: {
      description: { short: 'An annual event hosted by the Google Developers Group across the world to bring the technology closer to the developers. It is an all day developer conference where we aim to focus on multiple technologies through lightning talks, sessions, workshops, etc.' },
      date: 'December 26, 2024   ',
      venue: { address: 'NIT PATNA', map_link: ' https://g.co/kgs/cRw73D6 ' },
      registeration: {
        link: 'https://example.com/register',
        end_date: '2024-11-30',
      },
    },
  };

  return (
    <div className="App">
      <DevFest2024 mainData={mainData} />
    </div>
  );
}

export default App;
