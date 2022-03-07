import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import styled from 'styled-components'
import { useStateValue } from '../context api/StateProvider';
import CheckoutProduct from '../components/CheckoutProduct';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from '../context api/reducer';
import { Button } from '@mui/material';
import axios from 'axios';

function Payment() {
    const [{ basket, user }, dispatch] = useStateValue();

    const stripe = useStripe();
    const elements = useElements();

    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [clientSecret, setClientSecret] = useState(true);

    useEffect(() => {
        //generate the special stripe secret which allows us to charge customer
        async function getClientSecret() {
            const response = await axios({
                method: 'post',
                //Stripe expects the total in a currencies subunits
                url: `/payments/create?total=${getBasketTotal(basket) * 100}`
            });
            setClientSecret(response.data.clientSecret)
        }
        getClientSecret();
    }, [basket])


    async function handleSubmit(event) {
        event.preventDefault();
        setProcessing(true);
        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({ paymentIntent }) => {
            //paymentIntent = payment Confirmation
            setSucceeded(true);
            setError(null);
            setProcessing(false);
        })
    }


    function handleChange(event) {
        //listen for changes in the card element
        //and display any errors as the customer types their card details
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "");
    }

    return (
        <PaymentContainer>
            <Header />

            <PaymentSection>
                <h3>Checkout {basket?.length} items</h3>
                <PaymentTitle>
                    <Delivery>
                        <h4>Delivery address</h4>
                    </Delivery>
                    <Address>
                        <p>{user?.email}</p>
                        <p>123 React Lane</p>
                        <p>Kasoa, Gh</p>
                    </Address>
                </PaymentTitle>
            </PaymentSection>


            <PaymentSection>
                <PaymentTitle>
                    <Review>
                        <h4>Review items and delivery</h4>
                    </Review>
                    <PaymentItems>
                        {basket.map(item => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </PaymentItems>
                </PaymentTitle>

            </PaymentSection>


            <PaymentSection>
                <PaymentTitle>
                    <Paymentt>
                        <h4>Payment Method</h4>
                        
                    </Paymentt>
                    <PaymentDetails>
                        <form onSubmit={handleSubmit}>
                        <CardElement onChange={handleChange} />

                            <Button
                                variant="outlined"
                                disabled={processing || disabled || succeeded}
                            // onClick={() => navigate('/payment')}

                            >
                                <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                            </Button>
                        </form>
                    </PaymentDetails>
                </PaymentTitle>
            </PaymentSection>

        </PaymentContainer>
    )
}

export default Payment

const PaymentContainer = styled.div`
    
`

const PaymentSection = styled.div`
    background-color: white;
   h3 {
        margin-top: 70px;
        padding: 10px;
        text-align: center;
        font-weight: 400px;
        background-color: rgb(234,237,237);
        border-bottom: 1px solid lightgray;
    }
`

const PaymentItems = styled.div`
    
`


const PaymentDetails = styled.div`
    flex: 0.8;
    Button {
        background-color: #f0c14b;
        border: 1px solid;
        margin-top: 15px;
        border-color: #a88734 #9c7e31 #846a29;
        color: #111;
        text-transform: inherit;
        

        &:hover {
        opacity: 0.5;
        background-color: #f0c14b;
        border: 1px solid;
        border-color: #a88734 #9c7e31 #846a29;
        color: #111;
        }
    }
`

const PaymentTitle = styled.div`
    display: flex;
    
    padding: 20px;
    margin: 0 20px;
    border-bottom: 1px solid lightgray;

    p{
        /* display: flex; */
        
    }
`

const Delivery = styled.div`
    flex: 0.1;
    margin-right: 20px;
`

const Address = styled.div`
    flex: 0.8;
`


const Review = styled.div`
    flex: 0.1; 
    margin-right: 20px;
`


const Paymentt = styled.div`
    flex: 0.1;
    margin-right: 20px;
`

const PriceContainer = styled.div`

`

const Error = styled.div`

`
