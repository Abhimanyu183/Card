import React, { useEffect, useState } from "react";

const App = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    fetch("https://randomuser.me/api/?page=1&results=1&seed=abc")
      .then((response) => response.json())
      .then((data) => setUserData(data.results[0]))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  if (!userData) return <div className="text-center mt-20 text-lg text-white">Loading...</div>;

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-800 via-purple-800 to-gray-900">
      <div className="bg-gradient-to-b from-white to-gray-100 shadow-2xl rounded-3xl overflow-hidden transform hover:scale-105 hover:shadow-3xl transition-transform duration-500 max-w-md w-full">
        
        <div className="relative bg-gradient-to-r from-indigo-600 to-purple-600 h-40">
          <div className="absolute inset-0 flex justify-center items-center">
            <img
              src={userData.picture.large}
              alt={`${userData.name.first} ${userData.name.last}`}
              className="w-28 h-28 rounded-full border-4 border-white shadow-lg transform hover:scale-110 transition-transform duration-300"
            />
          </div>
        </div>

        
        <div className="p-6 text-center">
          <h1 className="text-3xl font-bold text-gray-800">
            {userData.name.first} {userData.name.last}
          </h1>
          <p className="text-gray-500 text-lg mt-1 capitalize">
            {userData.gender}
          </p>
          <p className="italic text-gray-500 text-sm mt-2">"{userData.email}"</p>

          <div className="mt-6 space-y-4">
            <p className="text-gray-700 flex justify-center items-center gap-2">
              <span className="font-semibold text-gray-800">Phone:</span>
              {userData.phone}
            </p>
            <p className="text-gray-700 flex justify-center items-center gap-2">
              <span className="font-semibold text-gray-800">Location:</span>
              {userData.location.city}, {userData.location.country}
            </p>
          </div>
        </div>

      
        <div className="bg-gradient-to-r from-gray-100 to-gray-200 py-4 text-center">
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
            Refresh
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
