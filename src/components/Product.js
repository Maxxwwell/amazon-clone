import { Star } from '@mui/icons-material'
import { Button } from '@mui/material'
import React from 'react'
import styled from "styled-components"

function Product({ id, title, image, price, rating }) {
    return (
        <ProductContainer>
            <ProductInfo>
                <p>{title}</p>
                <small>$</small>
                <strong>{price}</strong>
                <ProductRating>
                    {Array(rating).fill().map((_, i) => (
                        <Star style={{ color: 'gold' }} />
                    ))}

                </ProductRating>
            </ProductInfo>
            <img src={image} alt="" />
            <Button variant="outlined">Add to basket</Button>
        </ProductContainer>
    )
}

export default Product

const ProductContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    margin: 10px;
    padding: 20px;
    width: 100%;
    max-height: 400px;
    /* max-width: 200px; */
    background-color: white;
    z-index: 1;

    img {
        max-height: 200px;
        width: 100%;
        object-fit: contain;
        margin-bottom: 15px;
    }

    Button {
        background-color: #f0c14b;
        border: 1px solid;
        margin-top: 10px;
        border-color: #a88734 #9c7e31 #846a29;
        color: #111;
        text-transform: inherit;

        &:hover {
        opacity: 0.5;
        background-color: #f0c14b;
        border: 1px solid;
        margin-top: 10px;
        border-color: #a88734 #9c7e31 #846a29;
        color: #111;
        }
    }
`

const ProductInfo = styled.div`
    height: 80px;
    margin-bottom: 15px;

    strong {
        margin-top: 5px;
    }
`


const ProductRating = styled.div`
     display: flex;

`