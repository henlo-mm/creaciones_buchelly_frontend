import React, { useState } from 'react';
import Sidebar from '../components/layout/Sidebar';
import Toolbar from '../components/layout/Toolbar';
import '../assets/styles/Home.css'; 

const Home = () => {
    const [isSidebarVisible, setSidebarVisible] = useState(true);

    const handleToggleSidebar = () => {
        setSidebarVisible(!isSidebarVisible);
    };

    return (
        <div className="home-container">
            {isSidebarVisible && (
                <div className="sidebar-container">
                    <Sidebar />
                </div>
            )}
            <div className="main-content">
                <Toolbar onToggleSidebar={handleToggleSidebar} />
                <div className="content-area">
                </div>
            </div>
        </div>
    );
};

export default Home;
