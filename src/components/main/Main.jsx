import React from 'react';

const Main = () => {
    return (
        <div className="p-6 bg-white rounded shadow">
            <h1 className="text-3xl font-bold mb-4">Chào mừng đến với Trang Chủ</h1>
            <p className="mb-4">Đây là nơi bạn có thể quản lý các sản phẩm và thông tin cửa hàng của mình.</p>
            <p className="mb-4">Sử dụng thanh bên để điều hướng giữa các trang.</p>
            <div className="mt-4">
                <h2 className="text-2xl font-semibold">Tính năng nổi bật:</h2>
                <ul className="list-disc list-inside mt-2">
                    <li>Quản lý sản phẩm dễ dàng</li>
                    <li>Xem thông tin cửa hàng</li>
                    <li>Quản lý đơn hàng nhanh chóng</li>
                </ul>
            </div>
        </div>
    );
};

export default Main;