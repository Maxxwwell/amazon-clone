import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'
import ReactLoading from 'react-loading';
import { Button } from '@mui/material'
import { _login, _signup } from '../firebase';

function Signup() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isRegistering, setIsRegistering] = useState(false);
    const [isSignup, setIsSignup] = useState(false);

    const navigateToHome = () => navigate("/")

    async function signIn(event) {
        try {
            setIsSignup(true)
            event.preventDefault();
            await _login(email, password);
            if (_login) {
                console.log("I am login")
                navigateToHome();
            }
        } catch (error) {
            alert(error.message)
        }
        setIsSignup(false)
    }

    async function register(event) {
        try {
            setIsRegistering(true)
            event.preventDefault();
            await _signup(email, password);
            if (_signup) {
                console.log("I am sign up")
                navigateToHome();
            }
        } catch (error) {
            alert(error.message);

        }
        setIsRegistering(false);
    }



    return (
        <Signupp>
            <Logo
                src="data:image/png;base64,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"
                alt="logo"
                onClick={() => navigate("/")}
            />
            <FormContainer>
                <h1>Sign-in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input
                        type="text"
                        value={email}
                        onChange={event => setEmail(event.target.value)}
                    />

                    <h5>Password</h5>
                    <input
                        type="password"
                        value={password}
                        onChange={event => setPassword(event.target.value)}
                    />

                    <Button
                        type="submit"
                        onClick={signIn}
                        variant="outlined">
                        {
                            isSignup ? (
                                <Loader>
                                    <ReactLoading type="spinningBubbles" color="black" height={20} width={20} />
                                </Loader>
                            ) : ("Sign in")
                        }
                    </Button>
                </form>

                <p>
                    By Signing-in you agree to Amazon clone
                    Conditions of Use & Sale. Please see our
                    Privacy Notice, our Cookies Notice and
                    our Interest-Based Ads Notice
                </p>

                <Button
                    onClick={register}
                    variant="outlined">
                    {
                        isRegistering ? (
                            <Loader>
                                <ReactLoading type="spinningBubbles" color="black" height={20} width={20} />
                            </Loader>
                        ) : ("Create your Amazon Account")
                    }

                </Button>
            </FormContainer>
        </Signupp>
    )
}

export default Signup

export const Signupp = styled.div`
    background-color: white;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    form {
        Button {
        background-color: #f0c14b;
        border: 1px solid;
        margin-top: 5px;
        border-color: #a88734 #9c7e31 #846a29;
        color: #111;
        text-transform: inherit;
        height: 30px;
        width: 100%;

        &:hover {
        opacity: 0.8;
        background-color: #f0c14b;
        border: 1px solid;
        margin-top: 5px;
        border-color: #a88734 #9c7e31 #846a29;
        color: #111;
        }
    }
    }

   
`

const Loader = styled.div`
        align-items: center;
        justify-content: center;
        display: flex;
`

const FormContainer = styled.div`
    width: 300px;
    height: fit-content;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    border: 1px solid lightgray;
    padding: 20px;

    p {
        margin-top: 15px;
        font-size: 13px;
    }

    h1 {
        font-weight: 500;
        margin-bottom: 20px;
    }

    h5 {
        /* margin-bottom: 5px; */

    }
    Button {
        background-color: lightgray;
        border: 1px solid;
        margin-top: 5px;
        border-color: black;
        color: #111;
        text-transform: inherit;
        height: 30px;
        width: 100%;

        &:hover {
        opacity: 0.8;
        /* background-color: #f0c14b; */
        border: 1px solid;
        margin-top: 5px;
        border-color: #a88734 #9c7e31 #846a29;
        color: #111;
        }
    }

    input {
        height: 20px;
        margin-bottom: 5px;
        background-color: white;
        width: 98%;
    }
`

const Logo = styled.img`
    width: 100px;
    object-fit: contain;
    margin-bottom: 15px;
    margin-top: 30px;
    margin-right: auto;
    margin-left: auto;
    cursor: pointer;
`