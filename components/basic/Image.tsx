import { useEffect, useRef, useState } from 'react';
import XButton from './xButton';

type ImageProps = {
    src: string,
    previewSrc?: string,
    alt: string,
    caption?: string,
    fullWidth?: boolean,
    width?: number,
    height?: number,
    clickEnlarge?: boolean
}

const Image: React.FC<ImageProps> = ({ src, previewSrc, caption, alt, fullWidth = true, width, height, clickEnlarge = false }) => {
    const [loadedSrc, setLoadedSrc] = useState<boolean>(false);
    const [imageRatio, setImageRatio] = useState<number>(0);
    const [enlarged, setEnlarged] = useState<boolean>(false);
    const imageRef = useRef(null);

    const className = [
        !caption ? `mb-4` : '',
        loadedSrc ? 'opacity-100' : 'opacity-0',
        fullWidth ? 'w-full' : '',
        clickEnlarge ? 'cursor-zoom-in' : '',
        `transition-opacity duration-200 ease-in-out`,
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
                onClick={clickEnlarge ? () => setEnlarged(!enlarged) : null}
            />
            {enlarged &&
                <>
                    <XButton 
                        className='fixed z-10 top-0 right-0 text-white w-8 h-8 mt-2 mr-2 cursor-pointer shadow-md rounded-full' 
                        onClick={() => setEnlarged(false)}
                    />
                    <div
                        className="fixed inset-0 bg-no-repeat w-screen h-screen bg-center bg-contain cursor-zoom-out"
                        onClick={() => setEnlarged(false)}
                        style={{
                            backgroundImage: `url(${src || previewSrc})`,
                            backgroundColor: 'rgba(0, 0, 0, 0.75)'
                        }}
                    ></div>
                </>
            }
            {caption &&
                <div className={captionClassName}>{caption}</div>
            }
        </div>
    )
}

export default Image;