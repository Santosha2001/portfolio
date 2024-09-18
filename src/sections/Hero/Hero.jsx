import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/hero-img.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import CV from "../../assets/Santosha_C_CSE_2023_Java.pdf";
import { useTheme } from "../../common/ThemeContext";

function Hero() {

    const { theme, toggleTheme } = useTheme();
    const themeIcon = theme === 'light' ? sun : moon;
    const githubIcon = theme === 'light' ? githubLight : githubDark;
    const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

    return (
        <section id="hero" className={styles.container}>
            <div className={styles.colorModeContainer}>
                <img
                    className={styles.hero}
                    src={heroImg}
                    alt="Profile picture of Santosha C"
                />
                <img className={styles.colorMode} src={themeIcon} alt="" onClick={toggleTheme} />
            </div>

            {/* information starts */}
            <div className={styles.info}>
                <h1>Santosha C</h1>
                <h2>Full Stack Developer</h2>

                {/* social media links */}
                <span>
                    <a href="http://github.com/Santosha2001" target="_blank" rel="noopener noreferrer">
                        <img src={githubIcon} alt="Github Icon" />
                    </a>
                    <a href="https://www.linkedin.com/in/santosha-c-/" target="_blank" rel="noopener noreferrer">
                        <img src={linkedinIcon} alt="Linkedin Icon" />
                    </a>
                </span>
                <p>With a passion for developing modern Spring Boot Application and React Applications.</p>

                <a href={CV} target="_blank" download>
                    <button className="hover" >Resume</button>
                </a>
            </div>
        </section>
    );
}

export default Hero;
