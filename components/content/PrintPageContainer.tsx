import React, { useRef, useState } from 'react';
import NextPreviousButtons from './NextPreviousButtons';
import PrintPage from './PrintPage';
import ScrollProgress from './ScrollProgress';

const PrintPageContainer = ({ children }) => {
    const [currentScrollItem, setCurrentScrollItem] = useState(0);
    const scrollContainer = useRef(null);

    const handleNavigateSlide = (direction: 'next' | 'previous') => {
        const containerWidth = scrollContainer.current.scrollWidth;
        const pageWidth = containerWidth / children.length;
        const newScrollItem = direction === 'next' ? currentScrollItem + 1 : currentScrollItem - 1;
        scrollContainer.current.scrollTo({
            top: 0,
            left: pageWidth * newScrollItem,
            behavior: 'smooth'
        });
    }

    return (
        <div className="PrintPageContainer h-full mx-auto flex flex-grow flex-col relative">
            <ScrollProgress numItems={children.length} currentItem={currentScrollItem + 1} />
            <div className="w-container mx-auto relative min-h-full w-full">
                <div ref={scrollContainer} className="flex w-full h-full overflow-x-scroll snap-x-mandatory">
                    <NextPreviousButtons currentItem={currentScrollItem + 1} totalItems={children.length} onNavigateSlide={handleNavigateSlide} />
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