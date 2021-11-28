import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const MobileNavbar: React.FC = () => {
    const [title, setTitle] = useState<string>('caldwell.info');
    const [path, setPath] = useState<any>(<Link href="/"><a>caldwell.info</a></Link>);

    const getPath = () => {
        const splitPath = location.pathname.split('/').filter(path => path);
        splitPath.unshift('caldwell.info');
        const result = splitPath.map((item, index) => {
            const href = splitPath.slice(1, index + 1).join('/');
            return (
                <Link href={`/${href}`} key={item}>
                    <span className="cursor-pointer"><a>{item}</a>{index === splitPath.length - 1 ? '' : ' / '}</span>
                </Link>
            )
        });
        return result;
    }

    useEffect(() => {
        setPath(getPath());
        setTitle(location.pathname);
    }, []);

    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <div className="p-2 flex justify-between items-center bg-white w-full border-b h-12 box-border flex-shrink-0">
                <div className="text-blue-600 w-12 whitespace-nowrap">{path}</div>
            </div>
        </>
    )
}

export default MobileNavbar;