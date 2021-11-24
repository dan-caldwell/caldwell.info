import { useEffect, useState } from "react";

type AnimatedScrollProps = {
    children: React.ReactNode[]
}

const timelineMin = 0;
const timelineMax = 6000;

const AnimatedScroll: React.FC<AnimatedScrollProps> = ({ children }) => {
    const [scrollTop, setScrollTop] = useState(0);

    const handleScroll = e => {
        setScrollTop(window.scrollY);
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const childMultiple = timelineMax / children.length;
    const currentChild = Math.floor(scrollTop / childMultiple);
    const progress = (scrollTop / childMultiple) - currentChild + 0.5;

    return (
        <>
            <div
                style={{
                    height: timelineMax + 'px'
                }}
            >
                <div 
                    className="sticky"
                    style={{
                        top: `50vh`,
                        transform: `translate(0, -50%) perspective(100rem) rotateY(${(180 * progress) - 180}deg)`
                    }}
                >
                    {children.map((child, index) => (
                        <div key={index} className={currentChild === index ? "block" : "hidden"}>{child}</div>
                    ))}
                </div>
            </div>

        </>
    )
}

export default AnimatedScroll;