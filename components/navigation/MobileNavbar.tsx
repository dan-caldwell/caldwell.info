import Head from 'next/head';
import Link from 'next/link';

type MobileNavbarProps = {
    title: string,
    originHref: string,
    originTitle: string
}

const MobileNavbar: React.FC<MobileNavbarProps> = ({
    title,
    originHref,
    originTitle
}) => {
    return (
        <>
            <Head>
                <title>Caldwell.info - {title}</title>
            </Head>
            <div className="p-2 flex justify-between items-center bg-white w-full border-b h-12 box-border">
                <Link href={originHref}>
                    <div className="text-blue-600">{originTitle}</div>
                </Link>
                <div className="font-bold">{title}</div>
                <div className="text-blue-600">...</div>
            </div>
        </>
    )
}

export default MobileNavbar;