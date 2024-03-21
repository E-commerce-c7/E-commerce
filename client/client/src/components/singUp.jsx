import React, { useState } from 'react';

function singUp() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setname] = useState('');
    const [role, setRole] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };
    const handlenameChange = (e) => {
        setname(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleRoleChange = (e) => {
        setRole(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your login logic here
    };

    const handleSignUp = () => {
        // Add your sign up logic here
    };

    return (
        <div className="login-form" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', fontSize: '20px', marginTop: '-70px' }}>
            <div>
                <h2>Sing Up</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                            type="name"
                            id="name"
                            value={name}
                            onChange={handlenameChange}
                            required
                            className="form-control"
                        />
                    </div>
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
                        <label htmlFor="role">Role</label>
                        <select
                            id="role"
                            value={role}
                            onChange={handleRoleChange}
                            required
                            className="form-control"
                        >
                            <option value="">Select Option</option>
                            <option value="seller">Seller</option>
                            <option value="user">User</option>
                        </select>
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
                    <button type="button" className="btn btn-secondary" style={{ marginTop: '10px', justifyContent: 'center', backgroundColor: 'black', color: 'white', marginLeft: 'auto', marginRight: 'auto', display: 'block', border: 'none' }} onClick={handleSignUp}>Sign Up</button>
                </form>
            </div>
        </div>
    );
};




export default singUp
