import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';


function Header() {
    return (
        <HeaderContainer>
            <Logo src="https://www.sahirkarani.com/images/amazon.png" />
            <input type="text" />
            <Icon>
                <SearchIcon />
            </Icon>
            <HeaderNav>
                <HeaderOption>
                    <p>hello</p>
                    <h3>Sign in</h3>
                </HeaderOption>
                <HeaderOption>
                    <p>Returns</p>
                    <h3>& Orders</h3>
                </HeaderOption>
                <HeaderOption>
                    <p>Your </p>
                    <h3>Prime</h3>
                </HeaderOption>

                <Basket>
                    <ShoppingBasketIcon />
                    <span>0</span>

                </Basket>
            </HeaderNav> 



        </HeaderContainer>

    )
}

export default Header

const HeaderContainer = styled.div`
    display: flex;
    height: 60px;
    align-items: center;
    background-color: #131921;
    position: sticky;
    top: 0;
    z-index: 100;

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
`


const Basket = styled.div`
    color: white;
    display: flex;
    align-items: center;

    span {
        margin-left: 10px;
        margin-right: 15px;
    }
`