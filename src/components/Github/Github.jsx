import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";

const Github = () => {
  let [user, setUser] = useState("anamuddinahmad");
  let [userData, setUserData] = useState(null); // Store fetched user data

  function fetchUserData() {
    fetch(`https://api.github.com/users/${user}`) // Use dynamic username
      .then((res) => res.json())
      .then((res) => {
        setUserData(res); // Set the user data
        console.log(res); // Log the fetched user data
      });
  }

  return (
    <div className="flex flex-col items-center p-4">
      {/* Form at the top */}
      <form
        className="flex gap-2 mb-6"
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          fetchUserData(); // Call fetchUserData directly
        }}
      >
        <label htmlFor="user" className="px-2 py-3 text-2xl font-semibold">
          Enter User
        </label>
        <input
          className="px-1 py-1 text-xl font-semibold border border-gray-700 rounded-md outline-none"
          id="user"
          type="text"
          placeholder="Username"
          value={user}
          onChange={(e) => setUser(e.target.value)} // Update user state
        />
        <button className="px-6 py-2 bg-orange-700 rounded-md">
          <CiSearch size={"1.9vw"} />
        </button>
      </form>

      {/* Display the user data */}
      {userData && (
        <div className="max-w-md p-4 mx-auto mt-4 border border-gray-300 rounded-md">
          <div className="flex flex-col items-center">
            <img
              src={userData.avatar_url}
              alt={userData.login}
              className="w-32 h-32 mb-4 rounded-full"
            />
            <h2 className="text-2xl font-bold">{userData.name || userData.login}</h2>
            <p className="text-gray-600">{userData.bio}</p>
          </div>

          <div className="mt-4 space-y-2">
            <p><strong>Location:</strong> {userData.location || "N/A"}</p>
            <p><strong>Company:</strong> {userData.company || "N/A"}</p>
            <p><strong>Followers:</strong> {userData.followers}</p>
            <p><strong>Following:</strong> {userData.following}</p>
            <p><strong>Public Repos:</strong> {userData.public_repos}</p>
            <p><strong>Public Gists:</strong> {userData.public_gists}</p>
            <p><strong>Blog:</strong> <a href={userData.blog} target="_blank" rel="noopener noreferrer" className="text-blue-500">{userData.blog || "N/A"}</a></p>
            <p><strong>GitHub Profile:</strong> <a href={userData.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500">Visit</a></p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Github;
