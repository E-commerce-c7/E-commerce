import React, { useState } from 'react';
import Dropzone from 'react-dropzone';
import axios from 'axios';

function singUp({ singUp, changeView,signupEmailHandler }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setname] = useState('');
    const [role, setRole] = useState('');
    const [image, setImage] = useState('');
    const [isLoading, setIsLoading] = useState(false); // Add isLoading state

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

    const handleImageDrop = async (acceptedFiles) => {
        const formData = new FormData();
        formData.append('file', acceptedFiles[0]); // Make sure the file is the first item in the acceptedFiles array

        try {
            setIsLoading(true); // Set isLoading to true when image upload starts
            const response = await axios.post('/api/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data', // Add this line
                },
            });
            const imageUrl = response.data.imageUrl;
            console.log(imageUrl);
            setImage(imageUrl);
            setIsLoading(false); // Set isLoading to false when image upload is complete
        } catch (error) {
            console.error(error);
            setIsLoading(false); // Set isLoading to false when image upload fails
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        signupEmailHandler(email,name)
        singUp({ email, password, name, role, image });
    };

    const handleSignUp = () => {
        if (image) { // Only allow sign up if image is set
            console.log({ email, password, name, role, image });
            singUp({ email, password, name, role, image });
            changeView('login');
        }
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
                    <Dropzone onDrop={handleImageDrop}>
                        {({ getRootProps, getInputProps }) => (
                            <section style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px', border: '2px dashed #ddd', borderRadius: '5px', backgroundColor: '#f9f9f9', color: '#888', fontSize: '16px', cursor: 'pointer' }}>
                                <div {...getRootProps()}>
                                    <input {...getInputProps()} />
                                    {isLoading ? ( // Show loading screen if isLoading is true
                                        <p style={{ margin: '0' }}>Uploading image...</p>
                                    ) : (
                                        <p style={{ margin: '0' }}>Drag 'n' drop some files here, or click to select files</p>
                                    )}
                                </div>
                            </section>
                        )}
                    </Dropzone>
                    <button type="button" className="btn btn-secondary" style={{ marginTop: '10px', justifyContent: 'center', backgroundColor: 'black', color: 'white', marginLeft: 'auto', marginRight: 'auto', display: 'block', border: 'none' }} onClick={handleSignUp} disabled={!image}>Sign Up</button>
                </form>
            </div>
        </div>
    );
};

export default singUp;
