import React from 'react';
import image from '../../assets/images.jfif'

const ErrorPage = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <img src={image} alt="" className="mb-8 w-full" />
            <h1 className="text-6xl font-bold text-gray-800">404</h1>
            <h2 className="text-2xl font-semibold text-gray-600">Page not found</h2>
            <p className="text-gray-500">The page you are looking for does not exist.</p>
            <a href="/" className="mt-4 px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">
                Go back to homepage
            </a>
        </div>
    );
};

export default ErrorPage;
