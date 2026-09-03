import React from 'react';
import Link from 'next/link';

export default function Custom404() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center p-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-blue-400 mb-4">404</h1>
        <h2 className="text-3xl font-bold text-white mb-4">Page Not Found</h2>
        <p className="text-gray-400 mb-8 max-w-md">
          Sorry, the page you're looking for doesn't exist. Let's get you back on track.
        </p>
        <Link href="/">
          <button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300">
            Go Back Home
          </button>
        </Link>
      </div>
    </div>
  );
}
