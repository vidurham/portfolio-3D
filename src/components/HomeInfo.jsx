import React from 'react'
import { Link } from 'react-router-dom';

const InfoBox = ({ text, link, btnText }) => (
    <div className='info-box'>
        <p className='font-medium sm:text-xl text-center p-4'>
          {text}
        </p>
        <Link to={link} className='neo-brutalism-white neo-btn'>
            {btnText}
        </Link>
    </div>
)

const renderContent = {
    1: (
      <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
        Hi, I'm
        <span className='font-semibold mx-2 text-white'>Vincent Durham</span>
        👋
        <br />
        A Software Engineer from Ohio
      </h1>
    ),
    2: (
      <InfoBox 
        text="Explore the former website for the first ever app developed by Durham App Designs"
        link = "https://www.durhamappdesigns.com/"
        btnText="Go to old Website"
      />
    ),
    3: (
      <InfoBox 
        text="From drones to biology, see former jobs and education"
        link = "/about"
        btnText="View Resume"
      />
    ),
    4: (
      <InfoBox 
        text="Learn more about Vincent and see his path along this coding journey"
        link = "/about"
        btnText="Learn more"
      />
    ),
    5: (
      <InfoBox 
        text="Look through recent projects completed in the past four years"
        link = "/projects"
        btnText="Visit portfolio"
      />
    ),
    6: (
      <InfoBox 
        text="Need a project done or looking for a developer?"
        link = "/contact"
        btnText="Let's Talk"
      />
    ),
}


const HomeInfo = ({currentStage}) =>{
    return renderContent[currentStage] || null;
}

export default HomeInfo;