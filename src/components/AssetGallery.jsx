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
            id: 'internships',
            name: 'INTERNSHIP WORK',
            type: 'category',
            children: [
                {
                    id: 'dc-studios',
                    name: 'DC STUDIOS',
                    type: 'folder',
                    thumbnail: '/assets/DC studios_intern/root1.png',
                    children: [
                        { type: 'image', src: '/assets/DC studios_intern/root1.png', label: 'ROOT_01' },
                        { type: 'image', src: '/assets/DC studios_intern/root2.png', label: 'ROOT_02' },
                        { type: 'image', src: '/assets/DC studios_intern/root3.png', label: 'ROOT_03' },
                        { type: 'image', src: '/assets/DC studios_intern/root4.png', label: 'ROOT_04' },
                        { type: 'pdf', src: '/assets/DC studios_intern/ROOTX_portfolio.pdf', label: 'FULL_DOSSIER.PDF' }
                    ]
                },
                {
                    id: 'fommec',
                    name: 'FOMMEC',
                    type: 'folder',
                    thumbnail: '/assets/fommec_intern/1 (2).png',
                    children: [
                        { type: 'image', src: '/assets/fommec_intern/1 (2).png' },
                        { type: 'image', src: '/assets/fommec_intern/2 (2).png' },
                        { type: 'image', src: '/assets/fommec_intern/5.png' }
                    ]
                },
                {
                    id: 'rajrani',
                    name: 'RAJRANI FND.',
                    type: 'folder',
                    thumbnail: '/assets/instagram posts/previous intership posts/RAJRANI FOUNDATION_intern/1.png',
                    children: [
                        { type: 'image', src: '/assets/instagram posts/previous intership posts/RAJRANI FOUNDATION_intern/1.png' },
                        { type: 'image', src: '/assets/instagram posts/previous intership posts/RAJRANI FOUNDATION_intern/2.png' },
                        { type: 'image', src: '/assets/instagram posts/previous intership posts/RAJRANI FOUNDATION_intern/3.png' }
                    ]
                },
                {
                    id: 'loveachelois',
                    name: 'LOVE ACHELOIS',
                    type: 'folder',
                    thumbnail: '/assets/instagram posts/previous intership posts/loveachelois_intern/1.png',
                    children: [
                        { type: 'image', src: '/assets/instagram posts/previous intership posts/loveachelois_intern/1.png' },
                        { type: 'image', src: '/assets/instagram posts/previous intership posts/loveachelois_intern/2.png' }
                    ]
                },
                {
                    id: 'chattergals',
                    name: 'CHATTERGALS',
                    type: 'folder',
                    thumbnail: '/assets/chattergals_thumb.jpg', // Custom placeholder
                    children: [
                        {
                            id: 'cg-holidays',
                            name: 'HOLIDAYS',
                            type: 'folder',
                            thumbnail: '/assets/instagram posts/previous intership posts/chattergals_intern/holidays/1.png',
                            children: [
                                { type: 'image', src: '/assets/instagram posts/previous intership posts/chattergals_intern/holidays/1.png' },
                                { type: 'image', src: '/assets/instagram posts/previous intership posts/chattergals_intern/holidays/2.png' },
                                { type: 'image', src: '/assets/instagram posts/previous intership posts/chattergals_intern/holidays/3.png' }
                            ]
                        },
                        {
                            id: 'cg-love',
                            name: 'LOVE YOURSELF',
                            type: 'folder',
                            thumbnail: '/assets/instagram posts/previous intership posts/chattergals_intern/love yourself and let the change happen/1.png',
                            children: [
                                { type: 'image', src: '/assets/instagram posts/previous intership posts/chattergals_intern/love yourself and let the change happen/1.png' },
                                { type: 'image', src: '/assets/instagram posts/previous intership posts/chattergals_intern/love yourself and let the change happen/2.png' }
                            ]
                        },
                        {
                            id: 'cg-worry',
                            name: 'DONT WORRY',
                            type: 'folder',
                            thumbnail: '/assets/instagram posts/previous intership posts/chattergals_intern/● Don_t worry you pretty little mind, people throw rocks at things that shine/1.png',
                            children: [
                                { type: 'image', src: '/assets/instagram posts/previous intership posts/chattergals_intern/● Don_t worry you pretty little mind, people throw rocks at things that shine/1.png' },
                                { type: 'image', src: '/assets/instagram posts/previous intership posts/chattergals_intern/● Don_t worry you pretty little mind, people throw rocks at things that shine/2.png' }
                            ]
                        },
                        { type: 'image', src: '/assets/instagram posts/previous intership posts/chattergals_intern/1.png', label: 'Main Content 1' },
                        { type: 'image', src: '/assets/instagram posts/previous intership posts/chattergals_intern/2.png', label: 'Main Content 2' }
                    ]
                }
            ]
        },
        {
            id: 'social',
            name: 'SOCIAL MEDIA',
            type: 'category',
            children: [
                { name: "INSTAGRAM", id: "insta", type: "folder", thumbnail: "/assets/instagram posts/previous intership posts/loveachelois_intern/1.png", children: [] }
            ]
        },
        {
            id: 'posters',
            name: 'POSTERS & PRINTS',
            type: 'category',
            children: [
                {
                    id: 'poster-col',
                    name: "POSTER COLLECTION",
                    type: "folder",
                    thumbnail: "/assets/posters/Purple Simple This or That Instagram Post Square.png",
                    children: [
                        { type: 'image', src: '/assets/posters/Purple Simple This or That Instagram Post Square.png' }
                    ]
                }
            ]
        },
        {
            id: 'motion',
            name: 'MOTION FX',
            type: 'category',
            children: [
                {
                    id: 'anim-shorts',
                    name: 'SHORT FILMS',
                    type: 'folder',
                    children: [
                        { type: 'video', src: '/assets/short animation_googleclub/eid (2).mp4', label: 'EID_MV' },
                        { type: 'video', src: '/assets/short animation_googleclub/women_s-day.mp4', label: 'WOMENS_DAY_MV' }
                    ]
                },
                {
                    id: 'anim-general',
                    name: 'GENERAL MOTION',
                    type: 'folder',
                    children: [
                        { type: 'video', src: '/assets/animations/graphics.mp4', label: 'GRAPHICS_REEL' },
                        { type: 'video', src: '/assets/animations/motion.mp4', label: 'MOTION_STUDY' }
                    ]
                }
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
                                            <span className="folder-icon">📂</span>
                                            {folder.name}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        )}

                        {/* Render Files */}
                        {files.length > 0 && (
                            <div className="file-masonry">
                                {files.map((file, idx) => (
                                    <div key={idx} className="file-card">
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
