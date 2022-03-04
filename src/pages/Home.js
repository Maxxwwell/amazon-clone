import React from 'react'
import styled from 'styled-components'
import Header from '../components/Header'
import Product from '../components/Product'

function Home() {
    return (
        <HeaderContainer data-testid="home-page">
            <Header />
            
        <Homme>
            <HomeContainer>
                <Banner>
                    <img src="https://techplugged.com/wp-content/uploads/2021/12/prime-video.jpg" alt="" />
                </Banner>

                <HomeRow>
                    <Product
                        id="01"
                        title="PS5 Controller Charger Station，Dual PS-5 Charging Station with LED Indicator"
                        price={29.99}
                        image="https://m.media-amazon.com/images/I/61XnFJQCXxL._AC_UY218_.jpg"
                        rating={5}
                    />
                    <Product
                        id="03"
                        title="Sceptre Curved 24 75Hz Professional LED Monitor 1080p"
                        price={190.99}
                        image="https://www.sceptre.com/image/cache/data/product_gallery/C248W-1920R/zlide01-1500x1044.jpg"
                        rating={5}
                    />
                </HomeRow>

                <HomeRow>
                    <Product
                        id="02"
                        title="Echo Dot (4th Gen) | Smart speaker with Alexa"
                        price={39.99}
                        image="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6430/6430063cv12d.jpg"
                        rating={4}
                    />
                    <Product
                        id="04"
                        title="Matein Travel Laptop Backpack"
                        price={10.99}
                        image="https://m.media-amazon.com/images/I/81p91cnIFEL._AC_UL320_.jpg"
                        rating={3}
                    />
                    <Product
                        id="05"
                        title="Apple iPhone 12 Pro, 128GB, - Unlocked"
                        price={979.99}
                        image="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/refurb-iphone-12-pro-max-silver-2020?wid=1144&hei=1144&fmt=jpeg&qlt=80&.v=1635202946000"
                        rating={4}
                    />
                </HomeRow>
                <Product title="Sceptre Curved 24 75Hz Professional LED Monitor 1080p"
                        price={190.99}
                        image="https://www.sceptre.com/image/cache/data/product_gallery/C248W-1920R/zlide01-1500x1044.jpg"
                        rating={4}
                    />
                <HomeRow>
                    
                </HomeRow>
            </HomeContainer>
        </Homme>
        </HeaderContainer>
    )
}

export default Home

const HeaderContainer = styled.div`
    width: 100%;
`
const Homme = styled.div`
    display: flex;
     justify-content: center;
     flex-direction: column;
     max-width: 1500px;
     margin-left: auto;
     margin-right: auto;
    overflow-y: scroll;
     overflow-x: hidden;
     &::-webkit-scrollbar {
        display: none;
    }
`

const HomeContainer = styled.div`

`

const Banner = styled.div`
    img {
        width: 100%;
        z-index: -1;
        object-fit: cover;
        min-height: 250px;
        max-height: 600px;
        /* min-width: 100px; */
        margin-bottom: -150px;
        mask-image: linear-gradient(to bottom, rgba(0,0,0,1),
        rgba(0,0,0,0));
    }
`

const HomeRow = styled.div`
    display: flex;
    z-index: 1;
    margin-left: 5px;
    margin-right: 5px;

`