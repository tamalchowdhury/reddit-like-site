import React from 'react';

const Login = ({ login }) => {
  return (
    <div className="post-box">
      <h4>Pick a Display Name:</h4>
      <form method="POST" className="post-form" onSubmit={login}>
        <input type="text" name="username" />
        <button>Signup!</button>
      </form>
    </div>
  );
};

export default Login;
