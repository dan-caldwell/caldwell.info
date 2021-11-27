
type PrintPageProps = {
    children: React.ReactNode | React.ReactNode[],
    className?: string,
    style?: {}
}

const PrintPage: React.FC<PrintPageProps> = ({ children, className = '', style = {} }) => {
    return (
        <div className={`p-2 bg-white border-half-rem border-gray-200 flex-shrink-0 overflow-y-scroll ${className}`}
            style={{
                height: `calc(100vh - 3rem)`,
                width: `100vw`,
                ...style
            }}
        >
            {children}
        </div>
    )
}

export default PrintPage;