import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HomeIcon, InformationCircleIcon, ArchiveBoxIcon, ShoppingCartIcon } from '@heroicons/react/24/outline';

const Sidebar = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);

    const toggleSidebar = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <aside className={`p-4 transition-all duration-300 ${isCollapsed ? 'w-16' : 'w-64'} flex flex-col`}>
            <ul className="flex-grow">
                <li className="flex items-center justify-between mb-2 text-lg">
                    <Link to="/" className="flex items-center">
                        <HomeIcon className="h-5 w-5" />
                        {!isCollapsed && <span className="ml-2">Trang chủ</span>}
                    </Link>
                    <button onClick={toggleSidebar} className="ml-2">
                        {isCollapsed ? '>>' : '<<'}
                    </button>
                </li>
                <li className="flex items-center mb-2 text-lg">
                    <Link to="/info" className="flex items-center">
                        <InformationCircleIcon className="h-5 w-5" />
                        {!isCollapsed && <span className="ml-2">Thông tin cửa hàng</span>}
                    </Link>
                </li>
                <li className="flex items-center mb-2 text-lg">
                    <Link to="/categories" className="flex items-center">
                        <ArchiveBoxIcon className="h-5 w-5" />
                        {!isCollapsed && <span className="ml-2">Danh mục sản phẩm</span>}
                    </Link>
                </li>
                <li className="flex items-center mb-2 text-lg">
                    <Link to="/orders" className="flex items-center">
                        <ShoppingCartIcon className="h-5 w-5" />
                        {!isCollapsed && <span className="ml-2">Đơn hàng</span>}
                    </Link>
                </li>
            </ul>
        </aside>
    );
};

export default Sidebar;