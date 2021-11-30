import marked from 'marked';
import ReactHtmlParser from 'react-html-parser';

const Md = ({ children, content }) => {
    return ReactHtmlParser(marked(content || children))
}

export default Md;