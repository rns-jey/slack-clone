import React, {useState} from 'react';

export default function LoginForm(){
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

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
            onChange={e => setEmail(e.target.value)} value={email}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input 
            type="password" 
            name="password"
            id="password"
            onChange={e => setPassword(e.target.value)} value={password}
          />
        </div>
        <input type="submit" value="LOGIN"/>
      </div>
    </form>
  )
};

