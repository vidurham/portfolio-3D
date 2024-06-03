import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <section className="w-full h-screen flex flex-col items-center justify-center">
            <div className="bg-white/70 p-10 rounded-lg shadow-lg text-center">
                <h1 className="text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-lime-600">
                    Welcome
                </h1>
                <p className="text-lg mb-10 text-gray-700">
                    Discover my work and learn more about my projects.
                </p>
                <div className="flex flex-col space-y-4">
                    <Link 
                        to="/about"
                        className="px-6 py-3 bg-teal-600 text-white rounded-full shadow-md transform transition duration-300 hover:bg-teal-700 hover:-translate-y-1 hover:scale-105"
                    >
                        Learn More About Me
                    </Link>
                    <Link 
                        to="/projects"
                        className="px-6 py-3 bg-lime-600 text-white rounded-full shadow-md transform transition duration-300 hover:bg-lime-700 hover:-translate-y-1 hover:scale-105"
                    >
                        View Past Projects
                    </Link>
                    <Link 
                        to="/gallery"
                        className="px-6 py-3 bg-yellow-400 text-white rounded-full shadow-md transform transition duration-300 hover:bg-yellow-500 hover:-translate-y-1 hover:scale-105"
                    >
                        View 3D Gallery
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Home;
