import MdPage from "../../components/content/MdPage";
import MobileContentViewer from "../../components/layouts/mobile/MobileContentViewer";

const page1 = `
The problem: the previous iteration of the RNS website was very slow, hard to navigate, many elements were misaligned, and even the body text font was broken. RNS needed a modern, fast, and easy to use site.
The solution: I rebuilt and redesigned the entire ReligionNews.com frontend. ReligionNews.com gets over 2 million page views a month, so we needed a fast, highly SEO optimized site. The new frontend’s page speed is 2x faster than the previous site and SEO has been improved 15% — helping to double our Alexa ranking. The new site also has many UX improvements.
![rns-mobile-home-page](https://s3.amazonaws.com/caldwell.info/images/religion-news-service-website-redesign/rns-mobile-home-page-405x924-s0.5-q90.jpg)
`;

const page2 = `
![rns-desktop-home-page](https://s3.amazonaws.com/caldwell.info/images/religion-news-service-website-redesign/rns-desktop-home-page-2938x2867-s0.7-q90.jpg)
`;

const page3 = `
![rns-home-page-categories](https://s3.amazonaws.com/caldwell.info/images/religion-news-service-website-redesign/rns-home-page-categories-2938x4144-s0.7-q90.jpg)
`;

const pages = [
    <MdPage content={page1} />,
    <MdPage content={page2} />,
    <MdPage content={page3} />
]

const RNSWebsiteRedesign = () => {
    return (
        <MobileContentViewer
            scroll="horizontal"
            pages={pages}
            title="RNS Website Redesign"
        ></MobileContentViewer>
    );
}

export default RNSWebsiteRedesign;