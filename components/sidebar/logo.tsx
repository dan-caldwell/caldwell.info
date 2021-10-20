import React from 'react';

type LogoProps = {
    title: string,
    src: string
}

const Logo: React.FC<LogoProps> = ({ title, src }) => {
    return (
        <div className="Logo">
            <img src={src} alt="Logo" />
            <div>
                {title}
            </div>
        </div>
    )
}

export default Logo