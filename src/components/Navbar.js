import React from 'react';
import {Link, graphql, useStaticQuery} from 'gatsby';
import navbarStyles from './navbar.module.scss'

const Navbar = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)
    return ( 
        <header className={navbarStyles.header}>
            <h1>
                <Link to='/' className={navbarStyles.title}>
                    {data.site.siteMetadata.title}
                </Link>
            </h1>
            <nav>
                <ul className={navbarStyles.navList}>
                    <li>
                        <Link className={navbarStyles.navItem} activeClassName={navbarStyles.activeNavItem} to='/'>Home</Link>
                    </li>
                    <li>
                        <Link className={navbarStyles.navItem} activeClassName={navbarStyles.activeNavItem} to='/blog'>Blog</Link>
                    </li>
                    <li>
                        <Link className={navbarStyles.navItem} activeClassName={navbarStyles.activeNavItem} to='/about'>About</Link>
                    </li>
                    <li>
                        <Link className={navbarStyles.navItem} activeClassName={navbarStyles.activeNavItem} to='/contact'>Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
     );
}
 
export default Navbar;