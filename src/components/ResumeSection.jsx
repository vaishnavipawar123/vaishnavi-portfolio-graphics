import React from 'react';
import './ResumeSection.css';
import { motion } from 'framer-motion';

const ResumeSection = () => {
    return (
        <div className="resume-poster">
            <motion.div
                className="poster-header"
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
            >
                <h1 className="giant-name">VAISHNAVI<br />PAWAR</h1>
                <div className="role-tag">GRAPHIC DESIGNER // VISUALIST</div>
            </motion.div>

            <div className="poster-grid">
                <motion.div
                    className="grid-section left"
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    <h2>MANIFESTO</h2>
                    <p className="manifesto-text">
                        Design is not just decoration. It is an act of communication.
                        I curate visuals that disrupt, engage, and remain etched in memory.
                        Specializing in high-impact brand identity and social narratives.
                    </p>

                    <a href="/resume.pdf" target="_blank" className="cta-download">
                        GET THE RAW FILE <span className="arrow">↗</span>
                    </a>
                </motion.div>

                <motion.div
                    className="grid-section right"
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                >
                    <div className="stat-block">
                        <h3>EXPERIENCE</h3>
                        <ul className="brutalist-list">
                            <li>
                                <span className="year">2024</span>
                                <span className="place">DC STUDIOS</span>
                                <span className="detail">Intern / Brand Visuals</span>
                            </li>
                            <li>
                                <span className="year">2023</span>
                                <span className="place">FOMMEC</span>
                                <span className="detail">Intern / Design Ops</span>
                            </li>
                            <li>
                                <span className="year">2023</span>
                                <span className="place">RAJRANI FND.</span>
                                <span className="detail">NGO / Social Media</span>
                            </li>
                            <li>
                                <span className="year">2022</span>
                                <span className="place">CHATTERGALS</span>
                                <span className="detail">Intern / Content</span>
                            </li>
                            <li>
                                <span className="year">2022</span>
                                <span className="place">LOVE ACHELOIS</span>
                                <span className="detail">Intern / Aesthetics</span>
                            </li>
                        </ul>
                    </div>

                    <div className="stat-block">
                        <h3>ARSENAL</h3>
                        <p className="skills-ticker">
                            PHOTOSHOP / ILLUSTRATOR / PREMIERE PRO / CANVA / TYPOGRAPHY / BRANDING
                        </p>
                    </div>
                </motion.div>
            </div>

            {/* Decals */}
            <div className="sticker-decal">★</div>
        </div>
    );
};

export default ResumeSection;
