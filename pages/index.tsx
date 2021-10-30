import Head from 'next/head';
import ContentContainer from '../components/contentContainer';
import NextImage from 'next/image';

export default function IndexPage() {
    return (
        <>
            <Head>
                <title>Home page</title>
            </Head>
            <ContentContainer className="items-center">
                <h1 className="text-3xl font-bold leading-9 mb-8">
                    Hello — my name is Dan Caldwell. I’m a software engineer. This is a selection of my personal and professional work.
                </h1>
                <NextImage src="https://s3.amazonaws.com/caldwell.info/images/doodle-1-1000x764-s0.5-q100.jpg" alt="large doodle" />
            </ContentContainer>
        </>
    );
}