import React from 'react'
import styled from 'styled-components'
import CheckoutProduct from '../components/CheckoutProduct';
import Subtotal from '../components/Subtotal'
import { useStateValue } from '../context api/StateProvider';


function Checkout() {
    const [{ basket }, dispatch] = useStateValue();

    return (
        <CheckoutContainer>
            <CheckoutLeft>
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/pc_banner_2.jpg" alt="" />
                <CheckoutTitle>
                    <h2>Your shopping basket</h2>
                    {basket.map(item => (
                        <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />
                    ))}
                </CheckoutTitle>
            </CheckoutLeft>

            <CheckoutRight>
                <Subtotal />
            </CheckoutRight>
        </CheckoutContainer>

    )
}

export default Checkout

const CheckoutContainer = styled.div`
    display: flex;
    padding: 10px;
    height: max-content;
    background-color: white;
    overflow-x: hidden;
`

const CheckoutLeft = styled.div`
    img {
        max-width: 1700px;
        width: 100%;
        /* object-fit: cover; */
    }
`


const CheckoutRight = styled.div`
`

const CheckoutTitle = styled.div`
    margin-right: 10px;
    padding: 10px;
    border-bottom: 1px solid lightgray;
`