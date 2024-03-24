import React from 'react';
import styled from 'styled-components';

const ProductContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 10px;
    padding: 10px;
    border-radius: 5px;
    width: 200px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    cursor: pointer; // Add cursor pointer
`;

const ProductImage = styled.img`
    width: 150px;
    height: 150px;
    object-fit: cover;
    margin-right: 10px;
`;

const ProductInfo = styled.div`
    display: flex;
    flex-direction: column;
`;

const ProductName = styled.h2`
    font-size: 16px;
    margin-bottom: 5px;
    font-family: Arial, sans-serif;
    transition: font-size 0.3s, border-bottom 0.3s;
    border-bottom: 1px solid transparent;
    &:hover {
        font-size: 18px;
        border-bottom: 1px solid black;
    }
`;

const ProductPrice = styled.p`
    font-weight: bold;
    font-size: 14px;
    font-family: Arial, sans-serif;
`;

const ProductDescription = styled.p`
    margin-top: 10px;
    font-size: 14px;
    font-family: Arial, sans-serif;
`;

const OneProduct = (props) => {
   
    const handleClick = async () =>  {
        try {
            await props.getOne(props.product.id)
            await  props.changeView('productDetails',props.product.id)
            console.log('drom one',props.product);
            
        } catch (error) {
            console.log(error);
        }
    }
     
    

    return (
        <ProductContainer>
            <ProductImage src={props.product.image} onClick={handleClick} />
            <ProductInfo>
                <ProductName onClick={handleClick}>{props.product.name}</ProductName>
                <ProductPrice>${props.product.price}</ProductPrice>
            </ProductInfo>
        </ProductContainer>
    )
};

export default OneProduct;
