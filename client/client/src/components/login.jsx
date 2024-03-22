import React, { useState } from 'react';

const Login = ({changeView,login,error}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ email, password });
      login({ email, password })
      console.log(error);
    };

    const handleSignUp = () => {
       changeView('singup')
    };

    return (
        <div className="login-form" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', fontSize: '20px', marginTop: '-70px' }}>
            <div>
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={handleEmailChange}
                            required
                            className="form-control"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={handlePasswordChange}
                            required
                            className="form-control"
                        />
                    </div>
                    {error && <p style={{color:'red'}}>{error}</p>}
                    <button type="submit" className="btn btn-primary" style={{ marginTop: '10px', justifyContent: 'center', backgroundColor: 'black', color: 'white', marginLeft: 'auto', marginRight: 'auto', display: 'block', border: 'none' }}>Login</button>
                    <p style={{ fontSize: '16px', marginTop: '10px' }}>no account sign up!</p>
                    <button type="button" className="btn btn-secondary" style={{ marginTop: '10px', justifyContent: 'center', backgroundColor: 'black', color: 'white', marginLeft: 'auto', marginRight: 'auto', display: 'block', border: 'none' }} onClick={handleSignUp}>Sign Up</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
