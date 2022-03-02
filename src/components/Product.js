import { Star } from '@mui/icons-material'
import { Button } from '@mui/material'
import React from 'react'
import styled from "styled-components"
import { useStateValue } from '../context api/StateProvider'

function Product({ id, title, image, price, rating }) {

    const [{basket}, dispatch] = useStateValue();

    console.log("this is the basket =>", basket)

    const addToBasket = () => {
        //dispatch the item into the data layer
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            }
        });
    }

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
            <Button onClick={addToBasket} variant="outlined">Add to basket</Button>
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
    
    background-color: white;
    z-index: 1;
    cursor: pointer;
    &:hover {
        transform: scale(1.04);
    }

    img {
        max-height: 200px;
        min-width: 100px;

        width: 100%;
        object-fit: contain;
        margin-bottom: 10px;
    }

    Button {
        background-color: #f0c14b;
        border: 1px solid;
        margin-top: 5px;
        border-color: #a88734 #9c7e31 #846a29;
        color: #111;
        text-transform: inherit;

        &:hover {
        opacity: 0.5;
        background-color: #f0c14b;
        border: 1px solid;
        margin-top: 5px;
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