import React from 'react'
import styled from 'styled-components'
import { Star } from '@mui/icons-material'
import { Button } from '@mui/material'
import { useStateValue } from '../context api/StateProvider';

function CheckoutProduct({ id, image, title, price, rating }) {

    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id
        })
    }

    return (
        <CheckoutProductt>
            <img src={image} alt="" />
            <CheckoutProductInfo>
                <p>{title}</p>
                <small>$</small>
                <strong>{price}</strong>
                <CheckoutProductRating>
                    {Array(rating).fill().map(() => (
                        <Star style={{ color: 'gold' }} />

                    ))}
                </CheckoutProductRating>
                <Button onClick={removeFromBasket} variant="outlined">Remove from basket</Button>

            </CheckoutProductInfo>
        </CheckoutProductt>
    )
}

export default CheckoutProduct

const CheckoutProductt = styled.div`
    display: flex;
    margin-top: 20px;
    margin-bottom: 20px;
    

    img {
        height: 200px;
        width: 230px;
        max-width: 400px;
        object-fit: cover;
        
    }
`

const CheckoutProductInfo = styled.div`
    padding-left: 20px;
    margin-top: 10px;
    max-width: 200px;
    p {
        font-size: 15px;
        font-weight: 700;
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


const CheckoutProductRating = styled.div`

`