import { useContext } from 'react';
import { PostContext } from '../context/PostContext';

type SlideProps = {
    children: React.ReactNode,
    id?: number
}

const Slide: React.FC<SlideProps> = ({ children, id }) => {
    const { currentSlide } = useContext(PostContext);

    return (
        <div data-slide id={String(id)} className={`${currentSlide.get !== id ? 'hidden' : ''}`}>
            {children}
        </div>
    )
}

export default Slide;