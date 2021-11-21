type HeaderProps = {
    title: string
}

const Header: React.FC<HeaderProps> = ({ title }) => {
    return (
        <h1 className="text-3xl font-bold leading-9 mb-4 leading-none">{title}</h1>
    )
}

export default Header;