import React from 'react';

const Login = ({ login }) => {
  return (
    <form method="POST" className="header-form" onSubmit={login}>
      <input
        type="text"
        name="username"
        placeholder="Pick a display name"
        required
      />
      <button>Signup!</button>
    </form>
  );
};

export default Login;
