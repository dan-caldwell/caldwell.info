type ContentContainerProps = {
    children: React.ReactNode,
    className?: string
}

const ContentContainer: React.FC<ContentContainerProps> = ({ children, className = '' }) => {

    return (
        <div className={`ContentContainer flex flex-col mx-auto py-8 h-full ${className}`}>
            {children}
        </div>
    )
}

export default ContentContainer;