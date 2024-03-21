import React, { useEffect, useRef } from 'react';
import { gsap } from "gsap";
import { Button } from 'react-bootstrap';

const Card = ({ changeView }) => {
    const buttonRef1 = useRef(null);
    const buttonRef2 = useRef(null);
    const buttonRef3 = useRef(null);

    useEffect(() => {
        gsap.from(buttonRef1.current, { duration: 0.5, scale: 0.8, ease: "power2.out" });
        gsap.from(buttonRef2.current, { duration: 0.5, scale: 0.8, ease: "power2.out" });
        gsap.from(buttonRef3.current, { duration: 0.5, scale: 0.8, ease: "power2.out" });
    }, []);

    const handleClick = (category) => {
        gsap.to(buttonRef1.current, { duration: 0.5, scale: 1.2, ease: "power2.out" });
        gsap.to(buttonRef2.current, { duration: 0.5, scale: 1.2, ease: "power2.out" });
        gsap.to(buttonRef3.current, { duration: 0.5, scale: 1.2, ease: "power2.out" });
        changeView('productList', 0, category);
    };

    const handleMouseEnter = (ref) => {
        gsap.to(ref.current, { duration: 0.3, scale: 1.1, ease: "power2.out" });
    };

    const handleMouseLeave = (ref) => {
        gsap.to(ref.current, { duration: 0.3, scale: 1, ease: "power2.out" });
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div className="card" style={{ width: '280px', margin: '1rem', border: 'none', borderRadius: '10px' }}>
                <img src="https://demo.evershop.io/assets/homepage/banner/men-shoes.jpeg" alt="Card Image" className="card-image" style={{ borderRadius: '10px' }} />
                <div className="card-content">
                    <h2 className="card-title" style={{ fontSize: '0.9rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', marginTop: '0.5rem', fontFamily: 'Arial, sans-serif' }}>MEN SHOES COLLECTION</h2>
                    <p className="card-description" style={{ fontSize: '0.6rem', fontFamily: 'Arial, sans-serif' }}>Constructed from luxury nylons, leathers, and custom hardware, featuring sport details such as hidden breathing vents, waterproof + antimicrobial linings, and more.</p>
                    <Button ref={buttonRef1} variant="primary" className="card-button" style={{ width: '100%', outline: 'none', backgroundColor: '#fff', color: '#000', border: '1px solid #000' }} onClick={() => handleClick("men")} onMouseEnter={() => handleMouseEnter(buttonRef1)} onMouseLeave={() => handleMouseLeave(buttonRef1)}>SHOP MEN</Button>
                </div>
            </div>
            <div className="card" style={{ width: '280px', margin: '1rem', border: 'none', borderRadius: '10px' }}>
                <img src="https://demo.evershop.io/assets/homepage/banner/women-shoes.jpeg" alt="Card Image" className="card-image" style={{ borderRadius: '10px' }} />
                <div className="card-content">
                    <h2 className="card-title" style={{ fontSize: '0.9rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', marginTop: '0.5rem', fontFamily: 'Arial, sans-serif' }}>WOMEN SHOES COLLECTION</h2>
                    <p className="card-description" style={{ fontSize: '0.6rem', fontFamily: 'Arial, sans-serif' }}>Constructed from luxury nylons, leathers, and custom hardware, featuring sport details such as hidden breathing vents, waterproof + antimicrobial linings, and more.</p>
                    <Button ref={buttonRef2} variant="primary" className="card-button" style={{ width: '100%', outline: 'none', backgroundColor: '#fff', color: '#000', border: '1px solid #000' }} onClick={() => handleClick("women")} onMouseEnter={() => handleMouseEnter(buttonRef2)} onMouseLeave={() => handleMouseLeave(buttonRef2)}>SHOP WOMEN</Button>
                </div>
            </div>
            <div className="card" style={{ width: '280px', margin: '1rem', border: 'none', borderRadius: '10px' }}>
                <img src="https://demo.evershop.io/assets/homepage/banner/kid-shoes.jpeg" alt="Card Image" className="card-image" style={{ borderRadius: '10px' }} />
                <div className="card-content">
                    <h2 className="card-title" style={{ fontSize: '0.9rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', marginTop: '0.5rem', fontFamily: 'Arial, sans-serif' }}>KIDS SHOES COLLECTION</h2>
                    <p className="card-description" style={{ fontSize: '0.6rem', fontFamily: 'Arial, sans-serif' }}>Constructed from luxury nylons, leathers, and custom hardware, featuring sport details such as hidden breathing vents, waterproof + antimicrobial linings, and more.</p>
                    <Button ref={buttonRef3} variant="primary" className="card-button" style={{ width: '100%', outline: 'none', backgroundColor: '#fff', color: '#000', border: '1px solid #000' }} onClick={() => handleClick("kids")} onMouseEnter={() => handleMouseEnter(buttonRef3)} onMouseLeave={() => handleMouseLeave(buttonRef3)}>SHOP KIDS</Button>
                </div>
            </div>
        </div>
    );
};

export default Card;
