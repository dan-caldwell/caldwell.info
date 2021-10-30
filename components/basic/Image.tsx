type ImageProps = {
    src: string,
    alt: string,
    caption?: string,
}

const Image: React.FC<ImageProps> = ({ src, caption, alt }) => {
    return (
        <div>
            <img src={src} loading="lazy" alt={alt} className={!caption ? `mb-4` : ''} />
            {caption && 
                <div className="mb-4 italic">{caption}</div>
            }
        </div>
    )
}

export default Image;