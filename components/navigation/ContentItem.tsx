import Link from 'next/link';

const ContentItem = ({ title, src, href }) => {
    return (
        <Link href={href} prefetch={false}>
            <div className="w-20 text-sm m-2">
                <div className="w-20 h-20 bg-contain bg-center" style={{
                    backgroundImage: `url('${src}')`
                }}></div>
                <div>{title}</div>
            </div>
        </Link>

    )
}

export default ContentItem;