import React from 'react';
import { Link } from 'react-router-dom';

function Hello() {
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <div className="container">
      <h2>Hello, {user.email}!</h2>
      <p>You have successfully logged in.</p>
      <Link to="/login">Logout</Link>
    </div>
  );
}

export default Hello;