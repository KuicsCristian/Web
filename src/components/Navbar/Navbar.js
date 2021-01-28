import React, {useState, useEffect} from 'react';
import {Nav, NavbarContainer, NavLogo, NavIcon, MobileIcon, NavMenu, NavItem, NavLinks,NavBtn, NavBtnLink} from './NavbarElements';
import {FaBars, FaTimes} from 'react-icons/fa';
import {IconContext} from 'react-icons/lib';
import {Button} from "../../globalStyles";


const Navbar = () => {
    //click initial state = false
    const [click, setClick] = useState(false)
    //button initial state = true
    const [button, setButton] = useState(true)
    
    //if pressed state changes from false to true
    const handleClick = () => setClick(!click)


    const closeMobileMenu = () => setClick(false)
    //if width less than 960 state changes from false to true
    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false);
        }else{
            setButton(true);
        }
    }

    useEffect( () => {
        showButton();
    },[]);
    //when you resize window trigger showbutton
    window.addEventListener('resize', showButton);

    return (
        //Navbar
        //IconContext lets us alter directly the properties of icons.
        <>
        <IconContext.Provider value={{color: '#fff'}}>
        <Nav>
            <NavbarContainer>
                <NavLogo to='/' onClick = {closeMobileMenu}>
                    <NavIcon />
                        Space
                </NavLogo>
                <MobileIcon onClick ={handleClick}>
                    {click ? <FaTimes /> : <FaBars />}
                </MobileIcon>
                <NavMenu onClick = {handleClick} click={click}>
                    <NavItem>
                        <NavLinks to='/'>
                            Home
                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='/products'>
                            Donation
                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='/todo'>
                            To do
                        </NavLinks>
                    </NavItem>
                    
                    <NavBtn>
                        {button ? (
                            <NavBtnLink to='/sign-up'>
                                <Button primary>Sign Up</Button>
                            </NavBtnLink>
                            ):(
                                <NavBtnLink to='/sign-up'>
                                <Button fontBig primary >Sign Up</Button>
                            </NavBtnLink>
                        )}
                    </NavBtn>
                </NavMenu>
            </NavbarContainer>
        </Nav>
        </IconContext.Provider>
        </>
    )
}

export default Navbar;
