type SlideProps = {
    children: React.ReactNode,
    id?: number
}

const Slide: React.FC<SlideProps> = ({ children, id }) => {

    return (
        <div data-slide id={String(id)}>
            {children}
        </div>
    )
}

export default Slide;