import React from 'react';
import PersonIcon from "@material-ui/icons/Person"
import IconButton from "@material-ui/core/IconButton"
import ForumIcon from "@material-ui/icons/Forum"
import './Header.css'

function Header() {
    return (
        <div className='header'>
            <IconButton>
                <PersonIcon fontSize="large" className="header__icon"/>
            </IconButton>
            <img 
                src='https://pic.clubic.com/v1/images/1698019/raw'
                alt=""
                className='header__logo'
            />
             <IconButton>
                <ForumIcon fontSize="large" className="header__icon"/>
            </IconButton>
        </div>
    )
}

export default Header
