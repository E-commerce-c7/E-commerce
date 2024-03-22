import React,{useEffect} from 'react';

const Cart = ({cart,getCart,user}) => {
        useEffect(()=>{
            getCart(user.id)
        },[])


    const items = cart
    

    const totalPrice = items.reduce((total, item) => total + item.price * item.quantity, 0);

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
                            <hr style={{ width: '1px', height: '100px', backgroundColor: '#ccc', margin: '0 10px' }} /> {/* Add this line */}
                            <div style={{ flex: '1', marginRight: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>{item.name}</span>
                                <span style={{ marginLeft: '10px', fontSize: '1.2rem' }}>${item.price}</span>
                                <span style={{ marginLeft: '10px', fontSize: '1.2rem' }}>Quantity: {item.quantity}</span>
                            </div>
                        </div>
                    ))}
                    <hr style={{ margin: '20px 0' }} />
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={{ fontSize: '1.4rem', fontWeight: 'bold' }}>Total Price: ${totalPrice}</span>
                        <button style={{ padding: '10px 20px', backgroundColor: '#fff', color: '#000', border: '1px solid #000', borderRadius: '5px', cursor: 'pointer', fontSize: '1.2rem' }}>Checkout</button>
                            </div>
                </>
            )}

        </div>
    );
};

export default Cart;
