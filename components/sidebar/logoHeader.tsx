import Link from 'next/link';
import React from 'react';
import Logo from '../logo';
import Hamburger from '../basic/hamburger';
import XButton from '../basic/xButton';

type LogoHeaderProps = {
    title: string,
    href?: string,
    onClickHamburger?: () => void,
    hamburgerVisible?: boolean
}

const LogoHeader: React.FC<LogoHeaderProps> = ({ title, href, onClickHamburger, hamburgerVisible }) => {
    return (
        <div className="flex max-w-full items-center border-b border-gray-200 xl:hover:bg-purple-50 cursor-pointer">
            <Link href={href}>
                <a className="text-black p-4 hover:no-underline flex items-center w-full justify-start">
                    <Logo className="max-w-full w-8 h-8 mr-2" fill="black" />
                    <div className="text-2xl font-bold w-full">{title}</div>
                </a>
            </Link>
            <div className="xl:hidden" onClick={onClickHamburger}>
                {hamburgerVisible ? <Hamburger /> : <XButton />}
            </div>
        </div>

    );
}

export default LogoHeader