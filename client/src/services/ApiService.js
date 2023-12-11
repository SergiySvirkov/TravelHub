const BASE_URL = 'http://localhost:5000/api'; // Adjust the URL based on your server setup

const ApiService = {
  // Example function for fetching flights
  getFlights: async (searchParams) => {
    try {
      const response = await fetch(`${BASE_URL}/flights`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(searchParams),
      });

      if (!response.ok) {
        throw new Error('Error fetching flights');
      }

      return await response.json();
    } catch (error) {
      console.error('ApiService - getFlights:', error.message);
      throw error;
    }
  },
  // Add more API functions as needed for hotels, activities, etc.
};

export default ApiService;
