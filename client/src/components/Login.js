import React from 'react';

const Login = ({ login }) => {
  return (
    <form method="POST" className="header-form" onSubmit={login}>
      <input
        type="text"
        name="username"
        placeholder="Pick a display name"
        maxLength="20"
        required
      />
      <button>Signup!</button>
    </form>
  );
};

export default Login;
