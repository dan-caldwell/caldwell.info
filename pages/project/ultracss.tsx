import MobileContentViewer from "../../components/layouts/mobile/MobileContentViewer";
import PrintPage from "../../components/content/PrintPage";
import marked from 'marked';
import ReactHtmlParser from 'react-html-parser';

const page1 = `
I created UltraCSS as a way to quickly and easily make pixel perfect mockups and graphics using a tool web developers already know: CSS.
![ultra css home](https://s3.amazonaws.com/caldwell.info/images/ultracss/ultra-css-home.jpg)
`;

const page2 = `
Create HTML elements with simple syntax. Style with ease. Use variables, upload images, import Google fonts, save projects, use over 1,600 Material Design & Bootstrap icons, and more.
![ultra css app](https://s3.amazonaws.com/caldwell.info/images/ultracss/ultra-css-app.jpg)
`;

const page3 = `
### Project Details

- Made with React, Sass, and Firebase over the course of 6 months.
- I personally wanted the ability to easily design with CSS, since I found trying to design with Illustrator, Figma, Photoshop, etc. to not be as precise as I wanted. I wanted to just write “padding: 1rem;” and easily have exactly 1rem of padding, rather than fiddle around in visual graphics programs for 15 minutes to get padding to work.
- I removed a lot of the friction when writing the HTML so now you can focus more on the design part and less on the boilerplate part.
- Create social media post templates, resumes, posters, UI mockups, or whatever graphic you can think of with UltraCSS.
- Rich features such as variables allow you to quickly make pixel perfect graphics.
- First release May 15, 2021
- Try it out: [UltraCSS.com](https://ultracss.com)
`;

const UltraCSS = () => {

    const pages = [
        <div>
            {ReactHtmlParser(marked(page1))}
        </div>,
        <div>
            {ReactHtmlParser(marked(page2))}
        </div>,
        <div>
            {ReactHtmlParser(marked(page3))}
        </div>
    ];

    return (
        <MobileContentViewer
            title="UltraCSS"
            originTitle="Projects"
            originHref="/project"
            scroll="horizontal"
        >
            {pages.map((page, index) => (
                <PrintPage
                    key={index}
                    className="snap-center snap-stop-always"
                >{page}</PrintPage>
            ))}
        </MobileContentViewer>
    )
}

export default UltraCSS;