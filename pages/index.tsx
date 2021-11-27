import Head from 'next/head';
import React from 'react';
import Folder from '../components/navigation/Folder';

export default function IndexPage() {
    return (
        <>
            <Head>
                <title>Home page</title>
            </Head>
            <div className="mx-2">
                <div className="my-2 flex justify-between items-center">
                    <div className="text-blue-600">Browse</div>
                    <div className="font-bold">Dan Caldwell</div>
                    <div className="text-blue-600">...</div>
                </div>
                <div className="flex flex-wrap">
                    <Folder title="Home" href="/" />
                    <Folder title="About" href="/" />
                    <Folder title="Projects" href="/project" />
                    <Folder title="Blog" href="/" />
                </div>
            </div>
        </>
    );
}