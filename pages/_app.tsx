import PostProvider from '../components/context/PostContext';
import '../styles/globals.css';

function App({ Component, pageProps }) {

    return (
        <PostProvider>
            <Component {...pageProps} />
        </PostProvider>
    )
}

export default App
