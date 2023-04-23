import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const NavbarContainer = styled.nav `
    width: 100%;
    height: ${(props) => (props.navBarOpener ? "100vh" : "80px")};
    padding: 10px 20px;
    display: flex;
    flex-direction: column;

    @media (min-width: 700px) {
        height: 80px;
    }
`;

export const LeftContainer = styled.div`
    display: flex;
    flex: 20%;
`

export const RightContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    flex: 80%;
    gap: 7%;
    margin: 0 30px 0 0
`

export const NavbarLinkContainer = styled.div`
  display: flex;
`;

export const NavbarkLinkContainer = styled.div`
    display: flex;
`


export const NavbarInnerContainer = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
`

export const NavbarLink = styled(Link) `
    color: #1E174B;
    font-size: 0.9rem;
    font-family: "Fira Sans", sans-serif;
    text-decoration: none;
    position: relative;
    transition: all 1s;

     &::after {
        content: "";
        width: 0;
        height: 3px;
        background: #1E174B;
        position: absolute;
        bottom: -8px;
        left: 0;
        transition: all 0.5s;
        }

    &:hover {
        font-weight: 600;
    }
    
    &:hover::after {
        width: 100%;
    }

    &::active {
        font-weight: 600;
        content: "";
        width: 0;
        height: 3px;
        background: #1E174B;
        position: absolute;
        bottom: -8px;
        left: 0;
        transition: all 0.5s;
        width: 100%;
        }

    @media (max-width:700px) {
        display: none;
    }
`;

export const Logo = styled.img `
    height: auto;
    width: 238px;
`;

export const MobileMenuButton = styled.button `
    width: 70px;
    height: 50px;
    background: none;
    border: none;
    color: #1E174B;
    font-size:  45px;
    cursor: pointer; 

    @media (min-width:700px) {
        display: none;
    }
`;

export const NavbarMobileContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 700px) {
        display: none;
    }
`;

export const NavbarLinkMobile = styled(Link) `
    color: #1E174B;
    font-size: 0.9rem;
    font-family: "Fira Sans", sans-serif;
    text-decoration: none;
`;