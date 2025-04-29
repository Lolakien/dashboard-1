import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    PieChart, Pie, Tooltip, Cell, ResponsiveContainer,
    BarChart, Bar, XAxis, YAxis, CartesianGrid,
} from 'recharts';

// Dữ liệu đơn hàng
const additionalOrders = [
    { id: '#DH009', date: '2025-04-29', customer: 'Sản phẩm I', address: 'Nguyễn Văn I, 123 Đường ABC', status: 'Đã giao', total: 500000 },
    { id: '#DH010', date: '2025-04-30', customer: 'Sản phẩm J', address: 'Trần Thị J, 456 Đường XYZ', status: 'Đang xử lý', total: 600000 },
    { id: '#DH011', date: '2025-05-01', customer: 'Sản phẩm K', address: 'Lê Văn K, 789 Đường DEF', status: 'Đã giao', total: 700000 },
    { id: '#DH012', date: '2025-05-02', customer: 'Sản phẩm L', address: 'Phạm Thị L, 321 Đường GHI', status: 'Đã hủy', total: 400000 },
    { id: '#DH013', date: '2025-05-03', customer: 'Sản phẩm M', address: 'Nguyễn Văn M, 654 Đường JKL', status: 'Đã giao', total: 300000 },
    { id: '#DH014', date: '2025-05-04', customer: 'Sản phẩm N', address: 'Trần Thị N, 987 Đường MNO', status: 'Đang xử lý', total: 800000 },
    { id: '#DH015', date: '2025-05-05', customer: 'Sản phẩm O', address: 'Lê Văn O, 123 Đường PQR', status: 'Đã giao', total: 950000 },
    { id: '#DH016', date: '2025-05-06', customer: 'Sản phẩm P', address: 'Hoàng Thị P, 456 Đường STU', status: 'Đã giao', total: 450000 },
    { id: '#DH017', date: '2025-05-07', customer: 'Sản phẩm Q', address: 'Nguyễn Văn Q, 789 Đường VWX', status: 'Đang xử lý', total: 550000 },
    { id: '#DH018', date: '2025-05-08', customer: 'Sản phẩm R', address: 'Trần Thị R, 321 Đường YZA', status: 'Đã giao', total: 650000 },
    { id: '#DH019', date: '2025-05-09', customer: 'Sản phẩm S', address: 'Lê Văn S, 654 Đường BCD', status: 'Đã hủy', total: 310000 },
    { id: '#DH020', date: '2025-05-10', customer: 'Sản phẩm T', address: 'Phạm Thị T, 987 Đường EFG', status: 'Đã giao', total: 1200000 },
    { id: '#DH021', date: '2025-05-11', customer: 'Sản phẩm U', address: 'Nguyễn Văn U, 123 Đường HIJ', status: 'Đang xử lý', total: 720000 },
    { id: '#DH022', date: '2025-05-12', customer: 'Sản phẩm V', address: 'Trần Thị V, 456 Đường KLM', status: 'Đã giao', total: 850000 },
    { id: '#DH023', date: '2025-05-13', customer: 'Sản phẩm W', address: 'Lê Văn W, 789 Đường NOP', status: 'Đã giao', total: 950000 },
    { id: '#DH024', date: '2025-05-14', customer: 'Sản phẩm X', address: 'Hoàng Thị X, 321 Đường QRS', status: 'Đang xử lý', total: 880000 },
    { id: '#DH025', date: '2025-05-15', customer: 'Sản phẩm Y', address: 'Nguyễn Văn Y, 654 Đường TUV', status: 'Đã giao', total: 660000 },
    { id: '#DH026', date: '2025-05-16', customer: 'Sản phẩm Z', address: 'Trần Văn Z, 987 Đường WXY', status: 'Đã hủy', total: 400000 },
    { id: '#DH027', date: '2025-05-17', customer: 'Sản phẩm AA', address: 'Lê Thị AA, 123 Đường YZA', status: 'Đã giao', total: 500000 },
    { id: '#DH028', date: '2025-05-18', customer: 'Sản phẩm AB', address: 'Phạm Văn AB, 456 Đường BCD', status: 'Đang xử lý', total: 900000 },
    { id: '#DH029', date: '2025-05-19', customer: 'Sản phẩm AC', address: 'Nguyễn Văn AC, 789 Đường EFG', status: 'Đã giao', total: 600000 },
    { id: '#DH030', date: '2025-05-20', customer: 'Sản phẩm AD', address: 'Trần Thị AD, 321 Đường HIJ', status: 'Đã giao', total: 700000 },
    { id: '#DH031', date: '2025-05-21', customer: 'Sản phẩm AE', address: 'Lê Văn AE, 654 Đường KLM', status: 'Đang xử lý', total: 450000 },
    { id: '#DH032', date: '2025-05-22', customer: 'Sản phẩm AF', address: 'Hoàng Thị AF, 987 Đường NOP', status: 'Đã giao', total: 550000 },
    { id: '#DH033', date: '2025-05-23', customer: 'Sản phẩm AG', address: 'Nguyễn Văn AG, 123 Đường QRS', status: 'Đã hủy', total: 350000 },
    { id: '#DH034', date: '2025-05-24', customer: 'Sản phẩm AH', address: 'Trần Văn AH, 456 Đường TUV', status: 'Đã giao', total: 1200000 },
    { id: '#DH035', date: '2025-05-25', customer: 'Sản phẩm AI', address: 'Lê Thị AI, 789 Đường WXY', status: 'Đang xử lý', total: 750000 },
    { id: '#DH036', date: '2025-05-26', customer: 'Sản phẩm AJ', address: 'Phạm Văn AJ, 321 Đường YZA', status: 'Đã giao', total: 900000 },
    { id: '#DH037', date: '2025-05-27', customer: 'Sản phẩm AK', address: 'Nguyễn Văn AK, 654 Đường BCD', status: 'Đã giao', total: 800000 },
    { id: '#DH038', date: '2025-05-28', customer: 'Sản phẩm AL', address: 'Trần Thị AL, 987 Đường EFG', status: 'Đang xử lý', total: 670000 },
    { id: '#DH039', date: '2025-05-29', customer: 'Sản phẩm AM', address: 'Lê Văn AM, 123 Đường HIJ', status: 'Đã giao', total: 500000 },
    { id: '#DH040', date: '2025-05-30', customer: 'Sản phẩm AN', address: 'Hoàng Thị AN, 456 Đường KLM', status: 'Đã hủy', total: 420000 },
    { id: '#DH041', date: '2025-05-31', customer: 'Sản phẩm AO', address: 'Nguyễn Văn AO, 789 Đường NOP', status: 'Đã giao', total: 1100000 },
    { id: '#DH042', date: '2025-06-01', customer: 'Sản phẩm AP', address: 'Trần Văn AP, 321 Đường QRS', status: 'Đang xử lý', total: 800000 },
    { id: '#DH043', date: '2025-06-02', customer: 'Sản phẩm AQ', address: 'Lê Thị AQ, 654 Đường TUV', status: 'Đã giao', total: 600000 },
    { id: '#DH044', date: '2025-06-03', customer: 'Sản phẩm AR', address: 'Phạm Văn AR, 987 Đường WXY', status: 'Đã giao', total: 450000 },
    { id: '#DH045', date: '2025-06-04', customer: 'Sản phẩm AS', address: 'Nguyễn Văn AS, 123 Đường ABC', status: 'Đang xử lý', total: 700000 },
    { id: '#DH046', date: '2025-06-05', customer: 'Sản phẩm AT', address: 'Trần Thị AT, 456 Đường XYZ', status: 'Đã giao', total: 900000 },
    { id: '#DH047', date: '2025-06-06', customer: 'Sản phẩm AU', address: 'Lê Văn AU, 789 Đường DEF', status: 'Đã hủy', total: 330000 },
    { id: '#DH048', date: '2025-06-07', customer: 'Sản phẩm AV', address: 'Hoàng Thị AV, 321 Đường GHI', status: 'Đã giao', total: 880000 },
    { id: '#DH049', date: '2025-06-08', customer: 'Sản phẩm AW', address: 'Nguyễn Văn AW, 654 Đường JKL', status: 'Đang xử lý', total: 720000 },
    { id: '#DH050', date: '2025-06-09', customer: 'Sản phẩm AX', address: 'Trần Văn AX, 987 Đường MNO', status: 'Đã giao', total: 910000 },
    { id: '#DH051', date: '2025-06-10', customer: 'Sản phẩm AY', address: 'Lê Thị AY, 123 Đường PQR', status: 'Đã giao', total: 610000 },
    { id: '#DH052', date: '2025-06-11', customer: 'Sản phẩm AZ', address: 'Phạm Văn AZ, 456 Đường STU', status: 'Đang xử lý', total: 560000 },
    { id: '#DH053', date: '2025-06-12', customer: 'Sản phẩm BA', address: 'Nguyễn Văn BA, 789 Đường VWX', status: 'Đã giao', total: 770000 },
    { id: '#DH054', date: '2025-06-13', customer: 'Sản phẩm BB', address: 'Trần Thị BB, 321 Đường YZA', status: 'Đã hủy', total: 340000 },
    { id: '#DH055', date: '2025-06-14', customer: 'Sản phẩm BC', address: 'Lê Văn BC, 654 Đường BCD', status: 'Đã giao', total: 680000 },
    { id: '#DH056', date: '2025-06-15', customer: 'Sản phẩm BD', address: 'Hoàng Thị BD, 987 Đường EFG', status: 'Đang xử lý', total: 720000 },
    { id: '#DH057', date: '2025-06-16', customer: 'Sản phẩm BE', address: 'Nguyễn Văn BE, 123 Đường HIJ', status: 'Đã giao', total: 590000 },
    { id: '#DH058', date: '2025-06-17', customer: 'Sản phẩm BF', address: 'Trần Văn BF, 456 Đường KLM', status: 'Đã giao', total: 850000 },
    { id: '#DH059', date: '2025-06-18', customer: 'Sản phẩm BG', address: 'Lê Thị BG, 789 Đường NOP', status: 'Đang xử lý', total: 450000 },
    { id: '#DH060', date: '2025-06-19', customer: 'Sản phẩm BH', address: 'Phạm Văn BH, 321 Đường QRS', status: 'Đã giao', total: 900000 },
    { id: '#DH061', date: '2025-06-20', customer: 'Sản phẩm BI', address: 'Nguyễn Văn BI, 654 Đường TUV', status: 'Đã hủy', total: 320000 },
    { id: '#DH062', date: '2025-06-21', customer: 'Sản phẩm BJ', address: 'Trần Thị BJ, 987 Đường WXY', status: 'Đã giao', total: 800000 },
    { id: '#DH063', date: '2025-06-22', customer: 'Sản phẩm BK', address: 'Lê Văn BK, 123 Đường ABC', status: 'Đang xử lý', total: 600000 },
    { id: '#DH064', date: '2025-06-23', customer: 'Sản phẩm BL', address: 'Hoàng Thị BL, 456 Đường XYZ', status: 'Đã giao', total: 750000 },
    { id: '#DH065', date: '2025-06-24', customer: 'Sản phẩm BM', address: 'Nguyễn Văn BM, 789 Đường DEF', status: 'Đã hủy', total: 370000 },
    { id: '#DH066', date: '2025-06-25', customer: 'Sản phẩm BN', address: 'Trần Văn BN, 321 Đường GHI', status: 'Đã giao', total: 920000 },
    { id: '#DH067', date: '2025-06-26', customer: 'Sản phẩm BO', address: 'Lê Thị BO, 654 Đường JKL', status: 'Đang xử lý', total: 680000 },
    { id: '#DH068', date: '2025-06-27', customer: 'Sản phẩm BP', address: 'Phạm Văn BP, 987 Đường MNO', status: 'Đã giao', total: 540000 },
    { id: '#DH069', date: '2025-06-28', customer: 'Sản phẩm BQ', address: 'Nguyễn Văn BQ, 123 Đường PQR', status: 'Đã giao', total: 770000 },
    { id: '#DH070', date: '2025-06-29', customer: 'Sản phẩm BR', address: 'Trần Thị BR, 456 Đường STU', status: 'Đang xử lý', total: 620000 },
    { id: '#DH071', date: '2025-06-30', customer: 'Sản phẩm BS', address: 'Lê Văn BS, 789 Đường VWX', status: 'Đã giao', total: 700000 },
    { id: '#DH072', date: '2025-07-01', customer: 'Sản phẩm BT', address: 'Hoàng Thị BT, 321 Đường YZA', status: 'Đã hủy', total: 410000 },
    { id: '#DH073', date: '2025-07-02', customer: 'Sản phẩm BU', address: 'Nguyễn Văn BU, 654 Đường BCD', status: 'Đã giao', total: 1200000 },
    { id: '#DH074', date: '2025-07-03', customer: 'Sản phẩm BV', address: 'Trần Văn BV, 987 Đường EFG', status: 'Đang xử lý', total: 790000 },
    { id: '#DH075', date: '2025-07-04', customer: 'Sản phẩm BW', address: 'Lê Thị BW, 123 Đường HIJ', status: 'Đã giao', total: 880000 },
    { id: '#DH076', date: '2025-07-05', customer: 'Sản phẩm BX', address: 'Phạm Văn BX, 456 Đường KLM', status: 'Đã giao', total: 600000 },
    { id: '#DH077', date: '2025-07-06', customer: 'Sản phẩm BY', address: 'Nguyễn Văn BY, 789 Đường NOP', status: 'Đang xử lý', total: 550000 },
    { id: '#DH078', date: '2025-07-07', customer: 'Sản phẩm BZ', address: 'Trần Thị BZ, 321 Đường QRS', status: 'Đã giao', total: 720000 },
    { id: '#DH079', date: '2025-07-08', customer: 'Sản phẩm CA', address: 'Lê Văn CA, 654 Đường TUV', status: 'Đã hủy', total: 390000 },
    { id: '#DH080', date: '2025-07-09', customer: 'Sản phẩm CB', address: 'Hoàng Thị CB, 987 Đường WXY', status: 'Đã giao', total: 950000 },
    { id: '#DH081', date: '2025-07-10', customer: 'Sản phẩm CC', address: 'Nguyễn Văn CC, 123 Đường ABC', status: 'Đang xử lý', total: 830000 },
    { id: '#DH082', date: '2025-07-11', customer: 'Sản phẩm CD', address: 'Trần Văn CD, 456 Đường XYZ', status: 'Đã giao', total: 560000 },
    { id: '#DH083', date: '2025-07-12', customer: 'Sản phẩm CE', address: 'Lê Thị CE, 789 Đường DEF', status: 'Đang xử lý', total: 720000 },
    { id: '#DH084', date: '2025-07-13', customer: 'Sản phẩm CF', address: 'Phạm Văn CF, 321 Đường GHI', status: 'Đã giao', total: 640000 },
    { id: '#DH085', date: '2025-07-14', customer: 'Sản phẩm CG', address: 'Nguyễn Văn CG, 654 Đường JKL', status: 'Đã giao', total: 750000 },
    { id: '#DH086', date: '2025-07-15', customer: 'Sản phẩm CH', address: 'Trần Thị CH, 987 Đường MNO', status: 'Đang xử lý', total: 830000 },
    { id: '#DH087', date: '2025-07-16', customer: 'Sản phẩm CI', address: 'Lê Văn CI, 123 Đường PQR', status: 'Đã hủy', total: 420000 },
    { id: '#DH088', date: '2025-07-17', customer: 'Sản phẩm CJ', address: 'Hoàng Thị CJ, 456 Đường STU', status: 'Đã giao', total: 910000 },
    { id: '#DH089', date: '2025-07-18', customer: 'Sản phẩm CK', address: 'Nguyễn Văn CK, 789 Đường VWX', status: 'Đang xử lý', total: 530000 },
    { id: '#DH090', date: '2025-07-19', customer: 'Sản phẩm CL', address: 'Trần Văn CL, 321 Đường YZA', status: 'Đã giao', total: 670000 },
    { id: '#DH091', date: '2025-07-20', customer: 'Sản phẩm CM', address: 'Lê Thị CM, 456 Đường BCD', status: 'Đã giao', total: 480000 },
    { id: '#DH092', date: '2025-07-21', customer: 'Sản phẩm CN', address: 'Phạm Văn CN, 987 Đường EFG', status: 'Đang xử lý', total: 760000 },
    { id: '#DH093', date: '2025-07-22', customer: 'Sản phẩm CO', address: 'Nguyễn Văn CO, 123 Đường HIJ', status: 'Đã hủy', total: 390000 },
    { id: '#DH094', date: '2025-07-23', customer: 'Sản phẩm CP', address: 'Trần Thị CP, 456 Đường KLM', status: 'Đã giao', total: 820000 },
    { id: '#DH095', date: '2025-07-24', customer: 'Sản phẩm CQ', address: 'Lê Văn CQ, 789 Đường NOP', status: 'Đã giao', total: 590000 },
    { id: '#DH096', date: '2025-07-25', customer: 'Sản phẩm CR', address: 'Hoàng Thị CR, 321 Đường QRS', status: 'Đang xử lý', total: 640000 },
    { id: '#DH097', date: '2025-07-26', customer: 'Sản phẩm CS', address: 'Nguyễn Văn CS, 654 Đường TUV', status: 'Đã giao', total: 720000 },
    { id: '#DH098', date: '2025-07-27', customer: 'Sản phẩm CT', address: 'Trần Văn CT, 987 Đường WXY', status: 'Đã giao', total: 810000 },
    { id: '#DH099', date: '2025-07-28', customer: 'Sản phẩm CU', address: 'Lê Thị CU, 123 Đường ABC', status: 'Đang xử lý', total: 680000 },
    { id: '#DH100', date: '2025-07-29', customer: 'Sản phẩm CV', address: 'Phạm Văn CV, 456 Đường XYZ', status: 'Đã hủy', total: 350000 },
];

