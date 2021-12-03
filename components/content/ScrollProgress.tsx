
type ScrollProgressProps = {
    numItems: number,
    currentItem: number,
}

const ScrollProgress: React.FC<ScrollProgressProps> = ({
    numItems = 0,
    currentItem = 0,
}) => {

    return (
        <div 
            className="ScrollProgress text-xs absolute top-0 right-0 bg-purple-300 h-8 px-2 flex flex-col justify-center z-10 bg-opacity-50"
        >
            <span className="flex">{currentItem} / {numItems}</span>
        </div>
    )
}

export default ScrollProgress;