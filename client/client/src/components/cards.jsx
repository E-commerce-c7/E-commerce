import React from 'react';
import {Button } from 'react-bootstrap';

const Card = ({changeView}) => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div className="card" style={{ width: '280px', margin: '1rem', border: 'none', borderRadius: '10px' }}>
                <img src="https://demo.evershop.io/assets/homepage/banner/men-shoes.jpeg" alt="Card Image" className="card-image" style={{ borderRadius: '10px' }} />
                <div className="card-content">
                    <h2 className="card-title" style={{ fontSize: '0.9rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', marginTop: '0.5rem', fontFamily: 'Arial, sans-serif' }}>MEN SHOES COLLECTION</h2>
                    <p className="card-description" style={{ fontSize: '0.6rem', fontFamily: 'Arial, sans-serif' }}>Constructed from luxury nylons, leathers, and custom hardware, featuring sport details such as hidden breathing vents, waterproof + antimicrobial linings, and more.</p>
                        <Button variant="primary" style={{ width: '100%', outline: 'none', backgroundColor: '#fff', color: '#000', border: '1px solid #000' }} onClick={()=>changeView('productList',0,"men")}>SHOP MEN</Button>
                </div>
            </div>
            <div className="card" style={{ width: '280px', margin: '1rem', border: 'none', borderRadius: '10px' }}>
                <img src="https://demo.evershop.io/assets/homepage/banner/women-shoes.jpeg" alt="Card Image" className="card-image" style={{ borderRadius: '10px' }} />
                <div className="card-content">
                    <h2 className="card-title" style={{ fontSize: '0.9rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', marginTop: '0.5rem', fontFamily: 'Arial, sans-serif' }}>WOMEN SHOES COLLECTION</h2>
                    <p className="card-description" style={{ fontSize: '0.6rem', fontFamily: 'Arial, sans-serif' }}>Constructed from luxury nylons, leathers, and custom hardware, featuring sport details such as hidden breathing vents, waterproof + antimicrobial linings, and more.</p>
                       <Button variant="primary" style={{ width: '100%', outline: 'none', backgroundColor: '#fff', color: '#000', border: '1px solid #000' }} onClick={()=>changeView('productList',0,"women")} >SHOP WOMEN</Button>
                </div>
            </div>
            <div className="card" style={{ width: '280px', margin: '1rem', border: 'none', borderRadius: '10px' }}>
                <img src="https://demo.evershop.io/assets/homepage/banner/kid-shoes.jpeg" alt="Card Image" className="card-image" style={{ borderRadius: '10px' }} />
                <div className="card-content">
                    <h2 className="card-title" style={{ fontSize: '0.9rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', marginTop: '0.5rem', fontFamily: 'Arial, sans-serif' }}>MEN SHOES COLLECTION</h2>
                    <p className="card-description" style={{ fontSize: '0.6rem', fontFamily: 'Arial, sans-serif' }}>Constructed from luxury nylons, leathers, and custom hardware, featuring sport details such as hidden breathing vents, waterproof + antimicrobial linings, and more.</p>
                    <Button variant="primary" style={{ width: '100%', outline: 'none', backgroundColor: '#fff', color: '#000', border: '1px solid #000' }} onClick={()=>changeView('productList',0,"kids")}>SHOP KIDS</Button>
                </div>
            </div>
        </div>
    );
};

export default Card;
