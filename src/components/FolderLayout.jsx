import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './FolderLayout.css'; // Re-using file for simplicity, will update content

const FolderLayout = ({ children, activeTab, onTabChange }) => {
    return (
        <div className="zine-container">
            <header className="zine-header">
                <div className="brand-mark">VP</div>
                <nav className="zine-nav">
                    {['resume', 'portfolio'].map((tab) => (
                        <button
                            key={tab}
                            className={`nav-link ${activeTab === tab ? 'active' : ''}`}
                            onClick={() => onTabChange(tab)}
                        >
                            {tab}
                        </button>
                    ))}
                </nav>
            </header>

            <main className="zine-content">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, scale: 0.98, filter: 'blur(4px)' }}
                        animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                        exit={{ opacity: 0, scale: 1.02, filter: 'blur(4px)' }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        style={{ width: '100%', height: '100%' }}
                    >
                        {children}
                    </motion.div>
                </AnimatePresence>
            </main>

            {/* Decorative Elements */}
            <div className="deco-bar-left"></div>
            <div className="deco-bar-bottom">
                <span>© 2026 All rights reserved</span>
              
                
            </div>
        </div>
    );
};

export default FolderLayout;
