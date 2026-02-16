import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './AssetGallery.css';

// --- DATA STRUCTURE ---
// Node Types: 'category', 'folder', 'file'
const ASSET_TREE = {
    id: 'root',
    name: 'HOME',
    type: 'root',
    children: [
        {
            id: 'magazine-design',
            name: 'MAGAZINE DESIGN',
            type: 'folder',
            thumbnail: '/assets/magazine design/cover.png',
            children: [
                { type: 'image', src: '/assets/magazine design/cover.png', label: '' },
                { type: 'image', src: '/assets/magazine design/Document2.png', label: '' },
                { type: 'image', src: '/assets/magazine design/Document3.png', label: '' },
                { type: 'image', src: '/assets/magazine design/mock.png', label: '' },
                { type: 'image', src: '/assets/magazine design/mock2.png', label: '' },
                { type: 'image', src: '/assets/magazine design/mock3.png', label: '' },
                { type: 'image', src: '/assets/magazine design/mock4.png', label: '' },
                { type: 'image', src: '/assets/magazine design/mock5.png', label: '' }
            ]
        },
        {
            id: 'instagram-posts',
            name: 'INSTAGRAM POSTS',
            type: 'folder',
            thumbnail: '/assets/instagram posts/1 (2).png',
            children: [
                { type: 'image', src: '/assets/instagram posts/1 (2).png', label: '' },
                { type: 'image', src: '/assets/instagram posts/2 (2).png', label: '' },
                { type: 'image', src: '/assets/instagram posts/3 (2).png', label: '' },
                { type: 'image', src: '/assets/instagram posts/foodfair.png', label: '' },
                { type: 'image', src: '/assets/instagram posts/musicfest.png', label: '' }
            ]
        },
        {
            id: 'logos',
            name: 'LOGOS',
            type: 'folder',
            thumbnail: '/assets/logos/Gemini_Generated_Image_x9gp4jx9gp4jx9gp.png',
            children: [
                { type: 'image', src: '/assets/logos/Gemini_Generated_Image_x9gp4jx9gp4jx9gp.png', label: '' },
                { type: 'image', src: '/assets/logos/florene.png', label: '' }
            ]
        },
        {
            id: 'mockups',
            name: 'MOCKUPS',
            type: 'folder',
            thumbnail: '/assets/Mockups/1.png',
            children: [
                { type: 'image', src: '/assets/Mockups/1.png', label: '' },
                { type: 'image', src: '/assets/Mockups/2.png', label: '' },
                { type: 'image', src: '/assets/Mockups/3.png', label: '' },
                { type: 'image', src: '/assets/Mockups/5.png', label: '' },
                { type: 'image', src: '/assets/Mockups/6.png', label: '' },
                { type: 'image', src: '/assets/Mockups/7.png', label: '' },
                { type: 'image', src: '/assets/Mockups/8.png', label: '' },
                { type: 'image', src: '/assets/Mockups/10.png', label: '' },
                { type: 'image', src: '/assets/Mockups/13.png', label: '' },
                { type: 'image', src: '/assets/Mockups/14.png', label: '' }
            ]
        },
        {
            id: 'posters-promotional',
            name: 'POSTERS & PROMOTIONAL',
            type: 'folder',
            thumbnail: '/assets/posters%20and%20promostional/idxff2.png',
            children: [
                { type: 'image', src: '/assets/posters%20and%20promostional/idxff2.png', label: '1' },
                { type: 'video', src: '/assets/posters%20and%20promostional/Blue%20Modern%20Minimalist%20Fashion%20Coming%20Soon%20Instagram%20Story.mp4', label: '' },
                { type: 'video', src: '/assets/posters%20and%20promostional/White%20and%20Brown%20Modern%20Coming%20Soon%20Instagram%20Story.mp4', label: '' }
            ]
        },
        {
            id: 'UI',
            name: 'UI Design',
            type: 'folder',
            thumbnail: '/assets/chattergals_thumb.jpg',
            children: [
                { type: 'video', src: '/assets/UI/UII.mp4', label: '' }
            ]
        }
    ]
};

const AssetGallery = () => {
    // Navigation Path Stack (Array of Nodes)
    const [navPath, setNavPath] = useState([ASSET_TREE]);

    // Current View is the last item in the path
    const currentView = navPath[navPath.length - 1];

    const handleNavigate = (node) => {
        if (node.children) {
            setNavPath([...navPath, node]);
        }
    };

    const handleBreadcrumbClick = (index) => {
        // Slice path to go back
        setNavPath(navPath.slice(0, index + 1));
    };

    // Separate children into Sub-Folders and Files
    const subFolders = currentView.children?.filter(c => c.type === 'category' || c.type === 'folder') || [];
    const files = currentView.children?.filter(c => c.type === 'image' || c.type === 'video' || c.type === 'pdf') || [];

    return (
        <div className="gallery-container">
            {/* Breadcrumb Navigation */}
            <nav className="breadcrumb-nav">
                {navPath.map((node, index) => (
                    <React.Fragment key={node.id}>
                        <button
                            className={`crumb-btn ${index === navPath.length - 1 ? 'active' : ''}`}
                            onClick={() => handleBreadcrumbClick(index)}
                        >
                            {node.name}
                        </button>
                        {index < navPath.length - 1 && <span className="separator">/</span>}
                    </React.Fragment>
                ))}
            </nav>

            <div className="gallery-content">
                <AnimatePresence mode="popLayout">
                    <motion.div
                        key={currentView.id}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                        className="gallery-grid-wrapper"
                    >
                        {/* Render Sub-Folders / Categories */}
                        {subFolders.length > 0 && (
                            <div className="folder-section">
                                {subFolders.map(folder => (
                                    <motion.div
                                        key={folder.id}
                                        className="folder-card"
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        onClick={() => handleNavigate(folder)}
                                    >
                                        <div className="folder-thumb">
                                            {folder.thumbnail ? (
                                                <img src={folder.thumbnail} alt={folder.name} />
                                            ) : (
                                                <div className="empty-thumb">DIR_EMPTY</div>
                                            )}
                                            <div className="folder-tag">{folder.children?.length} ITEMS</div>
                                        </div>
                                        <div className="folder-label">
                                            {folder.name}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        )}

                        {/* Render Files */}
                        {files.length > 0 && (
                            <div className={`file-masonry ${currentView.id === 'UI' ? 'ui-section' : ''} ${currentView.id === 'magazine-design' ? 'magazine-section' : ''}`}>
                                {files.map((file, idx) => (
                                    <div key={idx} className={`file-card ${file.type === 'video' ? 'video-card' : ''} ${currentView.id === 'magazine-design' ? 'magazine-card' : ''}`}>
                                        {file.type === 'image' && <img src={file.src} alt={file.label} loading="lazy" />}
                                        {file.type === 'video' && <video src={file.src} controls />}
                                        {file.type === 'pdf' && (
                                            <a href={file.src} target="_blank" className="pdf-link">
                                                PDF_DOC // {file.label}
                                            </a>
                                        )}
                                        {file.label && <div className="file-caption">{file.label}</div>}
                                    </div>
                                ))}
                            </div>
                        )}

                        {subFolders.length === 0 && files.length === 0 && (
                            <div className="empty-state">NO_DATA_FOUND_IN_SECTOR</div>
                        )}

                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
};

export default AssetGallery;
