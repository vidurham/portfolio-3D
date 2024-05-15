import { dayton, davidson, lucid, uncc } from "../assets/images";
import {
    car,
    contact,
    css,
    DavidsonCollege,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "Davidson College",
        company_name: "Bachelor of Science, Biology",
        icon: davidson,
        iconBg: "black",
        date: "August 2016 - May 2020",
        points: [
            "Wadgymar Lab at Davidson College",
            "Davidson College Lake Campus Lifeguard",
            "Davidson Football Team",
            "Phi Delta Theta",
        ],
    },
    {
        title: "Lucid Drone Technologies",
        company_name: "Drone Service Operator",
        icon: lucid,
        iconBg: "aqua",
        date: "Oct 2020 - June 2022",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "University of North Carolina-Charlotte",
        company_name: "Full-Stack Coding Certificate",
        icon: uncc,
        iconBg: "lightgreen",
        date: "Jan 2022 - June 2022",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "University of Dayton",
        company_name: "Master of Computer Science & Graduate Certificate in Autonomous Systems",
        icon: dayton,
        iconBg: "#a2d2ff",
        date: "Aug 2022 - May 2024",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/vidurham',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/vincent-durham/',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Virtual Reaity Roller Coaster',
        description: 'Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.',
        video: {
            type: 'youtube',
            url: 'https://www.youtube.com/watch?v=ngchv6CqZI8'
        }
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Augmented Reality Painting',
        description: 'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
        video: {
            type: 'github',
            url: 'https://raw.githubusercontent.com/vidurham/project-videos/main/Allyouneed.mp4'
        }
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Multiplayer Blade Spinners',
        description: 'Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.',
        video: {
            type: 'github',
            url: 'https://raw.githubusercontent.com/vidurham/project-videos/main/AR_Game.mp4'
        }
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'AI Learning Puzzle',
        description: 'Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.',
        video: {
            type: 'github',
            url: 'https://raw.githubusercontent.com/vidurham/project-videos/main/puzzle.mp4'
        }
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'AI Arm Walk',
        description: 'Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.',
        video: {
            type: 'github',
            url: 'https://raw.githubusercontent.com/vidurham/project-videos/main/arm.mp4'
        }
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'Neural Network Image Detection',
        description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
        video: {
            type: 'github',
            url: 'https://raw.githubusercontent.com/vidurham/project-videos/main/Final_Detection.mp4'
        }
    }
];