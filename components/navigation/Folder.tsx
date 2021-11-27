import Link from 'next/link';

const Folder = ({ title, href }) => {
    return (
        <Link href={href} prefetch={false}>
            <a className="text-black w-20 h-20 bg-blue-100 flex items-center justify-center rounded-xl m-2">{title}</a>
        </Link>
    )
}

export default Folder;