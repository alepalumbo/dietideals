import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UserProfile({ userId = 1 }) {
  const [userProfile, setUserProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:8080/api/users/${userId}`)
      .then(response => {
        setUserProfile(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, [userId]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>Profilo di {userProfile.fullname}</h1>
      <p>Email: {userProfile.email}</p>
      <p>Data di Nascita: {userProfile.dateOfBirth}</p>
      <p>Biografia: {userProfile.bio}</p>
      <p>Telefono: {userProfile.phoneNumber}</p>
      <p>Indirizzo: {userProfile.address}</p>
    </div>
  );
}

export default UserProfile;
