
type ScrollProgressProps = {
    numItems: number,
    currentItem: number
}

const ScrollProgress: React.FC<ScrollProgressProps> = ({
    numItems = 0,
    currentItem = 0
}) => {
    return (
        <div>{currentItem} / {numItems}</div>
    )
}

export default ScrollProgress;