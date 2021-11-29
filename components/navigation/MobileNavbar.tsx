import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const homeLink =
    <Link href="/">
        <span className="cursor-pointer">
            <a>caldwell.info</a>
        </span>
    </Link>;

const MobileNavbar: React.FC = ({ children }) => {
    const [title, setTitle] = useState<string>('caldwell.info');
    const [path, setPath] = useState<any>(homeLink);

    const getPath = () => {
        const splitPath = location.pathname.split('/').filter(path => path);
        if (splitPath.length > 1) {
            splitPath.pop();
        }
        splitPath.unshift('caldwell.info');
        const result = splitPath.map((item, index) => {
            const href = splitPath.slice(1, index + 1).join('/');
            return (
                <Link href={`/${href}`} key={item}>
                    <span className="cursor-pointer flex">
                        <a className={`max-w-4xs whitespace-nowrap overflow-hidden overflow-ellipsis`}>{item}</a>
                        <span className="mx-1">{index === splitPath.length - 1 ? '' : ' / '}</span>
                    </span>
                </Link>
            )
        });
        return result;
    }

    useEffect(() => {
        setPath(getPath());
        setTitle(location.pathname);
    }, []);

    const fixWindowHeight = () => {
        const doc = document.documentElement;
        doc.style.setProperty('--app-height', `${window.innerHeight}px`);
    }

    useEffect(() => {
        console.log('fixing window height');
        fixWindowHeight();
        window.addEventListener('resize', fixWindowHeight);
        return () => window.removeEventListener('resize', fixWindowHeight);
    }, []);

    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <div className="bg-white w-full border-b flex box-border h-10 ">
                <div className="w-container mx-auto px-2 xl:px-0 flex justify-between items-center flex-shrink-0 relative">
                    <div className="text-blue-600 w-12 whitespace-nowrap flex">{path}</div>
                    {children}
                </div>
            </div>
        </>
    )
}

export default MobileNavbar;