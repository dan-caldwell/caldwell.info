const arrowRight =
    <svg xmlns="http://www.w3.org/2000/svg" fill="black" viewBox="0 0 16 16">
        <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
    </svg>;

const arrowLeft =
    <svg xmlns="http://www.w3.org/2000/svg" fill="black" viewBox="0 0 16 16">
        <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z" />
    </svg>

type NextPreviousButtonsProps = {
    onNavigateSlide: (direction: 'next' | 'previous') => void
}

const NextPreviousButtons: React.FC<NextPreviousButtonsProps> = ({ onNavigateSlide }) => {
    return (
        <>
            <button
                className="-ml-8 absolute top-1/2 w-6 h-6 opacity-40 left-0"
                onClick={() => onNavigateSlide('previous')}
                style={{
                    transform: `translate(0, -50%)`
                }}
            >{arrowLeft}</button>
            <button
                className="-mr-8 absolute top-1/2 w-6 h-6 opacity-40 right-0"
                onClick={() => onNavigateSlide('next')}
                style={{
                    transform: `translate(0, -50%)`
                }}
            >{arrowRight}</button>
        </>
    )
}

export default NextPreviousButtons;