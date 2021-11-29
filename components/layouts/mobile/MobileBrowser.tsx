import MobileNavbar from '../../navigation/MobileNavbar';

type MobileBrowserProps = {
    children: React.ReactNode | React.ReactNode[],
    className?: string,
}

const MobileBrowser: React.FC<MobileBrowserProps> = ({
    children,
    className
}) => {
    return (
        <div className={`h-screen-fix mx-auto flex flex-col ${className || ''}`}>
            <MobileNavbar />
            <div className="flex flex-wrap w-container bg-white mx-auto flex-1">
                {children}
            </div>
        </div>
    )
}

export default MobileBrowser;