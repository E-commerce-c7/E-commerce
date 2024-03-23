import React, { useEffect, useState } from 'react';

const Cart = ({ cart, getCart, user, destroyCart, deleteFromCart }) => {
    const [discountCode, setDiscountCode] = useState('');
    const [discountApplied, setDiscountApplied] = useState(false);
    const [discountNotFound, setDiscountNotFound] = useState(false);

    useEffect(() => {
        getCart(user.id);
    }, []);

    const items = cart;

    const totalPrice = items.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)

    const applyDiscount = () => {
        if (discountCode === 'DISCOUNT20' && totalPrice > 500) {
            setDiscountApplied(true);
            setDiscountNotFound(false);
        } else {
            setDiscountNotFound(true);
        }
    };

    const handleDiscountCodeChange = (e) => {
        setDiscountCode(e.target.value);
    };

    const handleDeleteFromCart = (itemId) => {
        deleteFromCart(itemId);
        getCart(user.id); // Refetch cart after deleting an item
    };

    return (
        <div style={{ fontFamily: 'Arial', backgroundColor: '#f5f5f5', padding: '20px', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
            <h2 style={{ marginBottom: '20px', textAlign: 'center' }}>Cart</h2>
            {items.length === 0 ? (
                <div style={{ textAlign: 'center' }}>
                    <p style={{ fontSize: '1.2rem', color: '#888' }}>Cart is empty</p>
                </div>
            ) : (
                <>
                    {items.map((item) => (
                        <div key={item.id} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                            <img src={item.image} alt={item.name} style={{ width: '100px', height: '100px', marginRight: '10px' }} />
                            <hr style={{ width: '1px', height: '100px', backgroundColor: '#ccc', margin: '0 10px' }} />
                            <div style={{ flex: '1', marginRight: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>{item.name}</span>
                                <span style={{ marginLeft: '10px', fontSize: '1.2rem' }}>${item.price}</span>
                                <span style={{ marginLeft: '10px', fontSize: '1.2rem' }}>Quantity: {item.quantity}</span>
                                <button
                                    style={{
                                        padding: '5px 10px',
                                        backgroundColor: '#fff',
                                        color: '#000',
                                        border: '1px solid #000',
                                        borderRadius: '5px',
                                        cursor: 'pointer',
                                        fontSize: '1rem'
                                    }}
                                    onClick={() => handleDeleteFromCart(item.id)}
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))}
                    <hr style={{ margin: '20px 0' }} />
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={{ fontSize: '1.4rem', fontWeight: 'bold' }}>Total Price: ${discountApplied ? Math.floor(totalPrice * 0.8) : Math.floor(totalPrice)}</span>
                        <div>
                            <input type="text" value={discountCode} onChange={handleDiscountCodeChange} placeholder="Discount Code" />
                            <button
                                style={{
                                    padding: '10px 20px',
                                    backgroundColor: '#fff',
                                    color: '#000',
                                    border: '1px solid #000',
                                    borderRadius: '5px',
                                    cursor: 'pointer',
                                    fontSize: '1.2rem'
                                }}
                                onClick={applyDiscount}
                            >
                                Apply Discount
                            </button>
                            {discountNotFound && (
                                <p style={{ fontSize: '1.2rem', color: 'red' }}>Discount not found or invalid</p>
                            )}
                        </div>
                        <button
                            style={{
                                padding: '10px 20px',
                                backgroundColor: '#fff',
                                color: '#000',
                                border: '1px solid #000',
                                borderRadius: '5px',
                                cursor: 'pointer',
                                fontSize: '1.2rem'
                            }}
                            onClick={() => {
                                destroyCart(user.id);
                                getCart(user.id);
                            }}
                        >
                            Checkout
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};

export default Cart;
