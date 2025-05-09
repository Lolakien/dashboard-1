import React, { useState } from 'react';

const Tool = () => {
    const [form, setForm] = useState({ name: '', height: '', weight: '' });
    const [bmi, setBmi] = useState(null);
    const [imageIndex, setImageIndex] = useState(null);
    const [animationKey, setAnimationKey] = useState(0);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const calculateBMI = () => {
        const height = parseFloat(form.height) / 100;
        const weight = parseFloat(form.weight);
        if (!height || !weight) return;

        const calculatedBMI = (weight / (height * height)).toFixed(1);
        setBmi(calculatedBMI);

        if (calculatedBMI < 18.5) setImageIndex(0); // Suy dinh dưỡng
        else if (calculatedBMI < 25) setImageIndex(1); // Bình thường
        else setImageIndex(2); // Thừa cân
    };

    const resetForm = () => {
        setForm({ name: '', height: '', weight: '' });
        setBmi(null);
        setImageIndex(null);
        setAnimationKey(prev => prev + 1); // Reset animation
    };

    const images = [
        { src: '/img1.png', label: 'Suy dinh dưỡng' },
        { src: '/3d488d69-3fb7-4058-a2fa-b3e9cab1bf31.png', label: 'Bình thường' },
        { src: '/ChatGPT Image 08_44_19 9 thg 5, 2025.png', label: 'Thừa cân' }
    ];

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-900 to-green-600 p-6">
            <div className="flex w-full max-w-6xl bg-gray-950 rounded-xl shadow-lg overflow-hidden">
                {/* Image area */}
                <div key={animationKey} className="w-1/2 relative overflow-hidden hidden md:flex items-center justify-center">
                    {imageIndex === null ? (
                        <div className="absolute top-0 left-0 h-full w-full overflow-hidden">
                            <div className="flex w-[300%] h-full animate-slide">
                                {images.map((img, idx) => (
                                    <img
                                        key={idx}
                                        src={img.src}
                                        alt={`img${idx}`}
                                        className="w-1/3 h-full object-contain"
                                    />
                                ))}
                            </div>
                        </div>
                    ) : (
                        <div className="flex flex-col items-center justify-center w-full h-full">
                            <img src={images[imageIndex].src} alt="Result" className="w-full h-full object-contain mb-4" />
                            {bmi && (
                                <p className="text-white font-semibold text-lg text-center">
                                    {form.name}, BMI của bạn là {bmi} - {images[imageIndex].label}
                                </p>
                            )}
                        </div>
                    )}
                </div>

                {/* Form */}
                <div className="w-full md:w-1/2 text-white px-8 py-10">
                    <h2 className="text-2xl font-bold mb-6 text-center">Tính chỉ số BMI</h2>
                    <div className="space-y-4">
                        <input
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="Tên của bạn"
                            className="w-full p-3 rounded bg-white text-black"
                        />
                        <input
                            name="height"
                            value={form.height}
                            onChange={handleChange}
                            placeholder="Chiều cao (cm)"
                            className="w-full p-3 rounded bg-white text-black"
                        />
                        <input
                            name="weight"
                            value={form.weight}
                            onChange={handleChange}
                            placeholder="Cân nặng (kg)"
                            className="w-full p-3 rounded bg-white text-black"
                        />

                        {/* Buttons */}
                        <div className="flex gap-4">
                            <button
                                onClick={resetForm}
                                className="bg-white text-red-500 px-6 py-2 rounded hover:bg-gray-200 w-full font-semibold"
                            >
                                Xóa
                            </button>
                            <button
                                onClick={calculateBMI}
                                className="bg-white text-green-700 px-6 py-2 rounded hover:bg-gray-200 w-full font-semibold"
                            >
                                Tính BMI
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Tailwind CSS animation */}
            <style>{`
                @keyframes slide {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-66.66%); }
                }
                .animate-slide {
                    animation: slide 10s linear infinite;
                }
            `}</style>
        </div>
    );
};

export default Tool;
