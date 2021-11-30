type ContentContainerProps = {
    children: React.ReactNode,
    className?: string
}

const ContentContainer: React.FC<ContentContainerProps> = ({ children, className = '' }) => {

    return (
        <div className={`mx-auto my-8 w-200 h-full ${className}`}>
            {children}
        </div>
    )
}

export default ContentContainer;