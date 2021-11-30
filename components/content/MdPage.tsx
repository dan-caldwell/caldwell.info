import marked from 'marked';
import ReactHtmlParser from 'react-html-parser';

const MdPage = ({ content }) => {
    return (
        <div>
            {ReactHtmlParser(marked(content))}
        </div>
    )
}

export default MdPage;