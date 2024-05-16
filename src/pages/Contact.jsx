import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-blue-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Contact Me</h1>
        <p className="text-lg text-gray-700 mb-2">Vincent Durham</p>
        <p className="text-lg text-gray-700 mb-2">Email: <a href="mailto:vdurham2244@gmail.com" className="text-blue-500 underline">vdurham2244@gmail.com</a></p>
        <p className="text-lg text-gray-700">Location: Cincinnati, OH</p>
      </div>
    </div>
  );
}

export default Contact;
