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
                    className={`PrintPage p-2 xl:p-4 flex-shrink-0 w-container bg-white flex flex-col overflow-y-scroll h-full min-h-min-content ${className}`}
                    style={{
                        ...style
                    }}
                >
                    <div className="my-auto">
                        {children}
                    </div>
                </div>
            )}
        </InView>
    )
}

export default PrintPage;