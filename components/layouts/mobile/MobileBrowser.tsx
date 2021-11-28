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
        <div className={`h-screen w-container mx-auto bg-white ${className || ''}`}>
            <MobileNavbar />
            <div className="flex flex-wrap">
                {children}
            </div>
        </div>
    )
}

export default MobileBrowser;