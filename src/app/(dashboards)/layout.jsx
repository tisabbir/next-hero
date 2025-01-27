import React from 'react';

const DashboardLayout = ({children}) => {
    return (
        <div>
            
            <div>
                {children}
            </div>
            <footer className='bg-orange-300'>Thi is dashboard footer</footer>
        </div>
    );
};

export default DashboardLayout;