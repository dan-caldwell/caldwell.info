import MobileBrowser from "../../components/layouts/mobile/MobileBrowser";
import ContentItem from "../../components/navigation/ContentItem";

const Projects = () => {
    return (
        <MobileBrowser originTitle="Home" title="Projects" originHref="/">
            <ContentItem
                title="UltraCSS"
                src="https://s3.amazonaws.com/caldwell.info/images/ultracss/thumbnail.jpg"
                href="/project/ultracss"
            />
            <ContentItem
                title="RNS Website Redesign"
                src="https://s3.amazonaws.com/caldwell.info/images/religion-news-service-website-redesign/thumbnail.jpg"
                href="/project/rns-website-redesign"
            />
            <ContentItem
                title="The Coffee Shop Revolution"
                src="https://s3.amazonaws.com/caldwell.info/images/the-coffee-shop-revolution/thumbnail.jpg"
                href="/project/ultracss"
            />
        </MobileBrowser>
    )
}

export default Projects;