const ordersData = [
    { id: '#DH001', date: '2025-04-20', customer: 'Sản phẩm A', address: 'Nguyễn Văn A, 123 Đường ABC', status: 'Đã giao', total: 1200000 },
    { id: '#DH002', date: '2025-04-22', customer: 'Sản phẩm B', address: 'Trần Thị B, 456 Đường XYZ', status: 'Đang xử lý', total: 850000 },
    { id: '#DH003', date: '2025-04-23', customer: 'Sản phẩm C', address: 'Nguyễn Văn A, 789 Đường DEF', status: 'Đã giao', total: 650000 },
    { id: '#DH004', date: '2025-04-25', customer: 'Sản phẩm D', address: 'Phạm Thị D, 321 Đường GHI', status: 'Đã hủy', total: 300000 },
    { id: '#DH005', date: '2025-04-26', customer: 'Sản phẩm E', address: 'Lê Văn C, 654 Đường JKL', status: 'Đã giao', total: 1500000 },
    { id: '#DH006', date: '2025-04-26', customer: 'Sản phẩm F', address: 'Trần Thị B, 987 Đường MNO', status: 'Đã giao', total: 990000 },
    { id: '#DH007', date: '2025-04-27', customer: 'Sản phẩm G', address: 'Nguyễn Văn A, 123 Đường PQR', status: 'Đang xử lý', total: 430000 },
    { id: '#DH008', date: '2025-04-28', customer: 'Sản phẩm H', address: 'Hoàng Văn E, 456 Đường STU', status: 'Đã giao', total: 780000 },
    ...additionalOrders
];

