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
`;

const ProductPrice = styled.p`
    font-weight: bold;
    font-size: 14px;
`;

const ProductDescription = styled.p`
    margin-top: 10px;
    font-size: 14px;
`;

const OneProduct = (props) => {
    return (
        <ProductContainer>
            <ProductImage src={props.photo}  />
            <ProductInfo>
                <ProductName onclick={()=>{props.changeView('productDetails')}} href='#'>{props.name}</ProductName>
                <ProductPrice>${props.price}</ProductPrice>
            </ProductInfo>
        </ProductContainer>
    );
};

export default OneProduct;
