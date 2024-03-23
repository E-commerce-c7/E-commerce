import React, { useState } from 'react';
import Dropzone from 'react-dropzone';
import axios from 'axios';

const PostProduct = ({ addProduct, changeView, user }) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState(null);
    const [sizes, setSizes] = useState([]);
    const [color, setColor] = useState([]);
    const [quantity, setQuantity] = useState(0);
    const [price, setPrice] = useState(0);
    const [gender, setGender] = useState('');
    const [brand, setBrand] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [id, setId] = useState(user.id);
    const [submitCount, setSubmitCount] = useState(0); // Added submitCount state

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    };

    const handleImageDrop = async (acceptedFiles) => {
        const formData = new FormData();
        formData.append('file', acceptedFiles[0]);

        try {
            setIsLoading(true);
            const response = await axios.post('/api/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            const imageUrl = response.data.imageUrl;
            console.log(imageUrl);
            setImage(imageUrl);
            setIsLoading(false);
        } catch (error) {
            console.error(error);
            setIsLoading(false);
        }
    };

    const handleSizesChange = (e) => {
        setSizes(Array.from(e.target.selectedOptions, (option) => option.value));
    };

    const handleColorChange = (e) => {
        setColor(Array.from(e.target.selectedOptions, (option) => option.value));
    };

    const handleQuantityChange = (e) => {
        setQuantity(e.target.value);
    };

    const handlePriceChange = (e) => {
        setPrice(e.target.value);
    };

    const handleGenderChange = (e) => {
        setGender(e.target.value);
    };

    const handleBrandChange = (e) => {
        setBrand(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await addProduct({
            name: name,
            description: description,
            price: price,
            color: color,
            sizes: sizes,
            image: image,
            gender: gender,
            quantity: quantity,
            brand: brand,
            seller: user.name,
            userId: id,
        });
        setSubmitCount(submitCount + 1); // Increment submitCount
        changeView('main');
    };

    const colors = ['Red', 'Blue', 'Green', 'Yellow', 'Orange', 'Purple', 'Pink', 'Black', 'White', 'Gray'];
    const sizess = ['37', '38', '39', '40', '41', '42', '43', '44'];
    const genders = ['Men', 'Women', 'Kids'];

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h2 style={{ marginBottom: '20px' }}>Post Product</h2>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <label htmlFor="name" style={{ fontWeight: 'bold' }}>Name:</label>
                <input type="text" id="name" value={name} onChange={handleNameChange} style={{ padding: '5px', borderRadius: '5px', border: '1px solid gray' }} />

                <label htmlFor="description" style={{ fontWeight: 'bold' }}>Description:</label>
                <textarea id="description" value={description} onChange={handleDescriptionChange} style={{ padding: '5px', borderRadius: '5px', border: '1px solid gray' }} />

                <label htmlFor="price" style={{ fontWeight: 'bold' }}>Price:</label>
                <input type="number" id="price" value={price} onChange={handlePriceChange} style={{ padding: '5px', borderRadius: '5px', border: '1px solid gray' }} />

                <label htmlFor="sizes" style={{ fontWeight: 'bold' }}>Sizes:</label>
                <select id="sizes" value={sizes} onChange={handleSizesChange} style={{ padding: '5px', borderRadius: '5px', border: '1px solid gray' }}>
                    {sizess.map((sizes) => (
                        <option key={sizes} value={sizes}>
                            {sizes}
                        </option>
                    ))}
                </select>

                <label htmlFor="color" style={{ fontWeight: 'bold' }}>Color:</label>
                <select id="color" value={color} onChange={handleColorChange} style={{ padding: '5px', borderRadius: '5px', border: '1px solid gray' }}>
                    {colors.map((color) => (
                        <option key={color} value={color}>
                            {color}
                        </option>
                    ))}
                </select>

                <label htmlFor="quantity" style={{ fontWeight: 'bold' }}>Quantity:</label>
                <input type="number" id="quantity" value={quantity} onChange={handleQuantityChange} style={{ padding: '5px', borderRadius: '5px', border: '1px solid gray' }} />

                <label htmlFor="gender" style={{ fontWeight: 'bold' }}>Gender:</label>
                <select id="gender" value={gender} onChange={handleGenderChange} style={{ padding: '5px', borderRadius: '5px', border: '1px solid gray' }}>
                    {genders.map((gender) => (
                        <option key={gender} value={gender}>
                            {gender}
                        </option>
                    ))}
                </select>

                <label htmlFor="brand" style={{ fontWeight: 'bold' }}>Brand:</label>
                <input type="text" id="brand" value={brand} onChange={handleBrandChange} style={{ padding: '5px', borderRadius: '5px', border: '1px solid gray' }} />

                <label htmlFor="image" style={{ fontWeight: 'bold' }}>Image:</label>
                <Dropzone onDrop={handleImageDrop}>
                    {({ getRootProps, getInputProps }) => (
                        <section style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px', border: '2px dashed #ddd', borderRadius: '5px', backgroundColor: '#f9f9f9', color: '#888', fontSizes: '16px', cursor: 'pointer' }}>
                            <div {...getRootProps()}>
                                <input {...getInputProps()} />
                                {isLoading ? (
                                    <p style={{ margin: '0' }}>Uploading image...</p>
                                ) : (
                                    <p style={{ margin: '0' }}>Drag 'n' drop some files here, or click to select files</p>
                                )}
                            </div>
                        </section>
                    )}
                </Dropzone>

                <button type="submit" style={{ padding: '10px', backgroundColor: '#fff', color: '#000', border: '1px solid #000', borderRadius: '5px' }}>Submit</button>
            </form>
            <div>{submitCount > 0 && <p>Form submitted successfully!</p>}</div> {/* Display success message */}
        </div>
    );
};

export default PostProduct;
