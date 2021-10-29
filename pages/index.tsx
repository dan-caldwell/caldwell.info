import Head from 'next/head';
import ContentContainer from '../components/contentContainer';

export default function IndexPage() {
    return (
        <>
            <Head>
                <title>Home page</title>
            </Head>
            <ContentContainer className="items-center">
                <h1 className="text-3xl font-bold leading-9 mb-8">
                    Hello — my name is Dan Caldwell. I’m a software engineer. I also like design and user experience. Check out my work on the sidebar.
                </h1>
                <img src="https://s3.amazonaws.com/caldwell.info/images/doodle-1-1000x764-s0.5-q100.jpg" />
            </ContentContainer>
        </>
    );
}