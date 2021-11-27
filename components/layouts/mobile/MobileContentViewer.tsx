import MobileNavbar from "../../navigation/MobileNavbar";

type MobileContentViewerProps = {
    title: string,
    children: React.ReactNode | React.ReactNode[],
    originTitle: string,
    originHref: string,
    className?: string,
    scroll?: 'horizontal' | 'vertical'
}

const MobileContentViewer: React.FC<MobileContentViewerProps> = ({
    title,
    children,
    originTitle,
    originHref,
    className,
    scroll = 'vertical'
}) => {

    const scrollClassName = 
        scroll === 'vertical' ?
            'flex-col' : 
            'snap-x-mandatory';

    return (
        <div className={`h-screen w-screen flex flex-grow flex-col ${className || ''}`}>
            <MobileNavbar title={title} originTitle={originTitle} originHref={originHref} />
            <div className={`${scrollClassName} flex w-full h-full overflow-scroll`}>
                {children}
            </div>
        </div>
    )
}

export default MobileContentViewer;