import MobileNavbar from "../../navigation/MobileNavbar";
import ScrollProgress from "../../content/ScrollProgress";
import React, { useState } from "react";
import PrintPage from "../../content/PrintPage";

type MobileContentViewerProps = {
    children?: React.ReactNode[],
    className?: string,
    scroll?: 'horizontal' | 'vertical'
    pages?: any[]
}

const MobileContentViewer: React.FC<MobileContentViewerProps> = ({
    children,
    className,
    scroll = 'vertical',
    pages = []
}) => {
    const [currentScrollItem, setCurrentScrollItem] = useState(0);

    const scrollClassName =
        scroll === 'vertical' ?
            'flex-col' :
            'snap-x-mandatory';

    return (
        <div className={`h-screen w-container mx-auto flex flex-grow flex-col ${className || ''}`}>
            <MobileNavbar />
            <div className={`${scrollClassName} flex w-full h-full overflow-scroll`}>
                {pages.length ? pages.map((page, index) => (
                    <PrintPage
                        key={index}
                        className="snap-center snap-stop-always"
                        id={index}
                        onInView={id => setCurrentScrollItem(id)}
                    >{page}</PrintPage>
                )) : children}
            </div>
            <ScrollProgress numItems={pages.length} currentItem={currentScrollItem + 1} />
        </div>
    )
}

export default MobileContentViewer;