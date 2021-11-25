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

    // Timeline length for each child
    const childLengthRatios = [...Array(children.length)].map((num, index) => index === 0 ? 0.5 : 1);
    const totalTimelineRatio = childLengthRatios.reduce((a, b) => a + b, 0);
    const childMultiples = childLengthRatios.map(ratio => (ratio / totalTimelineRatio) * timelineMax);
    const childScrollCutoffs = childMultiples.map((multiple, index) => childMultiples.slice(0, index).reduce((a, b) => a + b, 0) + multiple);

    const currentChild = childScrollCutoffs.findIndex(item => scrollTop <= item);

    //const childMultiple = timelineMax / children.length;
    //console.log({ childMultiple, childScrollCutoffs });
    //const totalProgress = scrollTop / childMultiple
    //const progress = (totalProgress) - currentChild + 0.5;
    //const progress = (scrollTop / childMultiples[currentChild]) - childLengthRatios[currentChild];
    const previousCutoffValue = currentChild === 0 ? 0 : childScrollCutoffs[currentChild - 1];
    const progressScrollTotal = childScrollCutoffs[currentChild] - previousCutoffValue;
    const progress = (scrollTop - previousCutoffValue) / progressScrollTotal;
    const rotationRatio = 180 * childLengthRatios[currentChild];
    const rotation = (rotationRatio * progress) - (rotationRatio - 90);

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
                        transform: `translate(0, -50%) perspective(100rem) rotateY(${rotation}deg)`
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