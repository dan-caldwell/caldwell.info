type ContentContainerProps = {
    children: React.ReactNode,
    className?: string
}

const ContentContainer: React.FC<ContentContainerProps> = ({ children, className = '' }) => {

    return (
        <div className={`ContentContainer flex flex-col mx-auto py-8 h-full w-container ${className}`}>
            {children}
        </div>
    )
}

export default ContentContainer;