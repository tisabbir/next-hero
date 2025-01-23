import Link from 'next/link';
import React from 'react';

const AboutPage = () => {
    return (
        <div>
            About Page

            <Link href={'/about/history'}>History</Link>
            <Link href={'/about/mission'}>Mission</Link>
        </div>
    );
};

export default AboutPage;