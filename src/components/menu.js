import React from 'react'
import { Link } from 'gatsby';

const Menu = () => (
    <div style={{
        background: '#f4f4f4',
        paddingTop: '10px'
    }}>
        <div style={{
            maxWidth: 960,
            marginLeft: 'auto',
            marginRight: 'auto'
        }}>
            <ul style={{
                listStyle: 'none',
                display: 'flex',
                justifyContent: 'space-evenly'
            }}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
        </div>
    </div>
)

export default Menu;