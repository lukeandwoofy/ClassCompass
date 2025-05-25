import React, { useState, useEffect, useRef } from 'react';

// Main App component for ClassCompass with username/password authentication
function App() {
  // Authentication states
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Map states
  const [searchTerm, setSearchTerm] = useState('');
  const [foundClassroom, setFoundClassroom] = useState(null);
  const mapImageRef = useRef(null);

  // Define the 'secret' password.
  // The username can be anything, but the password must be 'schoolmap123'.
  // IMPORTANT: This is a client-side check and is NOT secure for sensitive data.
  // The password is visible in the source code.
  const SECRET_PASSWORD = 'schoolmap123'; // <--- !!! THIS IS THE REQUIRED PASSWORD !!!

  // Define your school's classroom locations.
  // IMPORTANT:
  // - Replace 'your_school_map.jpg' with the actual URL or path to your school map image.
  // - Adjust the 'x' and 'y' percentage values for each classroom to match its exact
  //   position on YOUR school map image.
  const classroomLocations = [
    { id: 'c1', name: 'Main Office', x: 20, y: 15, description: 'First stop for new students!' },
    { id: 'c2', name: 'Library', x: 50, y: 30, description: 'Quiet study area and book collection.' },
    { id: 'c3', name: 'Science Lab', x: 70, y: 20, description: 'Experiments and discoveries happen here.' },
    { id: 'c4', name: 'Gymnasium', x: 15, y: 60, description: 'Sports and physical education.' },
    { id: 'c5', name: 'Cafeteria', x: 40, y: 75, description: 'Lunch and snack breaks.' },
    { id: 'c6', name: 'Art Room', x: 80, y: 50, description: 'Unleash your creativity!' },
    { id: 'c7', name: 'Music Room', x: 65, y: 65, description: 'Where melodies are made.' },
    { id: 'c8', name: 'Room 101', x: 30, y: 40, description: 'General classroom.' },
    { id: 'c9', name: 'Room 102', x: 35, y: 45, description: 'General classroom.' },
    { id: 'c10', name: 'Auditorium', x: 55, y: 90, description: 'For assemblies and performances.' },
    { id: 'c11', name: 'Counseling Office', x: 25, y: 25, description: 'Guidance and support services.' },
  ];

  /**
   * Handles the login attempt when the form is submitted.
   * The username can be anything, but the password must match SECRET_PASSWORD.
   * @param {Object} event - The form submission event.
   */
  const handleLogin = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    setErrorMessage(''); // Clear previous error messages

    // Check if the password matches the secret password.
    // The username is now accepted as long as it's not empty.
    if (username.trim() !== '' && password === SECRET_PASSWORD) {
      setIsAuthenticated(true); // Set authentication status to true
      setErrorMessage(''); // Clear any previous error messages
    } else if (username.trim() === '') {
      setErrorMessage('Please enter a username.');
    } else {
      setErrorMessage('Incorrect password. Please try again.'); // Only password check fails
    }
  };

  /**
   * Handles the logout action.
   */
  const handleLogout = () => {
    setIsAuthenticated(false); // Reset authentication status
    setUsername(''); // Clear username field
    setPassword(''); // Clear password field
    setErrorMessage(''); // Clear error message
    setFoundClassroom(null); // Clear map search results on logout
    setSearchTerm(''); // Clear search term on logout
  };

  /**
   * Handles the search logic for classrooms.
   */
  const handleSearch = () => {
    setErrorMessage(''); // Clear previous error message
    const lowerCaseSearchTerm = searchTerm.toLowerCase().trim();

    const found = classroomLocations.find(
      (classroom) => classroom.name.toLowerCase() === lowerCaseSearchTerm
    );

    if (found) {
      setFoundClassroom(found); // Set the found classroom
    } else {
      setFoundClassroom(null); // Clear any previously found classroom
      setErrorMessage(`"${searchTerm}" not found. Please try another classroom name.`);
    }
  };

  /**
   * Handles the key press event for the search input, allowing Enter to trigger search.
   * @param {Object} event - The keyboard event.
   */
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  // --- Conditional Rendering based on Authentication State ---
  if (!isAuthenticated) {
    // Login Form / Welcome Screen
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center p-4 font-inter">
        <div className="bg-white p-8 rounded-lg shadow-2xl w-full max-w-md text-center transform transition-all duration-300 hover:scale-105">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Welcome to ClassCompass!</h2>
          <p className="text-lg text-gray-600 mb-8">
            Please sign in to explore the interactive map and find your way around campus.
          </p>
          <p className="text-sm text-center text-red-600 mb-4 font-semibold">
            Disclaimer: This is a client-side password check and is NOT secure for sensitive data.
            The password is visible in the source code.
          </p>
          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label htmlFor="username" className="block text-gray-700 text-sm font-medium mb-2 text-left">
                Username
              </label>
              <input
                type="text"
                id="username"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:border-transparent outline-none transition-all duration-200"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-gray-700 text-sm font-medium mb-2 text-left">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:border-transparent outline-none transition-all duration-200"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {errorMessage && (
              <p className="text-red-500 text-sm text-center font-medium">{errorMessage}</p>
            )}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold text-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    );
  }

  // ClassCompass Application (Displayed after successful authentication)
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex flex-col items-center justify-center p-4 font-inter text-gray-800">
      <div className="bg-white p-6 rounded-lg shadow-2xl w-full max-w-4xl mb-6 text-center">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-4xl font-extrabold text-gray-800">ClassCompass</h1>
          <div className="flex items-center space-x-3">
            {/* Display the username here */}
            <span className="text-sm text-gray-600 hidden sm:inline">
              Welcome back, <span className="font-semibold capitalize">{username}</span>!
            </span>
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white py-2 px-4 rounded-md text-sm font-semibold hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 transition-all duration-200"
            >
              Logout
            </button>
          </div>
        </div>
        <p className="text-lg text-gray-600 mb-6">
          New to our school? Search for a classroom to find its location on the map!
        </p>

        {/* Search Input Section */}
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-6">
          <input
            type="text"
            className="flex-grow px-5 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent outline-none transition-all duration-200 text-lg"
            placeholder="e.g., Library, Room 101, Cafeteria"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <button
            onClick={handleSearch}
            className="bg-blue-600 text-white py-3 px-8 rounded-lg font-semibold text-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Search
          </button>
        </div>

        {/* Error Message Display */}
        {errorMessage && (
          <p className="text-red-600 font-medium text-center mt-4">{errorMessage}</p>
        )}

        {/* Map Container */}
        <div className="relative w-full aspect-video bg-gray-100 rounded-lg overflow-hidden shadow-inner border border-gray-200 mt-6">
          {/* Placeholder for your school map image.
              Replace 'https://placehold.co/1200x675/E0F2F7/000?text=YOUR+SCHOOL+MAP+HERE'
              with the actual URL to your school map image. */}
          <img
            ref={mapImageRef}
            src="https://placehold.co/1200x675/E0F2F7/000?text=YOUR+SCHOOL+MAP+HERE"
            alt="School Map"
            className="w-full h-full object-contain" // Use object-contain to ensure image fits
            onError={(e) => { e.target.src = 'https://placehold.co/1200x675/E0F2F7/000?text=Error+Loading+Map'; }}
          />

          {/* Render Markers for all classrooms */}
          {classroomLocations.map((classroom) => (
            <div
              key={classroom.id}
              className={`absolute transform -translate-x-1/2 -translate-y-1/2
                          w-4 h-4 rounded-full border-2 border-white cursor-pointer
                          transition-all duration-300 ease-in-out
                          ${foundClassroom && foundClassroom.id === classroom.id
                              ? 'bg-red-500 scale-150 shadow-lg animate-pulse' // Highlighted style
                              : 'bg-blue-500 hover:bg-blue-600 hover:scale-125' // Default style
                          }`}
              style={{ left: `${classroom.x}%`, top: `${classroom.y}%` }}
              title={classroom.name} // Tooltip on hover
              onClick={() => setFoundClassroom(classroom)} // Allow clicking markers to highlight
            >
              {/* Optional: Display classroom name next to highlighted marker */}
              {foundClassroom && foundClassroom.id === classroom.id && (
                <span className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-2 py-1 bg-gray-800 text-white text-xs rounded-md whitespace-nowrap shadow-md">
                  {classroom.name}
                </span>
              )}
            </div>
          ))}
        </div>

        {/* Classroom Details Display */}
        {foundClassroom && (
          <div className="bg-blue-50 p-4 rounded-lg mt-6 text-left border border-blue-200 shadow-md">
            <h3 className="text-2xl font-bold text-blue-800 mb-2">
              Location: {foundClassroom.name}
            </h3>
            <p className="text-gray-700">{foundClassroom.description}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
