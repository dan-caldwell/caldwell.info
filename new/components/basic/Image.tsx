import { useEffect, useRef, useState, useContext } from 'react';
import XButton from './XButton';
import { PostContext } from '../context/PostContext';

type ImageProps = {
    src: string,
    previewSrc?: string,
    alt: string,
    caption?: string,
    captionPosition?: 'top' | 'bottom',
    captionStyle?: 'regular' | 'italic',
    fullWidth?: boolean,
    width?: number,
    height?: number,
    clickEnlarge?: boolean,
    float?: 'left' | 'right',
    className?: string,
    center?: boolean,
    lazy?: boolean
}

const Image: React.FC<ImageProps> = ({
    src,
    previewSrc,
    caption,
    captionPosition = 'top',
    captionStyle = 'regular',
    alt,
    fullWidth = true,
    width,
    height,
    float,
    center = true,
    className = '',
    clickEnlarge = true,
    lazy = true
}) => {
    const [loadedSrc, setLoadedSrc] = useState<boolean>(false);
    const [imageRatio, setImageRatio] = useState<number>(0);
    const [enlarged, setEnlarged] = useState<boolean>(false);
    const [lazyLoad, setLazyLoad] = useState(lazy);
    const imageRef = useRef(null);
    const { currentScrollItem } = useContext(PostContext);

    if (float) fullWidth = false;

    const imgClassName = [
        !caption ? `mb-4 last:mb-0` : '',
        center ? 'mx-auto' : '',
        loadedSrc ? 'opacity-100' : 'opacity-0',
        fullWidth ? 'w-full' : '',
        clickEnlarge ? 'cursor-zoom-in' : '',
        `transition-opacity duration-200 ease-in-out object-contain top-0`,
    ].join(' ');

    const captionClassName = [
        loadedSrc ? 'visible' : 'invisible',
        center ? 'text-center' : '',
        captionPosition === 'bottom' ? 'mt-2' : '',
        captionStyle === 'italic' ? 'italic text-gray-600' : '',
        'mb-4 last:mb-0'
    ].join(' ');

    useEffect(() => {
        const { width: boxWidth } = imageRef.current.getBoundingClientRect();
        setImageRatio(boxWidth / width);
    }, [width, setImageRatio]);

    useEffect(() => {
        if (imageRef.current && imageRef.current.complete && !loadedSrc) {
            setLoadedSrc(true)
        }
    }, [loadedSrc]);


    // This will remove the lazy load attribute one slide before the Image, so the image has time to load before being displayed
    useEffect(() => {
        if (imageRef.current && lazyLoad) {
            const printPage = imageRef.current?.closest('.PrintPage');
            const printPageId = Number(printPage?.dataset?.id);
            if (!isNaN(printPageId) && printPageId - currentScrollItem === 1) {
                setLazyLoad(false);
            }
        }
    }, [currentScrollItem, lazyLoad]);

    return (
        <>
            {(caption && captionPosition === 'top') &&
                <div className={captionClassName}>{caption}</div>
            }
            <img
                src={previewSrc || src}
                onLoad={() => setLoadedSrc(true)}
                loading={lazyLoad ? 'lazy' : null}
                alt={alt}
                className={imgClassName + ' ' + className}
                ref={imageRef}
                style={{
                    width: width && imageRatio && !loadedSrc ?
                        imageRatio * width + 'px' :
                        null,
                    height: height && imageRatio && !loadedSrc ?
                        imageRatio * height + 'px' :
                        null,
                    float
                }}
                onClick={clickEnlarge ? () => setEnlarged(!enlarged) : null}
            />
            {enlarged &&
                <>
                    <XButton
                        className='fixed z-10 top-0 right-0 text-white w-8 h-8 mt-2 mr-2 cursor-pointer shadow-md rounded-full'
                        style={{
                            backgroundColor: 'rgba(0, 0, 0, 0.25)'
                        }}
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
            {(caption && captionPosition === 'bottom') &&
                <div className={captionClassName}>{caption}</div>
            }
        </>
    )
}

export default Image;