import React from 'react';

export default function LoginForm(){
  return (
    <form>
      <h2>Login</h2>
      <div className="error"></div>
      <div className="form-inner">
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input 
            type="text" 
            name="email" 
            id="email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input 
            type="password" 
            name="password"
            id="password"
          />
        </div>
        <input type="submit" value="LOGIN"/>
      </div>
    </form>
  )
};

