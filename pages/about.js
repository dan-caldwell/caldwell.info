import Link from 'next/link';

const About = () => {
    return (
        <div>
            <strong>This is my awesome about page.</strong>
            <Link href="/">
                Go home
            </Link>
        </div>
    )
}

export default About;