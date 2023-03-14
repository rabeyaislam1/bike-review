import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';
import './Nav.css';

const Nav = () => {
    return (
        <div>
            <nav>
                <CustomLink className='link' to='/home'> HOME </CustomLink>
                <CustomLink className='link' to='/review'> REVIEW </CustomLink>
                <CustomLink className='link' to='/dashboard'> DASHBOARD </CustomLink>
                <CustomLink className='link' to='/blogs'> BLOGS </CustomLink>
                <CustomLink className='link' to='/about'> ABOUT </CustomLink>
            </nav>
        </div>
    );
};

export default Nav;
