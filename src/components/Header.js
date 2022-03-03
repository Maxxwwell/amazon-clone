import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { useNavigate, Link } from 'react-router-dom';
import { useStateValue } from '../context api/StateProvider';
import { auth } from '../firebase';


function Header() {

    const [{ basket, user }, dispatch] = useStateValue();
    const navigate = useNavigate();

    function handleAuth() {
        if (user) {
            auth.signOut();
        }
    }

    return (
        <HeaderContainer>
            <Link to="/">
                <Logo src="https://www.sahirkarani.com/images/amazon.png" />
            </Link>
            <input type="text" />
            <Icon>
                <SearchIcon />
            </Icon>
            <HeaderNav>
                <HeaderOption onClick={() => navigate(!user && "/signup")}>
                    <SignOut onClick={handleAuth}>
                        <p>hello</p>
                        <h3>{user ? 'Sign Out' : 'Sign In'}</h3>

                    </SignOut>
                </HeaderOption>

                <HeaderOption>
                    <p>Returns</p>
                    <h3>& Orders</h3>
                </HeaderOption>

                <HeaderOption>
                    <p>Your </p>
                    <h3>Prime</h3>
                </HeaderOption>

                <Basket onClick={() => navigate("/checkout")}>
                    <ShoppingBasketIcon />
                    <span>{basket?.length}</span>
                </Basket>

            </HeaderNav>



        </HeaderContainer>

    )
}

export default Header

const HeaderContainer = styled.div`
    display: flex;
    height: 60px;
    width: 100%;
    align-items: center;
    background-color: #131921;
    position: fixed;
    top: 0;
    z-index: 10;
    

    input {
        height: 26px;
        flex: 1;
        align-items: center;
        border: none;
    }
  
`

const Icon = styled.div`
    background-color: #cd9042;
    height: 20px;
    padding: 4px;

`

const Logo = styled.img`
    width: 100px;
    color: white;
    object-fit: contain;
    margin: 0 20px;
    margin-top: 18px;
`


const HeaderNav = styled.div`
    display: flex;
    justify-content: space-evenly;
    p {
        font-size: 12px;
        color: lightgray;
    }

    h3 {
        font-size: 14px;
    }
    
`

const HeaderOption = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 10px;
    margin-right: 10px;
    color: white;
    cursor: pointer;
    &:hover {
        transform: scale(1.09);
    }
`

const Basket = styled.div`
    color: white;
    display: flex;
    align-items: center;
    cursor: pointer;
    &:hover {
        transform: scale(1.09);
    }

    span {
        margin-left: 10px;
        margin-right: 15px;
    }
`

const SignOut = styled.div`

`