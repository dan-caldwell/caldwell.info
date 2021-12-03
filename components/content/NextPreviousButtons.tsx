const arrowRight =
    <svg xmlns="http://www.w3.org/2000/svg" fill="#e2dafe" viewBox="0 0 16 16">
        <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
    </svg>;

const arrowLeft =
    <svg xmlns="http://www.w3.org/2000/svg" fill="#e2dafe" viewBox="0 0 16 16">
        <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z" />
    </svg>

type NextPreviousButtonsProps = {
    onNavigateSlide: (direction: 'next' | 'previous') => void,
    currentItem: number,
    totalItems: number
}

const NextPreviousButtons: React.FC<NextPreviousButtonsProps> = ({ onNavigateSlide, currentItem, totalItems }) => {
    return (
        <>
            {currentItem !== 1 &&
                <button
                    className="-ml-12 absolute top-1/2 w-8 h-8 left-0 bg-black rounded-full"
                    onClick={() => onNavigateSlide('previous')}
                    style={{
                        transform: `translate(0, -50%)`
                    }}
                >{arrowLeft}</button>
            }
            {currentItem !== totalItems &&
                <button
                    className="-mr-12 absolute top-1/2 w-8 h-8 right-0 bg-black rounded-full"
                    onClick={() => onNavigateSlide('next')}
                    style={{
                        transform: `translate(0, -50%)`
                    }}
                >{arrowRight}</button>
            }
        </>
    )
}

export default NextPreviousButtons;