import marked from 'marked';
import ReactHtmlParser from 'react-html-parser';

const Md = ({ children }) => {

    if (!Array.isArray(children)) {
        return typeof children === 'string' ? ReactHtmlParser(marked(children)) : children
    }

    return children.map(child => (
        typeof child === 'string' ? ReactHtmlParser(marked(child)) : child
    ));
}

export default Md;