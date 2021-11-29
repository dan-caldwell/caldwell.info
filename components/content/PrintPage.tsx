import React from "react";
import { InView } from "react-intersection-observer";

type PrintPageProps = {
    children: React.ReactNode | React.ReactNode[],
    className?: string,
    style?: {},
    id: number,
    onInView?: (id: number) => void
}

const PrintPage: React.FC<PrintPageProps> = ({ children, className = '', style = {}, id, onInView = () => { } }) => {

    return (
        <InView threshold={0.5} onChange={value => value ? onInView(id) : null}>
            {({ ref }) => (
                <div 
                    ref={ref} 
                    className={`p-2 xl:p-4 flex flex-col justify-center bg-white w-container h-full border-half-rem border-gray-200 flex-shrink-0 overflow-y-scroll ${className}`}
                    style={{
                        ...style
                    }}
                >
                    {children}
                </div>
            )}
        </InView>
    )
}

export default PrintPage;