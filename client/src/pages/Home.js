import React from 'react';
import FlightSearch from '../components/FlightSearch';
import HotelSearch from '../components/HotelSearch';
import ActivitySearch from '../components/ActivitySearch';

const Home = () => {
  return (
    <div>
      <h1>Welcome to TravelHub!</h1>
      {/* Include various search components on the home page */}
      <FlightSearch />
      <HotelSearch />
      <ActivitySearch />
    </div>
  );
};

export default Home;

