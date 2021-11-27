import MobileNavbar from '../../navigation/MobileNavbar';

type MobileBrowserProps = {
    title: string,
    children: React.ReactNode | React.ReactNode[],
    originTitle: string,
    originHref: string,
    className?: string,
}

const MobileBrowser: React.FC<MobileBrowserProps> = ({
    title,
    children,
    originTitle,
    originHref,
    className
}) => {
    return (
        <div className={`h-screen w-screen ${className || ''}`}>
            <MobileNavbar title={title} originTitle={originTitle} originHref={originHref} />
            <div className="flex flex-wrap">
                {children}
            </div>
        </div>
    )
}

export default MobileBrowser;