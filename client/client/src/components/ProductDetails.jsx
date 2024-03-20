import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';

const ProductDetails = () => {
    const [quantity, setQuantity] = useState('0');
    const [size, setSize] = useState('');
    const [color, setColor] = useState('');
    const stock = 'Available'; // Added stock variable

    const handleQuantityChange = (event) => {
        setQuantity(event.target.value);
    };

    const handleAttributeChange = (attribute, value) => {
        switch (attribute) {
            case 'size':
                setSize(value);
                break;
            case 'color':
                setColor(value);
                break;
            default:
                break;
        }
    };

    return (
        <div style={{ display: 'flex', alignItems: 'center', margin: '0 auto', maxWidth: '800px' }}>
            <div style={{ flex: '1', borderRight: '1px solid #ccc', padding: '10px' }}>

                <img src="https://demo.evershop.io/assets/catalog/9916/3001/plv4547-Grey-single.png" alt="Product Image" style={{ width: '100%', height: 'auto', borderRadius: '10%' }} />
            </div>
            <div style={{ flex: '2', padding: '10px', display: 'flex', fontFamily: 'Arial, sans-serif', flexDirection: 'column', justifyContent: 'space-between' }}>
                <Card>
                    <Card.Body style={{ fontFamily: 'Arial, sans-serif' }}>
                        <Card.Title style={{ fontSize: '26px', fontWeight: 'bold' }}>Mix And Match Chuck Taylor All Star</Card.Title>
                        <Card.Text style={{ fontSize: '18px', fontWeight: 'bold' }}>
                            Price: $100
                        </Card.Text>
                        <Card.Text style={{ fontSize: '13px', fontWeight: '' }}>
                            Seller: John Doe
                        </Card.Text>
                        <Card.Text style={{ fontSize: '14px', fontWeight: 'bold' }}>Stock: Available</Card.Text> {/* Added stock variable */}
                        <Card.Text style={{ fontSize: '14px', border: 'none', marginBottom: '5px' }}>
                            Quantity: <input type="number" value={quantity} onChange={handleQuantityChange} style={{ width: '50px', fontSize: '14px' }} />
                        </Card.Text>
                        <Card.Text style={{ fontSize: '14px', margin: '10px 0', color: '#333' }}>
                            Size:
                            <div style={{ marginTop: '5px' }}>
                                {['36', '40', '41','43'].map((sizeOption) => (
                                    <Button
                                        key={sizeOption}
                                        variant={size === sizeOption ? 'primary' : 'outline-primary'}
                                        onClick={() => handleAttributeChange('size', sizeOption)}
                                        style={{ marginRight: '5px', outline: 'none', backgroundColor: size === sizeOption ? '#cccccc' : '#ffffff', color: '#333', border: 'none' }}
                                    >
                                        {sizeOption}
                                    </Button>
                                ))}
                            </div>
                        </Card.Text>
                        <Card.Text style={{ fontSize: '14px', margin: '10px 0', color: '#333' }}>
                            Color:
                            <div style={{ marginTop: '5px' }}>
                                {['white', 'black','grey'].map((colorOption) => (
                                    <Button
                                        key={colorOption}
                                        variant={color === colorOption ? 'primary' : 'outline-primary'}
                                        onClick={() => handleAttributeChange('color', colorOption)}
                                        style={{ marginRight: '5px', outline: 'none', backgroundColor: color === colorOption ? '#cccccc' : '#ffffff', color: '#333', border: 'none' }}
                                    >
                                        {colorOption.charAt(0).toUpperCase() + colorOption.slice(1)}
                                    </Button>
                                ))}
                            </div>
                        </Card.Text>
                        <Card.Text style={{ fontSize: '14px' }}>
                            Description: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque debitis sequi laboriosam repudiandae ab. Cupiditate facere, doloremque accusantium quo explicabo at nulla quam quia corporis, non laudantium odit veritatis ex!
                        </Card.Text>
                        <Button variant="primary" style={{ width: '100%', backgroundColor: 'black', color: 'white', outline: 'none', border: 'none' }}>Add to Cart</Button>
                        </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default ProductDetails;
