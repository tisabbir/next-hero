import React from 'react';

const DashboardLayout = ({children}) => {
    return (
        <div>
            <nav>This is dashboard nav</nav>
            <div>
                {children}
            </div>
            <footer>Thi is dashboard footer</footer>
        </div>
    );
};

export default DashboardLayout;