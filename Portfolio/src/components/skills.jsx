import '../style/components/skills.scss';

const Skills = () => {
    return (
        <section id="skills" className="skills">
            <h2>COMPÉTENCES</h2>
            <div className="skills-box-1">
                <div className="skills-card">
                    <h3>Développement Front-End</h3>
                    <div className="skills-list">
                        <span className="skill-bubble">HTML</span>
                        <span className="skill-bubble">CSS/SCSS</span>
                        <span className="skill-bubble">JavaScript</span>
                        <span className="skill-bubble">React.js</span>
                        <span className="skill-bubble">Vite.js</span>
                    </div>
                </div>
                <div className="skills-card">
                    <h3>Développement Back-End</h3>
                    <div className="skills-list">
                        <span className="skill-bubble">Node.js</span>
                        <span className="skill-bubble">Express</span>
                        <span className="skill-bubble">MongoDB</span>
                        <span className="skill-bubble">API REST</span>
                        <span className="skill-bubble">JWT</span>
                    </div>
                </div>
            </div>
            <div className="skills-box-2">
                <div className="skills-card">
                    <h3>Gestion de version et Collaboration</h3>
                    <div className="skills-list">
                        <span className="skill-bubble">Git</span>
                        <span className="skill-bubble">GitHub</span>
                        <span className="skill-bubble">Notion</span>
                        <span className="skill-bubble">Agile Scrum</span>
                        <span className="skill-bubble">Slack</span>
                        <span className="skill-bubble">Teams</span>
                    </div>
                </div>
                <div className="skills-card">
                    <h3>Optimisation / Performance</h3>
                    <div className="skills-list">
                        <span className="skill-bubble">SEO</span>
                        <span className="skill-bubble">Minification</span>
                        <span className="skill-bubble">Accessibilité</span>
                        <span className="skill-bubble">Lighthouse</span>
                        <span className="skill-bubble">Wave</span>
                    </div>
                </div>
                <div className="skills-card">
                    <h3>Déploiement / Actions</h3>
                    <div className="skills-list">
                        <span className="skill-bubble">Netlify</span>
                        <span className="skill-bubble">Render</span>
                        <span className="skill-bubble">Vercel</span>
                        <span className="skill-bubble">GitHub Pages</span>
                        <span className="skill-bubble">AWS</span>
                        <span className="skill-bubble">GitHub Actions</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
