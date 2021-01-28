import React from 'react';
import { FaFacebook, FaGit, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from 'react-icons/fa';
import { Button } from '../../globalStyles';
import { FooterContainer, FooterSubscription, FooterSubHeading, FooterSubText, Form, FormInput, FooterLinksContainer, 
    FooterLinksWrapper, FooterLinksItems, FooterLinkTitle, FooterLink, SocialMedia,SocialIconLink,SocialLogo,
    SocialMediaWrap,WebsiteRights,SocialIcons } from './FooterElements';

const Footer = () => {
    return (
        <FooterContainer>
            <FooterSubscription>
                <FooterSubHeading>
                    Join our bla bla bla
                </FooterSubHeading>
                <FooterSubText>You can leave earth at any time
                    
                    <Form>
                        <FormInput name="email" type="email" placeholder="Your Email"/>
                            <Button fontBig>Subscribe</Button>
                        
                    </Form>
                </FooterSubText>
            </FooterSubscription>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinksItems>
                        <FooterLinkTitle>About us</FooterLinkTitle>
                        <FooterLink to='sign-up'>How it works</FooterLink>
                        <FooterLink to='/'>Testimonials</FooterLink>
                        <FooterLink to='/'>Careers</FooterLink>
                        <FooterLink to='/'>Facts</FooterLink>
                        <FooterLink to='/'>Terms of Service</FooterLink>
                    </FooterLinksItems>
                    <FooterLinksItems>
                        <FooterLinkTitle>Contact us</FooterLinkTitle>
                        <FooterLink to='sign-up'>How it works</FooterLink>
                        <FooterLink to='/'>Testimonials</FooterLink>
                        <FooterLink to='/'>Careers</FooterLink>
                        <FooterLink to='/'>Facts</FooterLink>
                        <FooterLink to='/'>Terms of Service</FooterLink>
                    </FooterLinksItems>
                    <FooterLinksItems>
                        <FooterLinkTitle>Videos</FooterLinkTitle>
                        <FooterLink to='sign-up'>How it works</FooterLink>
                        <FooterLink to='/'>Testimonials</FooterLink>
                        <FooterLink to='/'>Careers</FooterLink>
                        <FooterLink to='/'>Facts</FooterLink>
                        <FooterLink to='/'>Terms of Service</FooterLink>
                    </FooterLinksItems>
                    <FooterLinksItems>
                        <FooterLinkTitle>Social Media</FooterLinkTitle>
                        <FooterLink to='sign-up'>How it works</FooterLink>
                        <FooterLink to='/'>Testimonials</FooterLink>
                        <FooterLink to='/'>Careers</FooterLink>
                        <FooterLink to='/'>Facts</FooterLink>
                        <FooterLink to='/'>Terms of Service</FooterLink>
                    </FooterLinksItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to='/'>
                        Space
                    </SocialLogo>
                    <WebsiteRights>
                        Space 2021
                    </WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink href='/' target="_blank" aria-label= "Facebook">
                            <FaFacebook />
                        </SocialIconLink>
                        <SocialIconLink href='/' target="_blank" aria-label= "Instagram">
                            <FaInstagram />
                        </SocialIconLink>
                        <SocialIconLink href='/' target="_blank" aria-label= "Youtube">
                            <FaYoutube />
                        </SocialIconLink>
                        <SocialIconLink href='/' target="_blank" aria-label= "Githug">
                            <FaGit />
                        </SocialIconLink>
                        <SocialIconLink href='/' target="_blank" aria-label= "Twitter">
                            <FaTwitter />
                        </SocialIconLink>
                        <SocialIconLink href='/' target="_blank" aria-label= "Linkedin">
                            <FaLinkedinIn/>
                        </SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterContainer>
    )
};

export default Footer;
