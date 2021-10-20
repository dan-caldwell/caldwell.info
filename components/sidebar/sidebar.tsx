import React from "react";
import Logo from './logo';

const Sidebar: React.FC = () => {
    return (
        <div className="Sidebar fixed w-sidebar bg-white h-full border-r border-gray-200">
            <Logo title="Dan Caldwell" src="/images/logo.svg" />
            Sidebar
        </div>
    )
}

export default Sidebar;