import React from 'react';
import './ResumeSection.css';
import { motion } from 'framer-motion';

const ResumeSection = () => {
    return (
        <div className="resume-poster">
            <header className="poster-header">
                <div>
                    <h1 className="giant-name">VAISHNAVI<br />PAWAR</h1>
                    <span className="role-tag">VISUAL DESIGNER & ARTIST</span>
                </div>
                {/* High-Quality Hero Vector */}
                <img src="/assets/hero-illustration.png" alt="Professional Avatar" className="hero-illustration" />
            </header>

            <div className="poster-grid">
                <section className="grid-section" data-index="01">
                    <h2>MANIFESTO</h2>
                    <p className="manifesto-text">
                        I craft digital experiences that blend artistic intuition with strategic design.
                        My work is not just about aesthetics; it's about creating a visual language
                        that speaks louder than words. From editorial layouts to motion graphics,
                        I push boundaries to deliver impact.
                    </p>
                    <a href="/resume.pdf" target="_blank" className="cta-download">
                        DOWNLOAD RESUME_V2.0
                    </a>
                </section>

                <section className="grid-section" data-index="02">
                    <h3>EXPERIENCE</h3>
                    <ul className="brutalist-list">
                        <li>
                            <span className="place">DC STUDIOS</span>
                            <span className="detail">2024 - PRESENT</span>
                        </li>
                        <li>
                            <span className="place">FOMMEC</span>
                            <span className="detail">2023 - 2024</span>
                        </li>
                        <li>
                            <span className="place">RAJRANI FND.</span>
                            <span className="detail">2023</span>
                        </li>
                    </ul>

                    <div style={{ marginTop: '50px' }}>
                        <h3>SKILLS</h3>
                        <div className="skills-ticker">
                            PHOTOSHOP /// ILLUSTRATOR /// PREMIERE PRO /// FIGMA ///
                            AFTER EFFECTS /// BLENDER /// GENERATIVE AI
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default ResumeSection;
