import React from 'react';
import Header from '../components/Header';
import styled from 'styled-components'
import { useStateValue } from '../context api/StateProvider';
import CheckoutProduct from '../components/CheckoutProduct';

function Payment() {
    const [{ basket, user }, dispatch] = useStateValue();

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
                </PaymentTitle>
                <PaymentDetails>

                </PaymentDetails>
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

