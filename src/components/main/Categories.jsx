import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid,
    Cell,
    LineChart, Line,
    ResponsiveContainer
} from 'recharts';

const Categories = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    // Dữ liệu bảng sản phẩm
    const additionalProducts = [
        { sku: '#HSD890', name: 'Sản phẩm H', price: 130000, status: 'Đang bán', month: 'T1' },
        { sku: '#ISD901', name: 'Sản phẩm I', price: 250000, status: 'Ngừng', month: 'T1' },
        { sku: '#JSD012', name: 'Sản phẩm J', price: 170000, status: 'Đang bán', month: 'T2' },
        { sku: '#KSD123', name: 'Sản phẩm K', price: 90000, status: 'Sắp hết hàng', month: 'T2' },
        { sku: '#LSD234', name: 'Sản phẩm L', price: 330000, status: 'Đang bán', month: 'T3' },
        { sku: '#MSD345', name: 'Sản phẩm M', price: 45000, status: 'Đang bán', month: 'T3' },
        { sku: '#NSD456', name: 'Sản phẩm N', price: 190000, status: 'Đang bán', month: 'T4' },
        { sku: '#OSD567', name: 'Sản phẩm O', price: 210000, status: 'Đang bán', month: 'T4' },
        { sku: '#PSD678', name: 'Sản phẩm P', price: 300000, status: 'Ngừng', month: 'T1' },
        { sku: '#QSD789', name: 'Sản phẩm Q', price: 120000, status: 'Đang bán', month: 'T1' },
        { sku: '#RSD890', name: 'Sản phẩm R', price: 80000, status: 'Đang bán', month: 'T2' },
        { sku: '#SSD901', name: 'Sản phẩm S', price: 260000, status: 'Sắp hết hàng', month: 'T2' },
        { sku: '#TSD012', name: 'Sản phẩm T', price: 140000, status: 'Đang bán', month: 'T3' },
        { sku: '#USD123', name: 'Sản phẩm U', price: 220000, status: 'Đang bán', month: 'T3' },
        { sku: '#VSD234', name: 'Sản phẩm V', price: 50000, status: 'Ngừng', month: 'T4' },
        { sku: '#WSD345', name: 'Sản phẩm W', price: 190000, status: 'Đang bán', month: 'T4' },
        { sku: '#XSD456', name: 'Sản phẩm X', price: 340000, status: 'Sắp hết hàng', month: 'T1' },
        { sku: '#YSD567', name: 'Sản phẩm Y', price: 75000, status: 'Đang bán', month: 'T1' },
        { sku: '#ZSD678', name: 'Sản phẩm Z', price: 280000, status: 'Đang bán', month: 'T2' },
        { sku: '#ASD789', name: 'Sản phẩm AA', price: 180000, status: 'Ngừng', month: 'T2' },
        { sku: '#BSD890', name: 'Sản phẩm AB', price: 300000, status: 'Đang bán', month: 'T3' },
        { sku: '#CSD901', name: 'Sản phẩm AC', price: 40000, status: 'Đang bán', month: 'T3' },
        { sku: '#DSD012', name: 'Sản phẩm AD', price: 210000, status: 'Đang bán', month: 'T4' },
        { sku: '#ESD123', name: 'Sản phẩm AE', price: 300000, status: 'Ngừng', month: 'T4' },
        { sku: '#FSD234', name: 'Sản phẩm AF', price: 160000, status: 'Đang bán', month: 'T1' },
        { sku: '#GSD345', name: 'Sản phẩm AG', price: 220000, status: 'Sắp hết hàng', month: 'T1' },
        { sku: '#HSD456', name: 'Sản phẩm AH', price: 125000, status: 'Đang bán', month: 'T2' },
        { sku: '#ISD567', name: 'Sản phẩm AI', price: 190000, status: 'Đang bán', month: 'T2' },
        { sku: '#JSD678', name: 'Sản phẩm AJ', price: 240000, status: 'Ngừng', month: 'T3' },
        { sku: '#KSD789', name: 'Sản phẩm AK', price: 110000, status: 'Đang bán', month: 'T3' },
        { sku: '#LSD890', name: 'Sản phẩm AL', price: 300000, status: 'Đang bán', month: 'T4' },
        { sku: '#MSD901', name: 'Sản phẩm AM', price: 50000, status: 'Sắp hết hàng', month: 'T4' },
        { sku: '#NSD012', name: 'Sản phẩm AN', price: 230000, status: 'Đang bán', month: 'T1' },
        { sku: '#OSD123', name: 'Sản phẩm AO', price: 120000, status: 'Ngừng', month: 'T1' },
        { sku: '#PSD234', name: 'Sản phẩm AP', price: 190000, status: 'Đang bán', month: 'T2' },
        { sku: '#QSD345', name: 'Sản phẩm AQ', price: 260000, status: 'Đang bán', month: 'T2' },
        { sku: '#RSD456', name: 'Sản phẩm AR', price: 350000, status: 'Ngừng', month: 'T3' },
        { sku: '#SSD567', name: 'Sản phẩm AS', price: 90000, status: 'Đang bán', month: 'T3' },
        { sku: '#TSD678', name: 'Sản phẩm AT', price: 200000, status: 'Đang bán', month: 'T4' },
        { sku: '#USD789', name: 'Sản phẩm AU', price: 150000, status: 'Sắp hết hàng', month: 'T4' },
        { sku: '#VSD890', name: 'Sản phẩm AV', price: 170000, status: 'Đang bán', month: 'T1' },
        { sku: '#WSD901', name: 'Sản phẩm AW', price: 240000, status: 'Ngừng', month: 'T1' },
        { sku: '#XSD012', name: 'Sản phẩm AX', price: 130000, status: 'Đang bán', month: 'T2' },
        { sku: '#YSD123', name: 'Sản phẩm AY', price: 220000, status: 'Đang bán', month: 'T2' },
        { sku: '#ZSD234', name: 'Sản phẩm AZ', price: 300000, status: 'Sắp hết hàng', month: 'T3' },
    ];

    const products = [
        { sku: '#ASD123', name: 'Sản phẩm A', price: 100000, status: 'Đang bán', month: 'T1' },
        { sku: '#BSD234', name: 'Sản phẩm B', price: 200000, status: 'Ngừng', month: 'T2' },
        { sku: '#CSD345', name: 'Sản phẩm C', price: 150000, status: 'Đang bán', month: 'T2' },
        { sku: '#DSD456', name: 'Sản phẩm D', price: 300000, status: 'Đang bán', month: 'T3' },
        { sku: '#ESD567', name: 'Sản phẩm E', price: 50000, status: 'Sắp hết hàng', month: 'T3' },
        { sku: '#FSD678', name: 'Sản phẩm F', price: 120000, status: 'Đang bán', month: 'T4' },
        { sku: '#GSD789', name: 'Sản phẩm G', price: 220000, status: 'Đang bán', month: 'T4' },
        ...additionalProducts
    ];

    // Tính dữ liệu cho Bar Chart
    const productStats = [
        { name: 'Tổng sản phẩm', value: products.length },
        { name: 'Đang bán', value: products.filter(p => p.status === 'Đang bán').length },
        { name: 'Sắp hết hàng', value: products.filter(p => p.status === 'Sắp hết hàng').length },
        { name: 'Ngừng', value: products.filter(p => p.status === 'Ngừng').length },
    ];

    // Màu sắc Pie
    const COLORSPIE = ['#3182CE', '#E53E3E', '#D69E2E', '#38B2AC'];
    const COLORSBAR = ['#3182CE', '#38A169', '#E53E3E', '#805AD5'];


    // Tính dữ liệu doanh thu Line Chart
    const monthRevenueMap = {};
    products.forEach(product => {
        if (!monthRevenueMap[product.month]) {
            monthRevenueMap[product.month] = 0;
        }
        monthRevenueMap[product.month] += product.price;
    });

    const revenueData = Object.keys(monthRevenueMap).map(month => ({
        month,
        revenue: monthRevenueMap[month] / 1000, // Chia nhỏ đơn vị (nghìn đồng)
    }));

    const totalPages = Math.ceil(products.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentProducts = products.slice(startIndex, startIndex + itemsPerPage);

    const handlePageChange = (newPage) => {
        if (newPage >= 1 && newPage <= totalPages) {
            setCurrentPage(newPage);
        }
    };

    return (
        <div className="p-6 bg-white rounded shadow">
            <h1 className="text-3xl font-bold mb-6">Chào mừng đến với Trang Danh Mục Sản Phẩm</h1>

            {/* DASHBOARD với nhiều biểu đồ */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {/* Bar Chart */}
                <div className="bg-white p-4 rounded shadow">
                    <h2 className="text-lg font-semibold mb-2">Biểu đồ tổng sản phẩm</h2>
                    <ResponsiveContainer width="100%" height={250}>
                        <BarChart data={productStats}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Bar dataKey="value">
                                {productStats.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORSBAR[index % COLORSBAR.length]} />
                                ))}
                            </Bar>
                        </BarChart>

                    </ResponsiveContainer>
                </div>

                {/* Line Chart */}
                <div className="bg-white p-4 rounded shadow">
                    <h2 className="text-lg font-semibold mb-2">Doanh thu theo tháng</h2>
                    <ResponsiveContainer width="100%" height={250}>
                        <LineChart data={revenueData}>
                            <XAxis dataKey="month" />
                            <YAxis />
                            <CartesianGrid strokeDasharray="3 3" />
                            <Tooltip />
                            <Line type="monotone" dataKey="revenue" stroke="#2F855A" strokeWidth={2} />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>

            {/* Danh mục sản phẩm */}
            <main className="flex-1 p-6 bg-gray-100">
                <h1 className="text-2xl font-bold mb-4">Danh mục sản phẩm</h1>
                <div className="flex mb-4">
                    <div className="w-1/4 bg-white p-4 rounded shadow">
                        <h2 className="font-semibold mb-2">Bộ lọc</h2>
                        <ul>
                            <li className="mb-2 hover:text-blue-500 cursor-pointer">Tất cả</li>
                            <li className="mb-2 hover:text-blue-500 cursor-pointer">Đang bán</li>
                            <li className="mb-2 hover:text-blue-500 cursor-pointer">Ngừng</li>
                            <li className="mb-2 hover:text-blue-500 cursor-pointer">Sắp hết hàng</li>
                        </ul>
                    </div>
                    <div className="flex-1 ml-4 bg-white p-4 rounded shadow">
                        <div className="flex justify-between mb-4">
                            <input
                                type="text"
                                placeholder="Tìm kiếm sản phẩm..."
                                className="border border-gray-300 rounded p-2 flex-grow"
                            />
                            <Link to="/orders" className="ml-2 bg-blue-500 text-white rounded p-2">
                                + Thêm sản phẩm
                            </Link>
                        </div>
                        <table className="min-w-full bg-white border border-gray-300">
                            <thead>
                                <tr>
                                    <th className="border p-2">SKU</th>
                                    <th className="border p-2">Sản phẩm</th>
                                    <th className="border p-2">Đơn giá</th>
                                    <th className="border p-2">Trạng thái</th>
                                    <th className="border p-2">Tháng</th>
                                    <th className="border p-2">Tác vụ</th>
                                </tr>
                            </thead>
                            <tbody>
                                {currentProducts.map((product, index) => (
                                    <tr key={index}>
                                        <td className="border p-2">{product.sku}</td>
                                        <td className="border p-2">{product.name}</td>
                                        <td className="border p-2">{product.price.toLocaleString()} VNĐ</td>
                                        <td className="border p-2">{product.status}</td>
                                        <td className="border p-2">{product.month}</td>
                                        <td className="border p-2 text-blue-500 cursor-pointer">Xem chi tiết</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <div className="mt-4 flex justify-center items-center space-x-2">
                            <button
                                onClick={() => handlePageChange(currentPage - 1)}
                                disabled={currentPage === 1}
                                className="px-3 py-1 border rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
                            >
                                Trước
                            </button>
                            {[...Array(totalPages)].map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => handlePageChange(i + 1)}
                                    className={`px-3 py-1 border rounded ${currentPage === i + 1 ? 'bg-blue-500 text-white' : 'bg-gray-100 hover:bg-gray-300'}`}
                                >
                                    {i + 1}
                                </button>
                            ))}
                            <button
                                onClick={() => handlePageChange(currentPage + 1)}
                                disabled={currentPage === totalPages}
                                className="px-3 py-1 border rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
                            >
                                Tiếp
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Categories;
