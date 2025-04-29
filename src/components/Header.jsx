import React from 'react';

const Header = () => {
    return (
        <header className="flex justify-between items-center p-4 bg-white shadow-md">
            <div className="flex items-center">
                <img src="/logo-square.svg" alt="Logo" className="h-10 mr-2" />
                <h1 className="text-xl font-bold">QUẢN LÝ BÁN HÀNG</h1>
            </div>
            <div className="flex items-center">
                <img src="/lolaKieen.png" alt="Lola Kieen" className="h-10 mr-2" />
                <h2 className="text-xl ">LolaKieen</h2>
            </div>
        </header>
    );
};

export default Header;  