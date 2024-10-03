import React from 'react'; 
import { Menubar } from 'primereact/menubar';
import { Avatar } from 'primereact/avatar';
import { Button } from 'primereact/button';

const Toolbar = ({ onToggleSidebar }) => {
    const start = (
        <div className="flex align-items-center">
            <Button
                icon="pi pi-bars"
                className="p-button-text p-button-plain"
                onClick={onToggleSidebar}
                style={{ fontSize: '1.5rem', marginRight: '1rem' }}
            />
            <span className="text-xl font-bold">Creaciones Buchelly</span>
        </div>
    );

    const end = (
        <div className="flex align-items-center">
           {/*  <span className="p-input-icon-right" style={{ marginRight: 'rem' }}>
                <i className="pi pi-search" />
                <InputText 
                    placeholder="Search" 
                    style={{ 
                        width: '250px', 
                        borderRadius: '20px', 
                        backgroundColor: '#FFFFFF',
                        border: 'none',
                        padding: '0.5rem 1rem'
                    }} 
                />
            </span> */}
            <Avatar icon="pi pi-user" shape="circle" />
        </div>
    );

    return (
        <Menubar
            start={start}
            end={end}
            className="p-shadow-none toolbar" 
            style={{ backgroundColor: '#f4f5f7', border: 'none', margin: 0, padding: '0.5rem 1rem' }}
        />
    );
};

export default Toolbar;
