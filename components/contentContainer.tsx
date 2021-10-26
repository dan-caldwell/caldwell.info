type ContentContainerProps = {
    children: React.ReactNode,
    className?: string
}

const ContentContainer: React.FC<ContentContainerProps> = ({ children, className = '' }) => {
    return (
        <div className={`mx-auto flex flex-col mt-8 mb-8 w-200 ${className}`}>
            {children}
        </div>
    )
}

export default ContentContainer;