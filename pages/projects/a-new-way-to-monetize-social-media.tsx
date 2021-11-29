import MdPage from "../../components/content/MdPage";
import MobileContentViewer from "../../components/layouts/mobile/MobileContentViewer";

const page1 = `
Social media platforms in the United States mostly rely on advertising to make up their revenue. Facebook has created an extremely robust advertising platform for targeted advertising. Same with Twitter, Instagram, Snapchat, YouTube, etc. But relying mostly on advertising revenue (Figure 1) can be a risky way to run a digital business because there is basically an infinite amount of advertising space online. I could sell advertising in this post if I wanted to.
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
    <MdPage content={page3} />,
    <MdPage content={page3} />,
    <MdPage content={page3} />,
    <MdPage content={page3} />,
    <MdPage content={page3} />,
    <MdPage content={page3} />,
    <MdPage content={page3} />,
    <MdPage content={page3} />,
    <MdPage content={page3} />,
    <MdPage content={page3} />,
    <MdPage content={page3} />,
    <MdPage content={page3} />,
    <MdPage content={page3} />,
    <MdPage content={page3} />,
    <MdPage content={page3} />,
    <MdPage content={page3} />,
    <MdPage content={page3} />,
    <MdPage content={page3} />,
    <MdPage content={page3} />,
    <MdPage content={page3} />,
]

export default function Project() {
    return (
        <MobileContentViewer
            scroll="horizontal"
            pages={pages}
            title="A New Way to Monetize Social Media"
        ></MobileContentViewer>
    );
}