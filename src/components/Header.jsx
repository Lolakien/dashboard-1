import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="flex justify-between items-center p-4 bg-white shadow-md">
            <div className="flex items-center">
                <img src="/logo-square.svg" alt="Logo" className="h-10 mr-2" />
                <Link to="/" className="text-xl font-bold hover:underline">
                    QUẢN LÝ BÁN HÀNG
                </Link>
                <Link to="/tool" className="text-xl font-bold ml-4 hover:underline">
                    Công Cụ
                </Link>
            </div>
            <div className="flex items-center">
                <img src="/lolaKieen.png" alt="Lola Kieen" className="h-10 mr-2" />
                <h2 className="text-xl">LolaKieen</h2>
            </div>
        </header>
    );
};

export default Header;
