import React from "react";

const Card = ({ user }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm">
      <img
        src={user.picture.large}
        alt={`${user.name.first} ${user.name.last}`}
        className="w-32 h-32 rounded-full mx-auto"
      />
      <h1 className="text-center text-xl font-semibold mt-4">
        {user.name.first} {user.name.last}
      </h1>
      <p className="text-center text-gray-600">{user.email}</p>
      <p className="text-center text-gray-600">{user.location.city}</p>
    </div>
  );
};

export default Card;
