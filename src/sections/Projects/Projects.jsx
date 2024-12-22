import styles from './ProjectsStyles.module.css';
import contactManager from '../../assets/contact-manager.png';
import vendorManagement from '../../assets/vendor-management.png';
import smartEducation from '../../assets/smart-education.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
    return (
        <section id="projects" className={styles.container}>
            <h1 className="sectionTitle">Projects</h1>
            <div className={styles.projectsContainer}>

                <ProjectCard
                    src={contactManager}
                    link="https://github.com/Santosha2001/smart-sontact-manager"
                    h3="Contact Manager"
                    p="Smart Contact Manager App"
                />

                <ProjectCard
                    src={vendorManagement}
                    link="https://github.com/Santosha2001/Projects/tree/main/vmanager"
                    h3="Management"
                    p="Vendor Management App"
                />

                <ProjectCard
                    src={smartEducation}
                    // link="https://github.com/Santosha2001/Spring-Boot-Projects"
                    h3="Education"
                    p="Smart Education App"
                />
            </div>
        </section>
    );
}

export default Projects;