import { Link } from "react-router-dom";
import { CTA } from "../components";
import { projects } from "../constants";
import { useState } from "react";

const Projects = () => {
    const [videoUrl, setVideoUrl] = useState(null);

    const openVideoPopup = (url) => {
        setVideoUrl(url);
        console.log("Video URL:", url);
    };
  
    const closeVideoPopup = () => {
        setVideoUrl(null);
    };

    return (
        <section className='max-container'>
            <h1 className='head-text'>
                My{" "}
                <span className='blue-gradient_text drop-shadow font-semibold'>
                    Projects
                </span>
            </h1>

            <p className='text-slate-500 mt-2 leading-relaxed'>
            Despite starting my coding journey just 4 years ago, I've already tackled a diverse array of projects throughout my graduate studies. These examples showcase the dedication and skill I bring to each endeavor.
            </p>

            <div className='flex flex-wrap my-20 gap-16'>
                {projects.map((project) => (
                    <div className='lg:w-[400px] w-full' key={project.name}>
                        <div className='block-container w-12 h-12'>
                            <div className={`btn-back rounded-xl ${project.theme}`} />
                            <div className='btn-front rounded-xl flex justify-center items-center'>
                                <img
                                    src={project.iconUrl}
                                    alt='threads'
                                    className='w-1/2 h-1/2 object-contain'
                                />
                            </div>
                        </div>

                        <div className='mt-5 flex flex-col'>
                            <h4 className='text-2xl font-poppins font-semibold'>
                                {project.name}
                            </h4>
                            <p className='mt-2 text-slate-500'>{project.description}</p>
                            <div className='mt-5 flex items-center gap-2 font-poppins'>
                                <button
                                    onClick={() => openVideoPopup(project.video)}
                                    className="font-semibold text-blue-600"
                                >
                                    Watch Video
                                </button>
                                {project.pdfUrl && (
                                    <a
                                        href={project.pdfUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="font-semibold text-blue-600"
                                    >
                                        View PDF
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {videoUrl && (
                <div className="video-popup">
                    {videoUrl.type === 'github' ? (
                        <video controls>
                            <source src={videoUrl.url} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    ) : (
                      <iframe
                      title="YouTube Video"
                      width="560"
                      height="315"
                      src={`https://www.youtube.com/embed/${videoUrl.url.split('v=')[1]}`}
                      frameBorder="0"
                      allowFullScreen
                      ></iframe>
                    )}
                    <button onClick={closeVideoPopup}>Close</button>
                </div>
            )}

            <hr className='border-slate-200' />
            <CTA />
        </section>
    );
};

export default Projects;
