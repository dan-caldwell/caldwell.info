import React from "react";
import { InView } from "react-intersection-observer";

type PrintPageProps = {
    children: React.ReactNode | React.ReactNode[],
    className?: string,
    style?: {},
    id: number,
    onInView?: (id: number) => void,
    currentItem?: number
}

const PrintPage: React.FC<PrintPageProps> = ({ children, className = '', style = {}, id, onInView = () => { }, currentItem }) => {

    return (
        <InView threshold={0.5} onChange={value => value ? onInView(id) : null}>
            {({ ref }) => (
                <div
                    ref={ref}
                    data-id={id}
                    className={`
                        PrintPage ${currentItem === id ? 'PrintPage-ActiveItem' : ''} 
                        w-print-page p-8 flex-shrink-0 bg-white flex flex-col overflow-y-scroll flex-grow h-full
                        ${className}
                    `}
                    style={{
                        ...style
                    }}
                >
                    <div className="m-auto max-w-container">
                        {children}
                    </div>
                </div>
            )}
        </InView>
    )
}

export default PrintPage;