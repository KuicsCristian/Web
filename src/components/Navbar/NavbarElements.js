import styled from 'styled-components'
import {GiMoon} from 'react-icons/gi';
import {Link} from 'react-router-dom';
import {Container} from "../../globalStyles";

export const Nav = styled.nav`
    background: #101522;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    position: sticky;
    top: 0;
    z-index: 999;
`;

export const NavbarContainer = styled(Container)`
    display: flex;
    justify-content: space-between;
    height: 80px;
    //"Container" gets properties from globalStyles
    ${Container}
`;

export const NavLogo = styled(Link)`
    color: #fff;
    justify-self:flex-start;
    cursor: pointer;
    text-decoration: none;
    font-size: 2rem;
    display: flex;
    align-items: center;
`;

export const NavIcon = styled(GiMoon)`
    margin-right: 0.5rem;
`;

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 960px){
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`;

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;

    @media screen and (max-width: 960px){
        display: flex;
        flex-direction:column;
        width: 100%;
        height: 90vh;
        position: absolute;
        top: 80px;
        opacity:1;
        transition:all 0.5s ease;
        background: #101522;
        //if clicked value to be showed else not
        left: ${({click}) => (click ? 0 : '-100%')}
    }
`;

export const NavItem = styled.li`
    height: 80px;
    border-bottom: 2px solid transparent;

    &:hover{
        border-bottom: 2px solid #4b59f7;
    }

    @media screen and (max-width: 960px){
        width: 100%;

        &:hover{
            border: none;
        }
    }
`;

export const NavLinks = styled(Link)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0.5rem;
    height: 100%;

    @media screen and (max-width: 960px){
        width: 100%;
        text-align: center;
        padding: 2rem;
        display: table;

        &:hover{
            color: #4b59f7;
            transition: all 0.3s ease;
        }
    }
`;

export const NavBtn = styled.li`
    @media screen and (max-width: 960px){
        display: flex;
        justify-items: center;
        align-items: center;
        width: 100%;
        height: 120px;
    }
`;

export const NavBtnLink = styled(Link)`
    display: flex;
    justify-items: center;
    align-items: center;
    text-decoration: none;
    padding: 8px 16px;
    height: 100%;
    width:100%;
    border: none;
    outline: none;
`;