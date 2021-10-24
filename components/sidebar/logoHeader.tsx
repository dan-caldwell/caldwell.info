import Link from 'next/link';
import React from 'react';
import Logo from '../logo';

type LogoHeaderProps = {
    title: string,
    href?: string
}

const LogoHeader: React.FC<LogoHeaderProps> = ({ title, href }) => {
    return (
        <Link href={href}>
            <a className="text-black hover:no-underline">
                <div className="LogoHeader flex max-w-full items-center p-4">
                    <Logo className="max-w-full w-8 h-8 mr-2" fill="black" />
                    <div className="text-2xl font-bold">{title}</div>
                </div>
            </a>
        </Link>

    );
}

export default LogoHeader