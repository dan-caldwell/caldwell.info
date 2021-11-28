import Head from 'next/head';
import React from 'react';
import MobileBrowser from '../components/layouts/mobile/MobileBrowser';
import Folder from '../components/navigation/Folder';

export default function IndexPage() {
    return (
        <MobileBrowser>
            <Folder title="Home" href="/" />
            <Folder title="About" href="/" />
            <Folder title="Projects" href="/projects" />
            <Folder title="Blog" href="/" />
        </MobileBrowser>
    );
}