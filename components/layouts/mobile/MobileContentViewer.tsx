import MobileNavbar from "../../navigation/MobileNavbar";
import ScrollProgress from "../../content/ScrollProgress";
import React, { useRef, useState } from "react";
import PrintPage from "../../content/PrintPage";
import ScrollProgressDots from "../../content/ScrollProgressDots";
import NextPreviousButtons from "../../content/NextPreviousButtons";

const arrowRight =
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
        <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
    </svg>;

const arrowLeft =
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
        <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z" />
    </svg>

type MobileContentViewerProps = {
    children?: React.ReactNode[],
    className?: string,
    scroll?: 'horizontal' | 'vertical'
    pages?: any[],
    title: string
}

const MobileContentViewer: React.FC<MobileContentViewerProps> = ({
    children,
    className,
    scroll = 'vertical',
    pages = [],
    title = ''
}) => {
    const [currentScrollItem, setCurrentScrollItem] = useState(0);
    const scrollContainer = useRef(null);

    const scrollClassName =
        scroll === 'vertical' ?
            'flex-col' :
            'snap-x-mandatory';

    const handleNavigateSlide = (direction: 'next' | 'previous') => {
        const containerWidth = scrollContainer.current.scrollWidth;
        const pageWidth = containerWidth / pages.length;
        const newScrollItem = direction === 'next' ? currentScrollItem + 1 : currentScrollItem - 1;
        scrollContainer.current.scrollTo(pageWidth * newScrollItem, 0);
    }

    return (
        <div className={`h-screen-fix mx-auto flex flex-grow flex-col relative ${className || ''}`}>
            <MobileNavbar>
                <span className="hidden xl:flex font-bold text-sm">{title}</span>
                <ScrollProgress numItems={pages.length} currentItem={currentScrollItem + 1} />
            </MobileNavbar>
            <div className="w-container mx-auto relative w-full h-full">
                <NextPreviousButtons onNavigateSlide={handleNavigateSlide} />
                <div
                    ref={scrollContainer}
                    className={`${scrollClassName} flex w-full h-full overflow-scroll`}
                >
                    {pages.length ? pages.map((page, index) => (
                        <PrintPage
                            key={index}
                            className="snap-center snap-stop-always"
                            id={index}
                            onInView={id => setCurrentScrollItem(id)}
                        >{page}</PrintPage>
                    )) : children}
                </div>
            </div>
            <ScrollProgressDots numItems={pages.length} currentItem={currentScrollItem} />
            <div className="h-10 text-sm font-bold flex items-center justify-between bg-white xl:hidden">
                <button className="ml-2" onClick={() => handleNavigateSlide('previous')}>{arrowLeft}</button>
                <span>{title}</span>
                <button className="mr-2" onClick={() => handleNavigateSlide('next')}>{arrowRight}</button>
            </div>
        </div>
    )
}

export default MobileContentViewer;