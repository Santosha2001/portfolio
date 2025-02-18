import React from 'react';
import styles from './NavbarStyles.module.css';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import { useTheme } from '../../common/ThemeContext';

const Navbar = () => {
    const { theme, toggleTheme } = useTheme();
    const themeIcon = theme === 'light' ? sun : moon;

    return (
        <nav className={styles.navbar}>
            <ul className={styles.navbarMenu}>
                <li className={styles.navbarItem}>
                    <a href="#home" className={styles.navbarLink}>Home</a>
                </li>
                <li className={styles.navbarItem}>
                    <a href="#contact" className={styles.navbarLink}>Contacts</a>
                </li>
                <li className={styles.navbarItem}>
                    <a href="#projects" className={styles.navbarLink}>Projects</a>
                </li>
                <li className={styles.navbarItem}>
                    <img
                        className={styles.themeToggle}
                        src={themeIcon}
                        alt="Toggle theme"
                        onClick={toggleTheme}
                    />
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;