const ITEMS_PER_PAGE = 10;

const COLORS = ['#38A169', '#3182CE', '#E53E3E'];

const Orders = () => {

    const [currentPage, setCurrentPage] = useState(1);

    // Tính tổng số trang
    const totalPages = Math.ceil(ordersData.length / ITEMS_PER_PAGE);

    // Tính chỉ số dữ liệu đang hiển thị
    const startIdx = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIdx = startIdx + ITEMS_PER_PAGE;
    const currentOrders = ordersData.slice(startIdx, endIdx);

    // Tính trạng thái đơn hàng
    const statusCount = ordersData.reduce((acc, order) => {
        acc[order.status] = (acc[order.status] || 0) + 1;
        return acc;
    }, {});

    const orderStatusData = Object.keys(statusCount).map(status => ({
        name: status,
        value: statusCount[status],
    }));

    // Tính top khách hàng thực sự (dựa vào tên người nhận từ trường address)
    const customerOrders = ordersData.reduce((acc, order) => {
        const customerName = order.address.split(',')[0].trim(); // Lấy tên khách hàng từ địa chỉ
        acc[customerName] = (acc[customerName] || 0) + 1;
        return acc;
    }, {});

    const topCustomers = Object.entries(customerOrders)
        .map(([name, orders]) => ({ name, orders }))
        .sort((a, b) => b.orders - a.orders)
        .slice(0, 5);

    // Render nút trang
    const renderPagination = () => (
        <div className="flex justify-center mt-4 space-x-2">
            <button
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
            >
                &laquo;
            </button>
            {Array.from({ length: totalPages }, (_, index) => (
                <button
                    key={index + 1}
                    onClick={() => setCurrentPage(index + 1)}
                    className={`px-3 py-1 rounded ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                >
                    {index + 1}
                </button>
            ))}
            <button
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
            >
                &raquo;
            </button>
        </div>
    )


    return (
        <div className="p-6 bg-white rounded shadow">
            <h1 className="text-3xl font-bold mb-6">Trang Đơn Hàng</h1>

            {/* DASHBOARD - chia 2 cột như yêu cầu */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">

                {/* Biểu đồ trạng thái đơn hàng */}
                <div className="bg-white p-4 rounded shadow">
                    <h2 className="text-xl font-semibold mb-4">Thống kê trạng thái đơn hàng</h2>
                    <ResponsiveContainer width="100%" height={300}>
                        <PieChart>
                            <Pie
                                data={orderStatusData}
                                dataKey="value"
                                nameKey="name"
                                cx="50%"
                                cy="50%"
                                outerRadius={100}
                                label
                            >
                                {orderStatusData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Tooltip />
                        </PieChart>
                    </ResponsiveContainer>

                    {/* Chú thích màu */}
                    <div className="flex justify-center mt-4 space-x-6">
                        <div className="flex items-center space-x-2">
                            <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                            <span>Đã giao</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                            <span>Đang xử lý</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                            <span>Đã hủy</span>
                        </div>
                    </div>
                </div>

                {/* Top 5 khách hàng */}
                <div className="bg-white p-4 rounded shadow">
                    <h2 className="text-xl font-semibold mb-4">Top 5 khách hàng đặt hàng nhiều nhất</h2>
                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart layout="vertical" data={topCustomers}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis type="number" />
                            <YAxis type="category" dataKey="name" />
                            <Tooltip />
                            <Bar dataKey="orders" fill="#4299E1" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>

            {/* DANH SÁCH ĐƠN HÀNG */}
            <main className="flex-1 p-6 bg-gray-100">
                <h2 className="text-2xl font-bold mb-4">Danh sách đơn hàng</h2>
                <div className="flex justify-between mb-4">
                    <input
                        type="text"
                        placeholder="Tìm kiếm đơn hàng..."
                        className="border border-gray-300 rounded p-2 flex-grow"
                    />
                    <Link to="/orders/new" className="ml-2 bg-blue-500 text-white rounded p-2">
                        + Tạo đơn hàng mới
                    </Link>
                </div>

                <table className="min-w-full bg-white border border-gray-300">
                    <thead>
                        <tr>
                            <th className="border p-2">Mã ĐH</th>
                            <th className="border p-2">Ngày tạo</th>
                            <th className="border p-2">Thông tin đơn hàng</th>
                            <th className="border p-2">Thông tin nhận hàng</th>
                            <th className="border p-2">Trạng thái</th>
                            <th className="border p-2">Tác vụ</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentOrders.map((order, index) => (
                            <tr key={index}>
                                <td className="border p-2">{order.id}</td>
                                <td className="border p-2">{order.date}</td>
                                <td className="border p-2">Sản phẩm: {order.customer}</td>
                                <td className="border p-2">Người nhận: {order.address}</td>
                                <td className="border p-2">{order.status}</td>
                                <td className="border p-2 text-blue-500 cursor-pointer">Xem chi tiết</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {/* Phân trang */}
                {renderPagination()}
            </main>
        </div>
    );
};

export default Orders;
