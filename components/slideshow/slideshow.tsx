import useSlideshow from "../../hooks/useSlideshow";

const Slideshow = ({ children }) => {
    const { nextSlide } = useSlideshow();

    return (
        <div>
            {children}
            <button className="border-2 hover:underline">Previous slide</button>
            <button className="border-2 hover:underline" onClick={nextSlide}>Next slide</button>
        </div>
    )
}

export default Slideshow;