
type ScrollProgressProps = {
    numItems: number,
    currentItem: number,
}

const ScrollProgress: React.FC<ScrollProgressProps> = ({
    numItems = 0,
    currentItem = 0,
}) => {
    return (
        <div className="text-sm">
            <span>{currentItem} / {numItems}</span>
        </div>
    )
}

export default ScrollProgress;