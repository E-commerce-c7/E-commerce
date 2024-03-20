import React, { useState } from 'react';

const PostProduct = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState(null);
    const [size, setSize] = useState('');
    const [color, setColor] = useState('');
    const [quantity, setQuantity] = useState(0);
    const [price, setPrice] = useState(0); // Added price state

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    };

    const handleImageDrop = (e) => {
        // Handle image drop logic here
        // You can use a library like react-dropzone for this
    };

    const handleSizeChange = (e) => {
        setSize(e.target.value);
    };

    const handleColorChange = (e) => {
        setColor(e.target.value);
    };

    const handleQuantityChange = (e) => {
        setQuantity(e.target.value);
    };

    const handlePriceChange = (e) => {
        setPrice(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
    };

    const colors = ['Red', 'Blue', 'Green', 'Yellow', 'Orange', 'Purple', 'Pink', 'Black', 'White', 'Gray'];
    const sizes = ['37', '38', '39', '40', '41', '42', '43', '44'];

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h2 style={{ marginBottom: '20px' }}>Post Product</h2>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <label htmlFor="name" style={{ fontWeight: 'bold' }}>Name:</label>
                <input type="text" id="name" value={name} onChange={handleNameChange} style={{ padding: '5px', borderRadius: '5px', border: '1px solid gray' }} />

                <label htmlFor="description" style={{ fontWeight: 'bold' }}>Description:</label>
                <textarea id="description" value={description} onChange={handleDescriptionChange} style={{ padding: '5px', borderRadius: '5px', border: '1px solid gray' }} />

                <label htmlFor="price" style={{ fontWeight: 'bold' }}>Price:</label> {/* Added price label */}
                <input type="number" id="price" value={price} onChange={handlePriceChange} style={{ padding: '5px', borderRadius: '5px', border: '1px solid gray' }} /> {/* Added price input */}


                <label htmlFor="size" style={{ fontWeight: 'bold' }}>Size:</label>
                <select id="size" value={size} onChange={handleSizeChange} style={{ padding: '5px', borderRadius: '5px', border: '1px solid gray' }}>
                    {sizes.map((size) => (
                        <option key={size} value={size}>
                            {size}
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
                    <label htmlFor="image" style={{ fontWeight: 'bold' }}>Image:</label>
                    <input type="file" id="image" onChange={handleImageDrop} style={{ padding: '5px', borderRadius: '5px', border: '1px solid gray' }} />

                <button type="submit" style={{ padding: '10px',backgroundColor: '#fff', color: '#000', border: '1px solid #000', borderRadius: '5px' }}>Submit</button>
            </form>
        </div>
    );
};

export default PostProduct;
