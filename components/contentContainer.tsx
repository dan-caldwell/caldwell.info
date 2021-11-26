type ContentContainerProps = {
    children: React.ReactNode,
    className?: string
}

const ContentContainer: React.FC<ContentContainerProps> = ({ children, className = '' }) => {
    return (
        <div className={`mx-auto w-200 ${className}`}>
            {children}
        </div>
    )
}

export default ContentContainer;