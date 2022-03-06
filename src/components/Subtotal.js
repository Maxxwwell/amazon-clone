import React from 'react'
import { Button } from '@mui/material'
import CurrencyFormat from 'react-currency-format';
import styled from 'styled-components';
import { useStateValue } from '../context api/StateProvider';
import { getBasketTotal } from '../context api/reducer';
import { useNavigate } from 'react-router';

function Subtotal() {
    const [{ basket }, dispatch] = useStateValue();
    const navigate = useNavigate();

    return (
        <SubtotalContainer>
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({basket?.length} items);
                            <strong>{value}</strong>
                        </p>
                        <small>
                            <input type="checkbox" />
                            This order contains a gift
                        </small>
                    </>
                )}

                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
            <Button
                variant="outlined"
                onClick={() => navigate('/payment')}>
                Proceed to Checkout
            </Button>

        </SubtotalContainer>

    )
}

export default Subtotal

const SubtotalContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 300px;
    height: 120px;
    margin-left: 10px;
    background-color: #f3f3f3;
    border: 1px #dddddd;
    border-radius: 3px;
    padding: 10px;

    Button {
        background-color: #f0c14b;
        border: 1px solid;
        margin: 15px;
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

    small {
        display: flex;
        align-items: center;
    }
    input {
        margin-right: 5px;
    }

`
