const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <div className="flex items-center text-gray-400 p-4 text-xs border-t border-gray-200">© {year} Caldwell.info</div>
    )
}

export default Footer;