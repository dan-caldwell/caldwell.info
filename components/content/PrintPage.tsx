import React from "react";
import { InView, useInView } from "react-intersection-observer";

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
                <div ref={ref} className={`p-2 bg-white w-container border-half-rem border-gray-200 flex-shrink-0 overflow-y-scroll ${className}`}
                    style={{
                        height: `calc(100vh - 3rem)`,
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