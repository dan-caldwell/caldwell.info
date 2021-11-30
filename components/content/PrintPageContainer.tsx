import React, { useRef, useState } from 'react';
import NextPreviousButtons from './NextPreviousButtons';
import PrintPage from './PrintPage';
import ScrollProgress from './ScrollProgress';

const arrowRight =
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
        <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
    </svg>;

const arrowLeft =
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
        <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z" />
    </svg>

const PrintPageContainer = ({ children }) => {
    const [currentScrollItem, setCurrentScrollItem] = useState(0);
    const scrollContainer = useRef(null);

    const handleNavigateSlide = (direction: 'next' | 'previous') => {
        const containerWidth = scrollContainer.current.scrollWidth;
        const pageWidth = containerWidth / children.length;
        const newScrollItem = direction === 'next' ? currentScrollItem + 1 : currentScrollItem - 1;
        scrollContainer.current.scrollTo(pageWidth * newScrollItem, 0);
    }

    return (
        <div className="h-full mx-auto flex flex-grow flex-col relative">
            <ScrollProgress numItems={children.length} currentItem={currentScrollItem + 1} />
            <div className="w-container mx-auto relative h-full w-full">
                <div ref={scrollContainer} className="flex w-full h-full overflow-scroll snap-x-mandatory">
                    <NextPreviousButtons onNavigateSlide={handleNavigateSlide} />
                    {children.map((child, index) => (
                        <PrintPage
                            key={index}
                            className="snap-center snap-stop-always"
                            id={index}
                            onInView={id => setCurrentScrollItem(id)}
                        >
                            {child}
                        </PrintPage>
                    ))}
                </div>
            </div>
        </div>

    )
}

export default PrintPageContainer;