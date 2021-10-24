type ContainerCardProps = {
    children: React.ReactNode,
    className?: string
}

const ContainerCard: React.FC<ContainerCardProps> = ({ children, className = '' }) => {
    return (
        <div className={`mx-auto w-200 p-8 rounded-lg border border-gray-200 bg-white flex flex-col ${className}`}>
            {children}
        </div>
    )
}
export default ContainerCard;