import { useEffect, useRef, useState } from 'react';

type ImageProps = {
    src: string,
    previewSrc?: string,
    alt: string,
    caption?: string,
    fullWidth?: boolean,
    width?: number,
    height?: number
}

const Image: React.FC<ImageProps> = ({ src, previewSrc, caption, alt, fullWidth = true, width, height }) => {
    const [loadedSrc, setLoadedSrc] = useState<boolean>(false);
    const [imageRatio, setImageRatio] = useState<number>(0);
    const imageRef = useRef(null);

    const className = [
        !caption ? `mb-4` : '',
        loadedSrc ? 'opacity-100' : 'opacity-0',
        fullWidth ? 'w-full' : '',
        `transition-opacity duration-200 ease-in-out`
    ].join(' ');

    const captionClassName = [
        loadedSrc ? 'visible' : 'invisible',
        'mb-4 italic'
    ].join(' ');

    useEffect(() => {
        const { width: boxWidth } = imageRef.current.getBoundingClientRect();
        setImageRatio(boxWidth / width);
    }, [imageRef.current, setImageRatio]);

    return (
        <div>
            <img 
                src={previewSrc || src} 
                onLoad={() => setLoadedSrc(true)} 
                loading="lazy" 
                alt={alt} 
                className={className} 
                ref={imageRef}
                style={{
                    width: width && imageRatio && !loadedSrc ? imageRatio * width + 'px' : null,
                    height: height && imageRatio && !loadedSrc ? imageRatio * height + 'px' : null
                }}
            />
            {caption && 
                <div className={captionClassName}>{caption}</div>
            }
        </div>
    )
}

export default Image;